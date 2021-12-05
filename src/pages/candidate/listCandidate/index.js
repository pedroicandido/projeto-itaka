import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import MuiDataTables from "mui-datatables";
import makeColumns from "./tableColumns";
import Spinner from "../../../components/spinner";
import useAxios from "../../../utils/hooks/useAxios";
import { setPersonList } from "../../../redux/actions/personActions";

const ListCandidate = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const { personList, loading } = useSelector((state) => state.person);
  const columns = makeColumns();

  useEffect(() => {
    dispatch(setPersonList(api))
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Grid container>
      <Grid item xl={12} lg={12}>
        <MuiDataTables
          data={personList}
          columns={columns}
          title="Relacionamento de Candidatos"
        />
      </Grid>
    </Grid>
  );
};

export default ListCandidate;
