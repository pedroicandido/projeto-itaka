import { Grid, Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import Volunteer from "../../../components/volunteer";

import { makeDefaultValues } from "../../../domain/initialValues/volunteer";

const AddVolunteer = (props) => {
  const defaultValues = makeDefaultValues();
  console.log(defaultValues)
  const methods = useForm({ defaultValues });
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Volunteer title="Cadastrar Voluntário" />
        <Grid container justify="flex-end" alignItems="center">
          <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default AddVolunteer;
