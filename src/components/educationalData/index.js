import { useEffect } from "react";
import Checkbox from "../checkbox";
import Input from "../input";
import Select from "../select";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useWatch, useFormState, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../errorMessage";
import schoolShiftOptions from "../../domain/selectsOptions/schoolShift";
import schoolTypeOptions from "../../domain/selectsOptions/schoolType";
import AddSchoolModal from "../addSchoolModal";
import Autocomplete from "../autocomplete";
import { getSchool } from "../../redux/actions/schoolActions";
import useAxios from "../../utils/hooks/useAxios";

const EducationData = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const { loading, options } = useSelector((state) => state.school);
  const schoolingOptions = useSelector((state) => state.schooling.options);
  const classes = useStyles();
  const { control, setValue } = useFormContext();
  const { errors } = useFormState({ control });
  const isStudent = useWatch({ control, name: "isStudent" });

  const schoolName = useWatch({ control, name: "schoolName.escola" });

  const handleChangeAutocomplete = (data, option) => {
    setValue("schoolName.name", option?.escola);
    setValue("schoolName.id", option?.id);
  };

  useEffect(() => {
    if (schoolName && schoolName.length % 3 === 0) {
      dispatch(getSchool({ api, value: schoolName }));
    }
  }, [schoolName, dispatch]);

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
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <Autocomplete
              name="schoolName.escola"
              fullWidth
              label="Procurar escola"
              variant="outlined"
              loading={loading}
              options={options}
              keyLabel="escola"
              onChangeAutocomplete={handleChangeAutocomplete}
              helperText={errors.schoolName?.message}
              error={errors.schoolName && true}
            />
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Input
              name="grade"
              fullWidth
              label="Serie"
              variant="outlined"
              helperText={errors.grade?.message}
              error={errors.grade && true}
            />
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Input
              name="schoolClass"
              fullWidth
              label="Turma"
              variant="outlined"
              helperText=""
            />
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Select
              name="schoolShift"
              variant="outlined"
              options={schoolShiftOptions}
              placeholder="Turno"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Select
              name="schooling"
              variant="outlined"
              options={schoolingOptions}
              placeholder="Escolaridade"
            />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <AddSchoolModal />
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
