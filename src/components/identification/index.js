import { useEffect, useState } from "react";
import { useFormState, useWatch, useFormContext } from "react-hook-form";
import useStyles from "./styles";
import Backdrop from "../backdrop";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Input from "../input";
import Select from "../select";
import { cpfMask, cepMask, birthMask, phoneMask } from "../../helpers/masks";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../utils/hooks/useAxios";
import { setCivilStatus } from "../../redux/actions/civilStatusActions";
import { setKinship } from "../../redux/actions/kinshipActions";
import { setRace } from "../../redux/actions/raceActions";
import { setWorkSituation } from "../../redux/actions/workSituationActions";
import Spinner from "../spinner";
import AddPersonModal from "../addPersonModal";

export default function Identification() {
  const classes = useStyles();
  const api = useAxios();
  const dispatch = useDispatch();
  const {
    options: civilStatusOptions,
    loading: isLoadingCivilStatus,
    error: civilStatusError,
  } = useSelector((state) => state.civilStatus);
  const {
    options: kinshinOptions,
    loading: isLoadingKinship,
    error: kinshinError,
  } = useSelector((state) => state.kinship);

  const {
    options: raceOptions,
    loading: isLoadingRace,
    error: raceError,
  } = useSelector((state) => state.race);

  const {
    options: wsOptions,
    loading: isLoadingWs,
    error: wsError,
  } = useSelector((state) => state.workSituation);

  const { setValue, setError, control } = useFormContext();
  const { errors } = useFormState({ control });

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [disabledFields, setDisabledFields] = useState(true);

  const birthDate = useWatch({ control, name: "birthDate" });
  const cellPhone = useWatch({ control, name: "cellPhone" });
  const cpf = useWatch({ control, name: "cpf" });
  const fatherCpf = useWatch({ control, name: "fatherCpf" });
  const homePhone = useWatch({ control, name: "homePhone" });
  const messagePhone = useWatch({ control, name: "messagePhone" });
  const motherCpf = useWatch({ control, name: "motherCpf" });
  const zipCode = useWatch({ control, name: "zipCode" });



  useEffect(() => {
    dispatch(setCivilStatus(api));
    dispatch(setKinship(api));
    dispatch(setRace(api));
    dispatch(setWorkSituation(api));
  }, [dispatch]);

  useEffect(() => {
    const formatedBirthDate = birthMask(birthDate);
    setValue("birthDate", formatedBirthDate);
  }, [birthDate, setValue]);

  useEffect(() => {
    const formatedCellPhone = phoneMask(cellPhone);
    setValue("cellPhone", formatedCellPhone);
  }, [cellPhone, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(cpf);
    setValue("cpf", formatedCpf);
  }, [cpf, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(fatherCpf);
    setValue("fatherCpf", formatedCpf);
  }, [fatherCpf, setValue]);

  useEffect(() => {
    const formatedHomePhone = phoneMask(homePhone);
    setValue("homePhone", formatedHomePhone);
  }, [homePhone, setValue]);

  useEffect(() => {
    const formatedMessagePhone = phoneMask(messagePhone);
    setValue("messagePhone", formatedMessagePhone);
  }, [messagePhone, setValue]);

  useEffect(() => {
    const formatedCpf = cpfMask(motherCpf);
    setValue("motherCpf", formatedCpf);
  }, [motherCpf, setValue]);

  useEffect(() => {
    const formatedZip = cepMask(zipCode);
    setValue("zipCode", formatedZip, { shouldValidate: true });
  }, [zipCode, setValue]);

  if (
    isLoadingCivilStatus ||
    isLoadingKinship ||
    isLoadingRace ||
    isLoadingWs
  ) {
    return <Spinner />;
  }

  return (
    <Paper className={classes.paper}>
      <Backdrop open={openBackdrop} />
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            1. IDENTIFICAÇÃO DO CANDIDATO
          </Typography>
          <Divider />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="name"
            fullWidth
            label="Nome Completo"
            variant="outlined"
            helperText={errors.name?.message}
            error={errors.name && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="cpf"
            fullWidth
            label="CPF"
            variant="outlined"
            helperText={errors.cpf?.message}
            error={errors.cpf && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="rg"
            fullWidth
            label="Documento de Identidade"
            variant="outlined"
            helperText={errors.rg?.message}
            error={errors.rg && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="birthDate"
            fullWidth
            label="Data de Nascimento"
            variant="outlined"
            helperText={errors.birthDate?.message}
            error={errors.birthDate && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="birthplace"
            fullWidth
            label="Naturalidade"
            variant="outlined"
            helperText={errors.birthplace?.message}
            error={errors.birthplace && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Select
            name="skinColor"
            fullWidth
            placeholder="Cor"
            options={raceOptions}
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Select
            name="laborSituation"
            fullWidth
            placeholder="Situação Trabalhista"
            options={wsOptions}
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Select
            name="maritalStatus"
            variant="outlined"
            options={kinshinOptions}
            placeholder="Estado Civil"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="email"
            fullWidth
            label="Email"
            variant="outlined"
            helperText={errors.email?.message}
            error={errors.email && true}
          />
        </Grid>

        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="street"
            fullWidth
            label="Endereço Residencial"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
          <Input
            name="houseNumber"
            fullWidth
            label="Número"
            variant="outlined"
            disabled={disabledFields}
          />
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
          <Input
            name="complement"
            fullWidth
            label="Complemento"
            variant="outlined"
            disabled={disabledFields}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="district"
            fullWidth
            label="Bairro"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="city"
            fullWidth
            label="Cidade"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="uf"
            fullWidth
            label="Estado"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="zipCode"
            fullWidth
            label="CEP"
            variant="outlined"
            helperText={errors.zipCode?.message}
            error={errors.zipCode && true}
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="cellPhone"
            fullWidth
            label="Telefone Celular (DDD)"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="homePhone"
            fullWidth
            label="Telefone Residencial"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
          <Input
            name="messagePhone"
            fullWidth
            label="Telefone de Recado"
            variant="outlined"
          />
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={9} xs={12}>
          <Input
            name="fatherName.name"
            fullWidth
            label="Nome do Pai"
            variant="outlined"
            disabled
          />
        </Grid>

        <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
          <AddPersonModal handleSelectPerson={(data) => setValue("fatherName", data)}/>
        </Grid>

        <Grid item xl={10} lg={10} md={10} sm={9} xs={12}>
          <Input
            name="motherName.name"
            fullWidth
            label="Nome da Mãe"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
          <AddPersonModal handleSelectPerson={(data) => setValue("motherName", data)}/>
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={9} xs={12}>
          <Input
            name="responsible.name"
            fullWidth
            label="Responsável Pelo Candidato"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
          <AddPersonModal handleSelectPerson={(data) => setValue("responsible", data)}/>
        </Grid>
      </Grid>
    </Paper>
  );
}
