
import { useForm, useFormState, FormProvider } from 'react-hook-form'
import useStyles from './styles'
import Backdrop from '../../components/backdrop'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '../../components/input'
import { makeDefaultValues } from '../../domain/initialValues/user'
import schemaValidation from '../../helpers/validations/addUser'
import { Button, Divider, Typography } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { ADD_USER } from '../../redux/types';

export default function AddUser() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const defaultValues = makeDefaultValues();
  const methods = useForm({ defaultValues, resolver: yupResolver(schemaValidation) })
  const { errors } = useFormState({ control: methods.control })
  const onSubmit = data => {
    console.log(data)
    dispatch({ type: ADD_USER, user: data })
    history.replace('/user')
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.title}> Cadastrar Usuário</Typography>
              <Divider />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="name" fullWidth label="Nome Completo" variant="outlined" helperText={errors.name?.message} error={errors.name && true} />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="cress" fullWidth label="Número do Cress" variant="outlined" helperText={errors.cress?.message} error={errors.cress && true} />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="email" fullWidth label="Email" variant="outlined" helperText={errors.email?.message} error={errors.email && true} />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="password" type="password" fullWidth label="Senha" variant="outlined" helperText={errors.password?.message} error={errors.password && true} />
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="passwordConfirmation" type="password" fullWidth label="Confirmação da Senha" variant="outlined" helperText={errors.passwordConfirmation?.message} error={errors.passwordConfirmation && true} />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container justify="flex-end">
                <Grid item xl={1} lg={2} md={2} sm={3} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth>Cadastrar</Button>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Paper>
      </form>
    </FormProvider>
  );
}