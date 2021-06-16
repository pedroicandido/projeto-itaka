import { useEffect, useState } from 'react'
import { useForm, useFormState, FormProvider } from 'react-hook-form'
import useStyles from './styles'
import Backdrop from '../../components/backdrop'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '../../components/input'
import makeDefaultValues from '../../domain/models/user'
import schemaValidation from '../../helpers/validations/addUser'
import { Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';

export default function AddUser() {
  const classes = useStyles()
  const defaultValues = makeDefaultValues();
  const methods = useForm({ defaultValues, resolver: yupResolver(schemaValidation) })
  const { errors } = useFormState({ control: methods.control })
  const onSubmit = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Input name="name" fullWidth label="Nome Completo" variant="outlined" helperText={errors.name?.message} error={errors.name && true} />
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
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <Button type="submit">Submit</Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </FormProvider>
  );
}