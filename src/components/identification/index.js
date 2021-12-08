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
import { setSchooling } from "../../redux/actions/schoolingActions";
import { setSearchCity } from "../../redux/actions/cityActions";
import { setAddress } from "../../redux/actions/addressActions";
import { onlyNumbers } from "../../helpers/onlyNumbers";
import cardStatusOptions from "../../domain/selectsOptions/cardStatusOptions";
import Autocomplete from "../autocomplete";
import genderOptions from "../../domain/selectsOptions/genderOptions";

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

  const { loading: loadingCities, cities } = useSelector((state) => state.city);

  const { loading: isLoadingSchooling, error: schoolingError } = useSelector(
    (state) => state.schooling
  );

  const address = useSelector((state) => state.address.address);
  const loadingAdrress = useSelector((state) => state.address.loading);

  const { setValue, setError, control, clearErrors } = useFormContext();
  const { errors } = useFormState({ control });

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [disabledFields, setDisabledFields] = useState(true);

  const birthPlace = useWatch({ control, name: "birthPlace" });
  const birthDate = useWatch({ control, name: "birthDate" });
  const cellPhone = useWatch({ control, name: "cellPhone" });
  const cpf = useWatch({ control, name: "cpf" });
  const fatherCpf = useWatch({ control, name: "fatherCpf" });
  const homePhone = useWatch({ control, name: "homePhone" });
  const messagePhone = useWatch({ control, name: "messagePhone" });
  const motherCpf = useWatch({ control, name: "motherCpf" });
  const zipCode = useWatch({ control, name: "zipCode" });

  const handleChangeAutocomplete = (event, value) => {
    setValue("birthPlaceData", value);
  };

  useEffect(() => {
    dispatch(setCivilStatus(api));
    dispatch(setKinship(api));
    dispatch(setRace(api));
    dispatch(setWorkSituation(api));
    dispatch(setSchooling(api));
  }, [dispatch]);

  useEffect(() => {
    if (birthPlace && birthPlace.length % 3 === 0) {
      dispatch(setSearchCity({ api, value: birthPlace }));
    }
  }, [birthPlace, dispatch]);

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
    setValue("zipCode", cepMask(zipCode));
    if (zipCode.length === 9) {
      const onlyCepNumbers = onlyNumbers(zipCode);
      dispatch(setAddress({ api, cep: onlyCepNumbers }));
    }
  }, [zipCode, setValue]);

  useEffect(() => {
    if (address?.length === 0) {
      setError("zipCode", {
        type: "required",
        message: "CEP não encontrado",
      });

      setValue("street", "");
      setValue("district", "");
      setValue("city", "");
      setValue("state", "");
      setValue("addressId", "");
    } else {
      clearErrors("cep");
      setValue("street", address?.logradouro);
      setValue("district", address?.bairro);
      setValue("city", address?.cidade);
      setValue("state", address?.estado);
      setValue("addressId", address?.id);
    }
  }, [address]);

  if (
    isLoadingCivilStatus ||
    isLoadingKinship ||
    isLoadingRace ||
    isLoadingWs ||
    isLoadingSchooling
  ) {
    return <Spinner />;
  }

  return (
    <Paper className={classes.paper}>
      <Backdrop open={openBackdrop || loadingAdrress} />
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
              <Typography component="h2" variant="h6">
                1. IDENTIFICAÇÃO DO CANDIDATO
              </Typography>
            </Grid>
            <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
              <Input
                name="cardDate"
                fullWidth
                label="Data de Preenchimento"
                variant="outlined"
                helperText={errors.cardDate?.message}
                error={errors.cardDate && true}
              />
            </Grid>
            <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
              <Input
                name="cardNumber"
                fullWidth
                label="Numeração da Ficha"
                variant="outlined"
                type="number"
                helperText={errors.cardNumber?.message}
                error={errors.cardNumber && true}
              />
            </Grid>

            <Grid item xl={3} lg={3} md={4} sm={4} xs={12}>
              <Select
                name="cardStatus"
                fullWidth
                placeholder="Status da Ficha"
                options={cardStatusOptions}
                variant="outlined"
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Divider />
            </Grid>
          </Grid>
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
        <Grid item xl={2} lg={2} md={3} sm={3} xs={12}>
          <Input
            name="rg"
            fullWidth
            label="RG"
            variant="outlined"
            helperText={errors.rg?.message}
            error={errors.rg && true}
          />
        </Grid>
        <Grid item xl={2} lg={2} md={3} sm={3} xs={12}>
          <Input
            name="emissary"
            fullWidth
            label="Orgão expedidor"
            variant="outlined"
            helperText={errors.emissary?.message}
            error={errors.emissary && true}
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
          <Autocomplete
            name="birthPlace"
            fullWidth
            label="Naturalidade"
            variant="outlined"
            loading={loadingCities}
            options={cities}
            keyLabel="nome"
            onChangeAutocomplete={handleChangeAutocomplete}
            helperText={errors.birthPlaceData?.message}
            error={errors.birthPlaceData && true}
          />
        </Grid>
        <Grid item xl={2} lg={2} md={3} sm={3} xs={12}>
          <Select
            name="skinColor"
            fullWidth
            placeholder="Cor"
            options={raceOptions}
            variant="outlined"
          />
        </Grid>
        <Grid item xl={2} lg={2} md={3} sm={3} xs={12}>
          <Select
            name="gender"
            variant="outlined"
            options={genderOptions}
            placeholder="Sexo"
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
            options={civilStatusOptions}
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
          />
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={6} xs={12}>
          <Input
            name="complement"
            fullWidth
            label="Complemento"
            variant="outlined"
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
            name="state"
            fullWidth
            label="Estado"
            variant="outlined"
            disabled
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
            name="responsible.name"
            fullWidth
            label="Responsável Pelo Candidato"
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xl={2} lg={2} md={2} sm={3} xs={12}>
          <AddPersonModal
            handleSelectPerson={(data) => setValue("responsible", data)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
