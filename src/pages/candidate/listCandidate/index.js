import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import makeColumns from "./tableColumns";
import Spinner from "../../../components/spinner";
import useAxios from "../../../utils/hooks/useAxios";
import { setPersonList } from "../../../redux/actions/personActions";
import Table from "../../../components/table";
import Feedback from "../../../components/feedback";

const ListCandidate = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const { personList, loading, error } = useSelector((state) => state.person);
  const columns = makeColumns();

  useEffect(() => {
    dispatch(setPersonList(api));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }



  return (
    <Grid container>
      <Feedback isOpen={Boolean(error)} message="Erro ao buscar lista de candidatos" severity="error"/>
      <Grid item xl={12} lg={12}>
        <Table
          data={personList}
          columns={columns}
          options={{}}
          title="Relacionamento de Candidatos"
        />
      </Grid>
    </Grid>
  );
};

export default ListCandidate;
