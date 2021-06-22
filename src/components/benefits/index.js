import { useEffect} from 'react'
import Aux from '../../hoc/auxiliar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Select from '../select'
import schoolShiftOptions from '../../domain/selectsOptions/schoolShift'
import { useFieldArray, useFormContext, useFormState, useWatch } from 'react-hook-form'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import ErrorMessage from '../errorMessage'

const cursos = [{ value: 1, label: 'Programação' }, { value: 2, label: 'Mecanica' }, { value: 3, label: 'Administração' }]
const horarios = [{ value: 1, label: '12:00' }, { value: 2, label: '15:00' }, { value: 3, label: '18:00' }]

const Benefits = () => {

  const classes = useStyles();
  const { control } = useFormContext()
  const benefits = useWatch({control, name: 'benefits'})
  const { errors } = useFormState({ control })
  const { fields, prepend, remove, append } = useFieldArray({
    control,
    name: "benefits",
  });


  useEffect(()=>{
    console.log(benefits)
  },[benefits])



  return (
    <Paper className={classes.paper} elevation={4}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">4. BENEFICIOS PLEITADOS</Typography>
          <Divider />
        </Grid>
        {fields.map((item, index) => (
          <Aux key={item.id}>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Select name={`benefits.${index}.course`} variant="outlined" options={cursos} placeholder="Curso" defaultValue={item.course} />
              <ErrorMessage>{errors.benefits?.length >= 0 && errors.benefits[index]?.course?.message}</ErrorMessage>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Select name={`benefits.${index}.shift`} variant="outlined" defaultValue={item.shift} options={schoolShiftOptions} placeholder="Turno" />
              <ErrorMessage>{errors.benefits?.length > 0 && errors.benefits[index]?.shift?.message}</ErrorMessage>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Select name={`benefits.${index}.hour`} variant="outlined" options={horarios} placeholder="Horário" defaultValue={item.hour}/>
              <ErrorMessage>{errors.benefits?.length > 0 && errors?.benefits[index]?.hour?.message}</ErrorMessage>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Button variant="contained" color="secondary" fullWidth onClick={() => remove(index)}>REMOVER</Button>
            </Grid>
          </Aux>
        )
        )}

        <Grid item>
          <Button variant="contained" color="primary" fullWidth onClick={() => append({ course: '', shift: "", hour: "" })}>ADICIONAR</Button>
        </Grid>
      </Grid>
    </Paper >
  );
}


export default Benefits