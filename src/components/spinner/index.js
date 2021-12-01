import { Grid, CircularProgress } from "@material-ui/core";

const Spinner = () => (
  <Grid container alignItems="center" justify="center" style={{height:'100vh'}}>
    <Grid item xl={1} lg={1} md={1} sm={2} xs={2}>
      <CircularProgress />
    </Grid>
  </Grid>
);

export default Spinner;
