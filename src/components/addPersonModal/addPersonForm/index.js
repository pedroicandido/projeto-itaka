import { useEffect } from "react";
import Input from "../../input";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useFormState, useForm, FormProvider, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidation from "../../../helpers/validations/addPerson";
import { onlyNumbers } from "../../../helpers/onlyNumbers";
import { useSelector, useDispatch } from "react-redux";
import Select from "../../select";
import genderOptions from "../../../domain/selectsOptions/genderOptions";
import { birthMask, cepMask } from "../../../helpers/masks";
import ErrorMessage from "../../errorMessage";
import { setAddress } from "../../../redux/actions/addressActions";
import { setSearchCity } from "../../../redux/actions/cityActions";
import useAxios from "../../../utils/hooks/useAxios";
import Backdrop from "../../backdrop";
import Autocomplete from "../../autocomplete";

const AddPersonForm = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const wsOptions = useSelector((state) => state.workSituation.options);
  const raceOptions = useSelector((state) => state.race.options);
  const civilStatusOptions = useSelector((state) => state.civilStatus.options);
  const documentNotFinded = useSelector((state) => state.search.document);
  const address = useSelector((state) => state.address.address);
  const loadingAdrress = useSelector((state) => state.address.loading);
  
  const {loading: loadingCities, cities} = useSelector((state) => state.city);

  const methods = useForm({
    defaultValues: {
      birthDate: "",
      gender: "",
      document: "",
      rg: "",
      skinColor: "",
      civilStatus: "",
      addressId: "",
      name: "",
      cep: "",
      street: "",
      district: "",
      city: "",
      state: "",
      houseNumber: "",
      workSituation: "",
      emissary: "",
      birthPlace:"",
      birthPlaceData: {}
    },
    resolver: yupResolver(schemaValidation),
  });

  const { errors } = useFormState({ control: methods.control });

  const cep = useWatch({
    control: methods.control,
    name: "cep",
  });

  const birthDate = useWatch({ control: methods.control, name: "birthDate" });
  
  const birthPlace = useWatch({ control: methods.control, name: "birthPlace" });

  const handleChangeAutocomplete = (event, value) => {
    methods.setValue("birthPlaceData", value)
  }


  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    methods.setValue("cep", cepMask(cep));
    if (cep.length === 9) {
      const onlyCepNumbers = onlyNumbers(cep);
      dispatch(setAddress({ api, cep: onlyCepNumbers }));
    }
  }, [cep, dispatch]);

  useEffect(() => {

    if(birthPlace && birthPlace.length % 3 === 0){
      dispatch(setSearchCity({api, value: birthPlace}))
    }
  }, [birthPlace, dispatch]);

  useEffect(() => {
    methods.setValue("document", documentNotFinded);
  }, [documentNotFinded]);

  useEffect(() => {
    const formatedBirthDate = birthMask(birthDate);
    methods.setValue("birthDate", formatedBirthDate);
  }, [birthDate]);

  useEffect(() => {
    if (address?.length === 0) {
      methods.setError("cep", {
        type: "required",
        message: "CEP não encontrado",
      });

      methods.setValue("street", "");
      methods.setValue("district", "");
      methods.setValue("city", "");
      methods.setValue("state", "");
      methods.setValue("addressId", "");
    } else {
      methods.clearErrors("cep");
      methods.setValue("street", address?.logradouro);
      methods.setValue("district", address?.bairro);
      methods.setValue("city", address?.cidade);
      methods.setValue("state", address?.estado);
      methods.setValue("addressId", address?.id);
    }
  }, [address]);

  return (
    <FormProvider {...methods}>
      <Backdrop open={loadingAdrress} />
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography align="justify">
            O usuário que você esta procurando não foi encontrado! Cadastre-o no
            formulário abaixo
          </Typography>
        </Grid>
        <Grid item item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="name"
            fullWidth
            label="Nome Completo"
            variant="outlined"
            helperText={errors.name?.message}
            error={errors.name && true}
          />
        </Grid>
        <Grid item item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="document"
            fullWidth
            label="CPF"
            variant="outlined"
            helperText={errors.document?.message}
            error={errors.document && true}
            disabled
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="rg"
            fullWidth
            label="Documento de Identidade"
            variant="outlined"
            helperText={errors.rg?.message}
            error={errors.rg && true}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="emissary"
            fullWidth
            label="Orgão Expedidor"
            variant="outlined"
            helperText={errors.emissary?.message}
            error={errors.emissary && true}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="birthDate"
            fullWidth
            label="Data de Nascimento"
            variant="outlined"
            helperText={errors.birthDate?.message}
            error={errors.birthDate && true}
          />
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Autocomplete
            name="birthPlace"
            fullWidth
            label="Naturalidade"
            variant="outlined"
            loading={loadingCities}
            options={cities}
            keyLabel="nome"
            onChangeAutocomplete={handleChangeAutocomplete}
            helperText={errors.birthPlace?.message}
            error={errors.birthPlace && true}
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Select
            name="workSituation"
            fullWidth
            placeholder="Situação Trabalhista"
            options={wsOptions}
            variant="outlined"
          />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Select
            name="gender"
            variant="outlined"
            options={genderOptions}
            placeholder="Sexo"
          />
          <ErrorMessage>{errors.gender?.message}</ErrorMessage>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Select
            name="civilStatus"
            variant="outlined"
            options={civilStatusOptions}
            placeholder="Estado Civil"
          />
          <ErrorMessage>{errors.civilStatus?.message}</ErrorMessage>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Select
            name="skinColor"
            fullWidth
            placeholder="Cor"
            options={raceOptions}
            variant="outlined"
          />

          <ErrorMessage>{errors.skinColor?.message}</ErrorMessage>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="cep"
            fullWidth
            label="CEP"
            variant="outlined"
            helperText={errors.cep?.message}
            error={errors.cep && true}
          />
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="street"
            fullWidth
            disabled
            label="Rua"
            variant="outlined"
            helperText={errors.street?.message}
            error={errors.street && true}
          />
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <Input
            name="state"
            fullWidth
            disabled
            label="Estado"
            variant="outlined"
            helperText={errors.state?.message}
            error={errors.state && true}
          />
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <Input
            name="houseNumber"
            fullWidth
            label="número"
            variant="outlined"
            helperText={errors.houseNumber?.message}
            error={errors.houseNumber && true}
          />
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="district"
            fullWidth
            disabled
            label="Bairro"
            variant="outlined"
            helperText={errors.district?.message}
            error={errors.district && true}
          />
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Input
            name="city"
            fullWidth
            disabled
            label="Cidade"
            variant="outlined"
            helperText={errors.city?.message}
            error={errors.city && true}
          />
        </Grid>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container alignItems="center" justify="flex-end">
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ height: "100%", maxHeight: "56px" }}
                fullWidth
                startIcon={<AddIcon />}
                onClick={methods.handleSubmit(onSubmit)}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default AddPersonForm;
