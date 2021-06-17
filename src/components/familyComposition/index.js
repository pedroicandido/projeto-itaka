import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Input from "../input";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import {
  useFormContext,
  useWatch,
  useFormState,
} from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Select from "../select";
import maritalStatusOptions from "../../domain/fields/maritalStatus";
import { Button } from "@material-ui/core";
import uuid from 'react-uuid'

const FamilyComposition = () => {
  const classes = useStyles();
  const { control, trigger, setValue } = useFormContext();
  const { errors } = useFormState({ control });
  const familyComposition = useWatch({control, name:"familyComposition"})
  const familyCompositionFinance = useWatch({control, name:"familyCompositionFinance"})
  const familyCompositionMaritalStatus = useWatch({control, name:"familyCompositionMaritalStatus"})
  const familyCompositionName = useWatch({control, name:"familyCompositionName"})
  const familyCompositionOccupation = useWatch({control, name:"familyCompositionOccupation"})
  const familyCompositionRelationship = useWatch({control, name:"familyCompositionRelationship"})
  const familyCompositionScholarity = useWatch({control, name:"familyCompositionScholarity"})

  useEffect(()=>{
    console.log(familyComposition)
  },[familyComposition])

  const hasAnyError = async () => {
    const result = await trigger(["familyCompositionAge",
    "familyCompositionFinance",
    "familyCompositionMaritalStatus",
    "familyCompositionName",
    "familyCompositionOccupation",
    "familyCompositionRelationship",
    "familyCompositionScholarity"])
    return result
  }
  const addFamilyComposite = () => {
    const newFamilyComposite = {
      id: uuid(),
      familyCompositionFinance,
      familyCompositionMaritalStatus,
      familyCompositionName,
      familyCompositionOccupation,
      familyCompositionRelationship,
      familyCompositionScholarity
    }
    setValue('familyComposition', [...familyComposition, newFamilyComposite])
  }

  const onAddHandler = () => {
    const result = hasAnyError()
    if(result){
      addFamilyComposite()
    }
  }

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            8. COMPOSIÇÃO FAMILIAR
          </Typography>
          <Divider />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4}>
              <Input
                control={control}
                name="familyCompositionName"
                fullWidth
                label="Nome"
                variant="outlined"
              />
            </Grid>

            <Grid item xl={4} lg={4}>
                <Select control={control} name="familyCompositionRelationship" variant="outlined" options={[{ value: 1, label: 'Mae' }]} placeholder="Parentesco" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="familyCompositionAge"
                  fullWidth
                  label="Idade"
                  variant="outlined"
                  helperText={errors.familySocialBenefit?.message}
                  error={errors.familySocialBenefit && true} />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Select control={control} name="familyCompositionMaritalStatus" variant="outlined" options={maritalStatusOptions} placeholder="ESTADO CIVIL" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="familyCompositionOccupation"
                  fullWidth
                  label="Profissão"
                  variant="outlined"
                  helperText={errors.familyCompositionOccupation?.message}
                  error={errors.familyCompositionOccupation && true} />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Select control={control} name="familyCompositionScholarity" variant="outlined" options={[{ value: 1, label: 'Superior' }]} placeholder="Escolaridade" />
              </Grid>

              <Grid item xl={4} lg={4}>
                <Input control={control}
                  name="familyCompositionFinance"
                  type="number"
                  fullWidth
                  label="Renda (R$)"
                  variant="outlined"
                  helperText={errors.familyCompositionFinance?.message}
                  error={errors.familyCompositionFinance && true} />
              </Grid>
            <Grid item xl={4} lg={4}>
              <Button variant="contained" color="primary" fullWidth onClick={onAddHandler}>Adicionar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FamilyComposition;
