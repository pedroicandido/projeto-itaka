import { useEffect } from "react";
import Input from "../../input";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useFormState, useForm, FormProvider, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidation from "../../../helpers/validations/searchPerson";
import { onlyNumbers } from "../../../helpers/onlyNumbers";
import { useDispatch } from "react-redux";
import { setSearch } from "../../../redux/actions/searchActions";
import useAxios from "../../../utils/hooks/useAxios";
import { useSelector } from "react-redux";

const SearchPerson = () => {
  const api = useAxios();
  const dispatch = useDispatch();
  const { hasPerson } = useSelector((state) => state.search);
  const methods = useForm({
    defaultValues: {
      document: "",
    },
    resolver: yupResolver(schemaValidation),
  });

  const { errors } = useFormState({ control: methods.control });
  const documentNumber = useWatch({
    control: methods.control,
    name: "document",
  });

  const onSubmit = (data) => {
    dispatch(setSearch({ api, document: data.document }));
  };

  useEffect(() => {
    methods.setValue("document", onlyNumbers(documentNumber));
  }, [documentNumber]);

  useEffect(() => {
    if (!hasPerson) {
      methods.setError("document", {
        type: "required",
        message: "Usuário não encontrado",
      });
      dispatch({type: "RESET_HAS_USER"})
    }
  }, [hasPerson]);

  return (
    <FormProvider {...methods}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography gutterBottom>
            Insira o CPF com apenas números para realizar a busca.
          </Typography>
        </Grid>
        <Grid item item xl={9} lg={9} md={9} sm={8} xs={12}>
          <Input
            name="document"
            fullWidth
            label="CPF"
            variant="outlined"
            helperText={errors.document?.message}
            error={errors.document && true}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
          <Button
            variant="contained"
            color="secondary"
            style={{ height: "100%", maxHeight: "56px" }}
            fullWidth
            startIcon={<SearchIcon />}
            onClick={methods.handleSubmit(onSubmit)}
          >
            Procurar
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default SearchPerson;
