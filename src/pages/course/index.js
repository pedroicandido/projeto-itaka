import { useEffect, useState } from 'react'
import Title from '../../components/title'
import { useForm, useFormState, FormProvider, useWatch } from 'react-hook-form'
import useStyles from './styles'
import Backdrop from '../../components/backdrop'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '../../components/input'
import makeDefaultValues from '../../domain/initialValues/course'
import { Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import schemaValidation from '../../helpers/validations/course'

export default function Course() {
  const classes = useStyles()
  const defaultValues = makeDefaultValues({ initialHour: "00:00", finalHour: "01:00" });
  const methods = useForm({ defaultValues, resolver: yupResolver(schemaValidation) })
  const { errors } = useFormState({ control: methods.control })

  const onSubmit = data => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Title>CADASTRO DE CURSO</Title>
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={4} xs={12}>
              <Input name="name" fullWidth label="Nome do Curso" variant="outlined" helperText={errors.name?.message} error={errors.name && true} />
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={3} xs={12}>
              <Input name="initialHour" type="time" fullWidth label="Hora Inicial" variant="outlined" helperText={errors.initialHour?.message} error={errors.initialHour && true} />
            </Grid>
            <Grid item xl={3} lg={4} md={4} sm={3} xs={12}>
              <Input name="finalHour" type="time" fullWidth label="Hora final" variant="outlined" helperText={errors.finalHour?.message} error={errors.finalHour && true} />
            </Grid>
            <Grid item xl={12} lg={12} md={6} sm={6} xs={12}>
              <Grid container alignItems="center" justify="flex-end" spacing={2}>
                <Grid item xl={1} lg={1}>
                  <Button variant="contained" color="primary" fullWidth type="submit">Submit</Button>
                </Grid>
                <Grid item xl={1} lg={1}>
                  <Button variant="contained" color="secondary" fullWidth>Cancelar</Button>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Paper>
      </form>
    </FormProvider>
  );
}