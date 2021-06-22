import { useEffect, useState } from 'react'
import { onlyNumbers } from '../../helpers/onlyNumbers'
import matiralStatusOptions from '../../domain/selectsOptions/maritalStatus'
import skinColorOptions from '../../domain/selectsOptions/skinColor'
import { useFormState, useWatch, useFormContext } from 'react-hook-form'
import api from '../../services/api'
import useStyles from './styles'
import Backdrop from '../backdrop'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Input from '../input'
import Select from '../select'

export default function Identification() {
  const classes = useStyles()
  const { setValue, setError, control } = useFormContext()
  const { errors } = useFormState({ control })
  const [openBackdrop, setOpenBackdrop] = useState(false)
  const [disabledFields, setDisabledFields] = useState(true)
  const zipCode = useWatch({ control, name: 'zipCode' })

  const fetchAdress = async (cepNumber) => {
    setOpenBackdrop(true)
    try {
      const response = await api.get(`/api/cep?cep=${cepNumber}`)
      setValue('district', response.data.bairro)
      setValue('city', response.data.cidade)
      setValue('street', response.data.end)
      setValue('uf', response.data.uf)
      setDisabledFields(false)
      console.log(response)
    } catch (err) {
      setError("zipCode", {
        type: "manual",
        message: "Endereço não encontrado!"
      });
      setValue('district', '')
      setValue('city', '')
      setValue('street', '')
      setValue('uf', '')
    }
    setOpenBackdrop(false)
  }


  // useEffect(() => {
  //   if (zipCode.length === 9) {
  //     const formatedZipCode = onlyNumbers(zipCode)
  //     fetchAdress(formatedZipCode)
  //   }
  // }, [zipCode])

  return (
    <Paper className={classes.paper}>
      <Backdrop open={openBackdrop} />
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">1. IDENTIFICAÇÃO DO CANDIDATO</Typography>
          <Divider />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="name" fullWidth label="Nome Completo" variant="outlined" helperText={errors.name?.message} error={errors.name && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="cpf" fullWidth label="CPF" variant="outlined" helperText={errors.cpf?.message} error={errors.cpf && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="rg" fullWidth label="Documento de Identidade" variant="outlined" helperText={errors.rg?.message} error={errors.rg && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="birthDate" fullWidth label="Data de Nascimento" variant="outlined" helperText={errors.birthDate?.message} error={errors.birthDate && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="birthplace" fullWidth label="Naturalidade" variant="outlined" helperText={errors.birthplace?.message} error={errors.birthplace && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Select  name="skinColor" fullWidth placeholder="Cor" options={skinColorOptions} variant="outlined" />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="laborSituation" fullWidth label="Situação Trabalhista" variant="outlined" />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Select  name="maritalStatus" variant="outlined" options={matiralStatusOptions} placeholder="Estado Civil" />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="email" fullWidth label="Email" variant="outlined" helperText={errors.email?.message} error={errors.email && true} />
        </Grid>

        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="street" fullWidth label="Endereço Residencial" variant="outlined" disabled />
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
          <Input  name="houseNumber" fullWidth label="Número" variant="outlined" disabled={disabledFields} />
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
          <Input  name="complement" fullWidth label="Complemento" variant="outlined" disabled={disabledFields} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="district" fullWidth label="Bairro" variant="outlined" disabled />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="city" fullWidth label="Cidade" variant="outlined" disabled />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="uf" fullWidth label="Estado" variant="outlined" disabled />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="zipCode" fullWidth label="CEP" variant="outlined" helperText={errors.zipCode?.message} error={errors.zipCode && true} />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="cellPhone" fullWidth label="Telefone Celular (DDD)" variant="outlined" />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="homePhone" fullWidth label="Telefone Residencial" variant="outlined" />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input  name="messagePhone" fullWidth label="Telefone de Recado" variant="outlined" />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input  name="fatherName" fullWidth label="Nome do Pai" variant="outlined" />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input  name="fatherCpf" fullWidth label="CPF do Pai" variant="outlined" helperText={errors.fatherCpf?.message} error={errors.fatherCpf && true} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input  name="motherName" fullWidth label="Nome da Mãe" variant="outlined" />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input  name="motherCpf" fullWidth label="CPF da Mãe" variant="outlined" helperText={errors.motherCpf?.message} error={errors.motherCpf && true} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input  name="responsible" fullWidth label="Responsável Pelo Candidato" variant="outlined" />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Select  name="parentsMaritalStatus" variant="outlined" options={matiralStatusOptions} placeholder="Estado Civil dos Pais" />
        </Grid>
      </Grid>
    </Paper>
  );
}