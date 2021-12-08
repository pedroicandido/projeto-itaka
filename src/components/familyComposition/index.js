import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Input from "../input";

import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Select from "../select";
import { Button } from "@material-ui/core";
import FamilyCompositionList from "./components/familyCompositionList";
import ErrorMessage from "../errorMessage";
import { familyCompositionFields } from "../../domain/initialValues/candidate";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Autocomplete from "../autocomplete";
import { searchPersonByName } from "../../redux/actions/personActions";
import useAxios from "../../utils/hooks/useAxios";

const FamilyComposition = () => {
  const api = useAxios();
  const classes = useStyles();
  const dispatch = useDispatch();
  const kinshinOptions = useSelector((state) => state.kinship.options);
  const searchOptions = useSelector((state) => state.person.search);

  const loadingOptions = useSelector((state) => state.person.loading);
  const { control, trigger, setValue, reset } = useFormContext();
  const { errors } = useFormState({ control });

  const familyComposition = useWatch({ control, name: "familyComposition" });

  const familyCompositionDataController = useWatch({
    control,
    name: "familyCompositionDataController",
  });

  const familyCompositionName = useWatch({
    control,
    name: "familyCompositionData.name",
  });
  const familyCompositionRelationship = useWatch({
    control,
    name: "familyCompositionRelationship",
  });

  const hasNoValidationError = async () => {
    return await trigger(familyCompositionFields);
  };

  const addFamilyComposite = () => {
    const newFamilyComposite = {
      ...familyCompositionDataController,
      parentescoLabel: familyCompositionRelationship.label,
      parentescoId: familyCompositionRelationship.value,
    };
    setValue("familyComposition", [...familyComposition, newFamilyComposite]);
  };

  const clearFields = () => {
    setValue("familyCompositionRelationship", "");
  };

  const onAddHandler = async () => {
    const result = await hasNoValidationError();
    if (result) {
      addFamilyComposite();
      clearFields();
    }
  };

  const handleChangeAutocomplete = (data, option) => {
    setValue("familyCompositionDataController", option);
  };

  useEffect(() => {
    if (familyCompositionName && familyCompositionName.length % 3 === 0) {
      dispatch(searchPersonByName({ api, value: familyCompositionName }));
    }
  }, [familyCompositionName]);

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
                  <Autocomplete
                    name="familyCompositionData.name"
                    fullWidth
                    label="Procurar por familiar"
                    variant="outlined"
                    loading={loadingOptions}
                    options={searchOptions}
                    keyLabel="nome"
                    keyCompare="id"
                    onChangeAutocomplete={handleChangeAutocomplete}
                    helperText={errors.familyCompositionData?.name?.message}
                    error={errors.familyCompositionData?.name && true}
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

                <Grid item xl={4} lg={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{minHeight:"56px"}}
                    onClick={onAddHandler}
                  >
                    Adicionar
                  </Button>
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
