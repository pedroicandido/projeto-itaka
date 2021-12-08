import Button from "@material-ui/core/Button";
import dayjs from "dayjs";

export default (onRemoveHandler) => {
  return [
    {
      name: "nome",
      label: "Nome",
    },
    {
      name: "parentescoLabel",
      label: "Parentesco",
    },
    {
      name: "dt_nascimento",
      label: "Data de Nascimento",
      options: {
        customBodyRender: (value) => {
          return value && dayjs(value).format("DD/MM/YYYY");
        },
      },
    },
    {
      name: "estado_civil",
      label: "Estado Civil",
      options: {
        customBodyRender: (value) => {
          return value && value.estado_civil;
        },
      },
    },
    {
      name: "escolaridade",
      label: "Escolaridade",
      options: {
        customBodyRender: (value) => {
          return value && value.escolaridade;
        },
      },
    },
    {
      name: "renda",
      label: "Renda",
      options: {
        customBodyRender: (value) => {
          return `R$ ${value}`;
        },
      },
    },
    {
      name: "id",
      label: "Excluir",
      options: {
        customBodyRender: (value) => {
          return (
            <Button
              variant="outlined"
              onClick={onRemoveHandler.bind(null, value)}
              color="primary"
            >
              REMOVER
            </Button>
          );
        },
      },
    },
  ];
};
