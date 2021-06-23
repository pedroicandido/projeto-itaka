import { useEffect } from "react";
import Radio from "../radio";
import Paper from "@material-ui/core/Paper";
import Input from "../input";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { phoneMask } from "../../helpers/masks";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import yesOrNoOptions from "../../domain/selectsOptions/yesOrNo";

const SocialFamilyCondition = () => {
  const classes = useStyles();
  const { setValue, setError, control } = useFormContext();
  const { errors } = useFormState({ control });

  const hasFamilyMedicineUse = useWatch({ control, name: "hasFamilyMedicineUse" });
  const hasFamilyDeficiency = useWatch({ control, name: "hasFamilyDeficiency" });
  const hasFamilyMedicaltreatment = useWatch({ control, name: "hasFamilyMedicaltreatment" });
  const hasFamilyChemicalDependency = useWatch({ control, name: "hasFamilyChemicalDependency" });
  const hasFamilySocialAccompaniment = useWatch({ control, name: "hasFamilySocialAccompaniment" });
  const hasFamilySocialBenefit = useWatch({ control, name: "hasFamilySocialBenefit" });

  useEffect(()=>{
    console.log(errors)
  },[errors])
  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            6. CONDIÇÕES SOCIAIS E DE SAÚDE DA FAMÍLIA
          </Typography>
          <Divider />
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilyMedicaltreatment"
                control={control}
                legend="Alguém da composição familiar esta em tratamento médico?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilyMedicaltreatment === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familyMedicaltreatment"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familyMedicaltreatment?.message}
                  error={errors.familyMedicaltreatment && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilyMedicineUse"
                control={control}
                legend="Alguém da composição familiar faz uso contínuo de medicamentos?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilyMedicineUse === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familyMedicineUse"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familyMedicineUse?.message}
                  error={errors.familyMedicineUse && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilyDeficiency"
                control={control}
                legend="Alguém da composição familiar com deficiência?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilyDeficiency === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familyDeficiency"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familyDeficiency?.message}
                  error={errors.familyDeficiency && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilyChemicalDependency"
                control={control}
                legend="Alguém na família sofre de dependência química?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilyChemicalDependency === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familyChemicalDependency"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familyChemicalDependency?.message}
                  error={errors.familyChemicalDependency && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilySocialAccompaniment"
                control={control}
                legend="Alguém na família faz algum tipo de tratamento ou acompanhamento terapêutico/social?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilySocialAccompaniment === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familySocialAccompaniment"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familySocialAccompaniment?.message}
                  error={errors.familySocialAccompaniment && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>

        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={12} lg={12}>
              <Radio
                name="hasFamilySocialBenefit"
                control={control}
                legend="Alguém de sua família recebe benefício de programa social?"
                options={yesOrNoOptions}
              />
            </Grid>
            {hasFamilySocialBenefit === "s" && (
              <Grid item xl={6} lg={6}>
                <Input
                  control={control}
                  name="familySocialBenefit"
                  fullWidth
                  label="Qual?"
                  variant="outlined"
                  helperText={errors.familySocialBenefit?.message}
                  error={errors.familySocialBenefit && true}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialFamilyCondition;
