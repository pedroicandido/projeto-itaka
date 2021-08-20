import { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useFormContext, useWatch } from "react-hook-form";
import makeTableColumns from "./config/tableColumns";
import { TableFooter, TableCell, TableRow } from "@material-ui/core";

const FamilyCompositionList = () => {
  const { control, setValue } = useFormContext();
  const familyComposition = useWatch({ control, name: "familyComposition" });
  const familySocialBenefit = useWatch({
    control,
    name: "familySocialBenefit",
  });
  const familyCompositionTotalFinance = useWatch({
    control,
    name: "familyCompositionTotalFinance",
  });

  const onRemoveHandler = (id) => {
    const updateFamilyComposition = familyComposition.filter(
      (parent) => parent.id !== id
    );
    setValue("familyComposition", updateFamilyComposition);
  };
//ESTA ERRADOOOOOOOOOOOOOOOOOOOOO! REFAZER
  useEffect(() => {
    if (familyComposition) {
      const totalFinance = familyComposition.reduce(
        (acumulador, current) =>
          +acumulador + +current.familyCompositionFinance,
        0
      );
      setValue("familyCompositionTotalFinance", totalFinance);
    }
  }, [familyComposition]);

  const columns = makeTableColumns(onRemoveHandler);

  return (
    <MUIDataTable
      columns={columns}
      title="Composição Familiar"
      data={familyComposition}
      options={{
        filter: false,
        search: false,
        download: false,
        print: false,
        selectableRows: "single",
        customFooter: () => {
          return (
            <TableFooter>
              <TableRow>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: 18, color: "black" }}
                >
                  Renda total de Benefícios: R${familySocialBenefit}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  align="right"
                  style={{ fontWeight: "bold", fontSize: 18, color: "black" }}
                >
                  Renda Total Familiar: R$
                  {familyCompositionTotalFinance.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          );
        },
      }}
    />
  );
};

export default FamilyCompositionList;
