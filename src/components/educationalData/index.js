import Checkbox from '../checkbox'
import Input from '../input'
import Select from '../select'
import useStyles from './styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useWatch } from 'react-hook-form'


const EducationData = ({ control }) => {

  const classes = useStyles()
  const isStudent = useWatch({ control, name: 'isStudent' })


  return (
    <Paper className={classes.paper} elevation={4}>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">3. DADOS EDUCACIONAIS DO CANDIDATO</Typography>
          <Divider />
        </Grid>
      </Grid>

      <Checkbox name="isStudent" control={control} label="É estudante?" checked={isStudent} />
      {isStudent &&
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Nome da Escola/Instituição de Ensino" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Select control={control} name="" variant="outlined" options={[{ value: 'PB', label: 'Pública' }, { value: 'PR', label: 'Privado' }]} placeholder="Instituição" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Endereço da Instituição de Ensino" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Bairro" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Serie Atual  serie/ano" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Turma" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Select control={control} name="" variant="outlined" options={[{ value: 1, label: 'Manhã' }, { value: 2, label: 'Tarde' }, { value: 3, label: 'Noite' }]} placeholder="Turno" />
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Escolaridade" variant="outlined" helperText="" error="" />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Input control={control} name="" fullWidth label="Outros cursos já realizados" variant="outlined" helperText="" error="" multiline rows={4} />
          </Grid>
        </Grid>}
    </Paper>
  )
}

export default EducationData