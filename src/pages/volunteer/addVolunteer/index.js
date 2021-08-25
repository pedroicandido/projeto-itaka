import { Grid, Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import Volunteer from "../../../components/volunteer";

const AddVolunteer = (props) => {
  const methods = useForm({ defaultValues: {} });

  return (
    <FormProvider {...methods}>
      <Volunteer title="Cadastrar Voluntário" />
      <Grid container justify="flex-end" alignItems="center">
        <Grid item xl={2} lg={2} md={12} sm={12} xs={12}>
          <Button variant="contained" color="primary" fullWidth type="submit">
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default AddVolunteer;
