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
import { useSelector } from "react-redux";
import Select from "../../select";
import genderOptions from "../../../domain/selectsOptions/genderOptions";
import { birthMask } from "../../../helpers/masks";
import ErrorMessage from "../../errorMessage";

const AddPersonForm = () => {
  const raceOptions = useSelector((state) => state.race.options);
  const civilStatusOptions = useSelector((state) => state.civilStatus.options);

  const methods = useForm({
    defaultValues: {
      birthDate: "",
      gender: "",
      document: "",
      rg: "",
      skinColor: "",
      civilStatus: "",
      adress: "",
      name: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  const { errors } = useFormState({ control: methods.control });
  const documentNumber = useWatch({
    control: methods.control,
    name: "document",
  });

  const birthDate = useWatch({ control: methods.control, name: "birthDate" });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const formatedBirthDate = birthMask(birthDate);
    methods.setValue("birthDate", formatedBirthDate);
  }, [birthDate]);

  return (
    <FormProvider {...methods}>
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography gutterBottom>
            Insira o CPF com apenas números para realizar a busca.
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
            name="birthDate"
            fullWidth
            label="Data de Nascimento"
            variant="outlined"
            helperText={errors.birthDate?.message}
            error={errors.birthDate && true}
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
            name="adress"
            fullWidth
            label="Logradouro"
            variant="outlined"
            helperText={errors.adress?.message}
            error={errors.adress && true}
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
