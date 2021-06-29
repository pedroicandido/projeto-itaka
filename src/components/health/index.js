import { useEffect } from 'react'
import Radio from '../radio'
import Paper from '@material-ui/core/Paper'
import Input from '../input'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import { phoneMask } from '../../helpers/masks'
import { useFormContext, useWatch, useFormState } from 'react-hook-form'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import yesOrNoOptions from '../../domain/selectsOptions/yesOrNo'

const Health = () => {
  const classes = useStyles()
  const { setValue, setError, control } = useFormContext()
  const { errors } = useFormState({ control })

  const emergencyContactPrimaryPhone = useWatch({ control, name: 'emergencyContactPrimaryPhone' })
  const emergencyContactSecondaryPhone = useWatch({ control, name: 'emergencyContactSecondaryPhone' })
  const hasAllergy = useWatch({ control, name: 'hasAllergy' })
  const hasControlledMedication = useWatch({ control, name: 'hasControlledMedication' })
  const hasSpecialMedicalCondition = useWatch({control, name: 'hasSpecialMedicalCondition'})


  useEffect(() => {
    setValue('emergencyContactPrimaryPhone', phoneMask(emergencyContactPrimaryPhone))
  }, [emergencyContactPrimaryPhone, setValue])

  useEffect(() => {
    setValue('emergencyContactSecondaryPhone', phoneMask(emergencyContactSecondaryPhone))
  }, [emergencyContactSecondaryPhone, setValue])

  return (
    <Paper className={classes.paper} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">5. CONDIÇÕES DE SAÚDE DO CANDIDATO</Typography>
          <Divider />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Input name="emergencyNameContact" fullWidth label="Nome do contato em caso de emergência médica" variant="outlined" helperText={errors.emergencyNameContact?.message} error={errors.emergencyNameContact && true}  />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Input name="emergencyContactPrimaryPhone" fullWidth label="Telefone de emergência 1" variant="outlined" helperText={errors.emergencyContactPrimaryPhone?.message} error={errors.emergencyContactPrimaryPhone && true}  />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Input name="emergencyContactSecondaryPhone" fullWidth label="Telefone de emergência 2" variant="outlined" helperText={errors.emergencyContactSecondaryPhone?.message} error={errors.emergencyContactSecondaryPhone && true}  />
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Radio name="hasControlledMedication" legend="Medicação Controlada" options={yesOrNoOptions} />
            </Grid>
            {hasControlledMedication === 's' &&
              <Grid item xl={8} lg={8} md={12} sm={6} xs={12}>
                <Input name="controlledMedication" fullWidth label="Qual?" variant="outlined" helperText={errors.controlledMedication?.message} error={errors.controlledMedication && true} />
              </Grid>}
          </Grid>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Radio name="hasAllergy" legend="É ALÉRGICO A ALGUMA SUBSTÂNCIA OU MEDICAMENTO?" options={yesOrNoOptions} />
            </Grid>
            {hasAllergy === 's' &&
              <Grid item xl={8} lg={9} md={12} sm={6} xs={12}>
                <Input name="allergyMedications" fullWidth label="Qual?" variant="outlined" helperText={errors.allergyMedications?.message} error={errors.allergyMedications && true} />
              </Grid>}
          </Grid>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Radio name="hasSpecialMedicalCondition" legend="Possui situação médica especial?" options={yesOrNoOptions} />
            </Grid>
            {hasSpecialMedicalCondition === 's' &&
              <Grid item xl={8} lg={9} md={12} sm={6} xs={12}>
                <Input name="specialMedicalCondition" fullWidth label="Qual?" variant="outlined" helperText={errors.specialMedicalCondition?.message} error={errors.specialMedicalCondition && true} />
              </Grid>}
          </Grid>
        </Grid>

      </Grid>
    </Paper>
  )
}

export default Health