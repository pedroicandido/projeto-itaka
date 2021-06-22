import Checkbox from "../checkbox";
import Input from "../input";
import Select from "../select";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useWatch, useFormState, useFormContext } from "react-hook-form";
import ErrorMessage from '../errorMessage'
import schoolShiftOptions from "../../domain/selectsOptions/schoolShift";
import schoolTypeOptions from "../../domain/selectsOptions/schoolType";

const EducationData = () => {
  const classes = useStyles();
  const { control } = useFormContext();
  const { errors } = useFormState({ control });
  const isStudent = useWatch({ control, name: "isStudent" });

  return (
    <Paper className={classes.paper} elevation={4}>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            3. DADOS EDUCACIONAIS DO CANDIDATO
          </Typography>
          <Divider />
        </Grid>
      </Grid>

      <Checkbox name="isStudent" label="É estudante?" checked={isStudent} />
      {isStudent && (
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input
              error={errors.schoolName && true}
              fullWidth
              helperText={errors.schoolName?.message}
              label="Nome da Escola/Instituição de Ensino"
              name="schoolName"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Select
              name="schoolType"
              variant="outlined"
              options={schoolTypeOptions}
              placeholder="Instituição"
            />
            <ErrorMessage>{errors.schoolType?.message}</ErrorMessage>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input
              error={errors.schoolStreet && true}
              fullWidth
              helperText={errors.schoolStreet?.message}
              label="Endereço da Instituição de Ensino"
              name="schoolStreet"
              variant="outlined"
            />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input
              error={errors.schoolDistrict && true}
              fullWidth
              helperText={errors.schoolDistrict?.message}
              label="Bairro"
              name="schoolDistrict"
              variant="outlined"
            />
          </Grid>
          {/* <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input
              name="school"
              fullWidth
              label="Serie Atual  serie/ano"
              variant="outlined"
              helperText=""
            />
          </Grid> */}
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input
              name="schoolClass"
              fullWidth
              label="Turma"
              variant="outlined"
              helperText=""
            />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Select
              name="schoolShift"
              variant="outlined"
              options={schoolShiftOptions}
              placeholder="Turno"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input
              name="schooling"
              fullWidth
              label="Escolaridade"
              variant="outlined"
              helperText=""
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Input
              error={errors.outherCourses && true}
              fullWidth
              helperText={errors.outherCourses?.message}
              label="Outros cursos já realizados"
              multiline
              name="outherCourses"
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default EducationData;
