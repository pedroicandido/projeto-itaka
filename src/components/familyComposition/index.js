import { useEffect } from "react";
import Radio from "../radio";
import Paper from "@material-ui/core/Paper";
import Input from "../input";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { phoneMask, moneyMask } from "../../helpers/masks";
import { useFormContext, useWatch, useFormState, useFieldArray } from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Select from "../select";
import maritalStatusOptions from "../../domain/fields/maritalStatus";
import { Button } from "@material-ui/core";


const FamilyComposition = () => {
  const classes = useStyles();
  const { control } = useFormContext();
  const { errors } = useFormState({ control });
  const t3 = useWatch({ control, name: 't3' })
  const { fields, append, reset } = useFieldArray({ control, name: 'familyComposition' })


  console.log(fields)

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            8. COMPOSIÇÃO FAMILIAR
          </Typography>
          <Divider />
        </Grid>

        {fields.map((field, index) => (
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={field.id}>
            <Grid container spacing={2}>
              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name={`familyComposition[${index}].name`}
                  defaultValue={`${field.name}`}
                  fullWidth
                  label="Nome"
                  variant="outlined" />
              </Grid>

              {/* <Grid item xl={4} lg={4}>
                <Select control={control} name="t22" variant="outlined" options={[{ value: 1, label: 'Mae' }]} placeholder="Parentesco" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="t1"
                  fullWidth
                  label="Idade"
                  variant="outlined"
                  helperText={errors.familySocialBenefit?.message}
                  error={errors.familySocialBenefit && true} />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Select control={control} name="aaa" variant="outlined" options={maritalStatusOptions} placeholder="ESTADO CIVIL" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="t2"
                  fullWidth
                  label="Profissão"
                  variant="outlined"
                  helperText={errors.familySocialBenefit?.message}
                  error={errors.familySocialBenefit && true} />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Select control={control} name="344" variant="outlined" options={[{ value: 1, label: 'Superior' }]} placeholder="Escolaridade" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="t3"
                  type="number"
                  fullWidth
                  label="Renda (R$)"
                  variant="outlined"
                  helperText={errors.familySocialBenefit?.message}
                  error={errors.familySocialBenefit && true} />
              </Grid> */}
              <Grid item xl={4} lg={4}>
                <Button onClick={() => append({ name: '' })} >Adicionar</Button>
              </Grid>
            </Grid>
          </Grid>
        ))}



      </Grid>
    </Paper>
  );
};

export default FamilyComposition;
