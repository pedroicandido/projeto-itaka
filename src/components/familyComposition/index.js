import { useEffect } from "react";
import Aux from "../../hoc/auxiliar";
import Paper from "@material-ui/core/Paper";
import Input from "../input";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Select from "../select";
import maritalStatusOptions from "../../domain/selectsOptions/maritalStatus";
import { Button } from "@material-ui/core";
import FamilyCompositionList from "./components/familyCompositionList";
import ErrorMessage from "../errorMessage";
import { familyCompositionFields } from "../../domain/initialValues/candidate";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "../../utils/hooks/useAxios";
import { v4 as uuidv4 } from "uuid";
import { setKinship } from "../../redux/actions/kinshipActions";

const FamilyComposition = () => {
  const api = useAxios();
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    options: kinshinOptions,
    loading,
    error: kinshinError,
  } = useSelector((state) => state.kinship);
  const civilStatusOptions = useSelector((state) => state.civilStatus.options);
  const { control, trigger, setValue, reset } = useFormContext();
  const { errors } = useFormState({ control });
  const familyComposition = useWatch({ control, name: "familyComposition" });
  const familyCompositionAge = useWatch({
    control,
    name: "familyCompositionAge",
  });
  const familyCompositionFinance = useWatch({
    control,
    name: "familyCompositionFinance",
  });
  const familyCompositionMaritalStatus = useWatch({
    control,
    name: "familyCompositionMaritalStatus",
  });
  const familyCompositionName = useWatch({
    control,
    name: "familyCompositionName",
  });
  const familyCompositionOccupation = useWatch({
    control,
    name: "familyCompositionOccupation",
  });
  const familyCompositionRelationship = useWatch({
    control,
    name: "familyCompositionRelationship",
  });
  const familyCompositionScholarity = useWatch({
    control,
    name: "familyCompositionScholarity",
  });

  const hasNoValidationError = async () => {
    return await trigger(familyCompositionFields);
  };

  const addFamilyComposite = () => {
    const newFamilyComposite = {
      id: uuidv4(),
      familyCompositionAge,
      familyCompositionFinance,
      familyCompositionMaritalStatus,
      familyCompositionName,
      familyCompositionOccupation,
      familyCompositionRelationship,
      familyCompositionScholarity,
    };
    setValue("familyComposition", [...familyComposition, newFamilyComposite]);
    trigger("familyComposition");
  };

  const clearFields = () => {
    setValue("familyCompositionAge", "");
    setValue("familyCompositionFinance", "");
    setValue("familyCompositionMaritalStatus", "");
    setValue("familyCompositionName", "");
    setValue("familyCompositionOccupation", "");
    setValue("familyCompositionRelationship", "");
    setValue("familyCompositionScholarity", "");
  };

  const onAddHandler = async () => {
    const result = await hasNoValidationError();
    if (result) {
      addFamilyComposite();
      clearFields();
    }
  };

  useEffect(() => {
    dispatch(setKinship(api));
  }, [dispatch]);

  if (loading) {
    return "...loading";
  }
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={2}>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography component="h2" variant="h6">
                8. COMPOSIÇÃO FAMILIAR
              </Typography>
              <Divider />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item xl={4} lg={4} sm={4}>
                  <Input
                    helperText={errors.familyCompositionName?.message}
                    error={errors.familyCompositionName && true}
                    name="familyCompositionName"
                    fullWidth
                    label="Nome"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xl={4} lg={4} sm={4}>
                  <Select
                    name="familyCompositionRelationship"
                    variant="outlined"
                    options={kinshinOptions}
                    placeholder="Parentesco"
                  />
                  <ErrorMessage>
                    {errors.familyCompositionRelationship?.message}
                  </ErrorMessage>
                </Grid>

                <Grid item xl={4} lg={4} sm={4}>
                  <Select
                    name="familyCompositionMaritalStatus"
                    variant="outlined"
                    options={civilStatusOptions}
                    placeholder="ESTADO CIVIL"
                  />
                  <ErrorMessage>
                    {errors.familyCompositionMaritalStatus?.message}
                  </ErrorMessage>
                </Grid>

                <Grid item xl={3} lg={3} sm={4}>
                  <Select
                    name="familyCompositionScholarity"
                    variant="outlined"
                    options={[{ value: 1, label: "Superior" }]}
                    placeholder="Escolaridade"
                  />
                  <ErrorMessage>
                    {errors.familyCompositionScholarity?.message}
                  </ErrorMessage>
                </Grid>

                <Grid item xl={3} lg={3} sm={4}>
                  <Input
                    name="familyCompositionAge"
                    fullWidth
                    label="Idade"
                    variant="outlined"
                    helperText={errors.familyCompositionAge?.message}
                    error={errors.familyCompositionAge && true}
                  />
                </Grid>

                <Grid item xl={3} lg={3} sm={4}>
                  <Input
                    name="familyCompositionOccupation"
                    fullWidth
                    label="Profissão"
                    variant="outlined"
                    helperText={errors.familyCompositionOccupation?.message}
                    error={errors.familyCompositionOccupation && true}
                  />
                </Grid>
                <Grid item xl={3} lg={3} sm={4}>
                  <Input
                    name="familyCompositionFinance"
                    type="number"
                    fullWidth
                    label="Renda (R$)"
                    variant="outlined"
                    helperText={errors.familyCompositionFinance?.message}
                    error={errors.familyCompositionFinance && true}
                  />
                </Grid>
                <Grid item xl={12} lg={12}>
                  <Grid container justify="flex-end" alignItems="center">
                    <Grid item xl={2} lg={2}>
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={onAddHandler}
                      >
                        Adicionar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xl={12} lg={12}>
                  <Grid container justify="flex-end" alignItems="center">
                    <Grid item>
                      <ErrorMessage>
                        {errors.familyComposition?.message}
                      </ErrorMessage>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xl={12} lg={12} className={classes.spacing}>
        <FamilyCompositionList />
      </Grid>
    </Grid>
  );
};

export default FamilyComposition;
