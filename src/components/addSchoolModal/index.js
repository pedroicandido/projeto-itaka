import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { cepMask } from "../../helpers/masks";
import { onlyNumbers } from "../../helpers/onlyNumbers";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Input from "../input";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider, useWatch, useFormState } from "react-hook-form";
import Select from "../select";
import schoolTypeOptions from "../../domain/selectsOptions/schoolType";
import { setAddress } from "../../redux/actions/addressActions";
import useAxios from "../../utils/hooks/useAxios";
import Backdrop from "../backdrop";
import AddSchoolModel from "../../models/school";
import Feedback from "../feedback";
import { setNewSchool } from "../../redux/actions/schoolActions";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddSchoolModal() {
  const api = useAxios();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.address);
  const loadingAdrress = useSelector((state) => state.address.loading);

  const responseRequest = useSelector((state) => state.school.response);

  const methods = useForm({
    defaultValues: {
      name: "",
      cep: "",
      street: "",
      district: "",
      city: "",
      state: "",
      houseNumber: "",
    },
  });
  const { errors } = useFormState({ control: methods.control });

  const cep = useWatch({
    control: methods.control,
    name: "cep",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    const addSchoolModel = new AddSchoolModel({
      addressId: data.addressId,
      houseNumber: data.houseNumber,
      name: data.name,
      type: data.schoolType.value,
    });
    dispatch(setNewSchool({ api, data: addSchoolModel }));
  };

  useEffect(() => {
    methods.setValue("cep", cepMask(cep));
    if (cep.length === 9) {
      const onlyCepNumbers = onlyNumbers(cep);
      dispatch(setAddress({ api, cep: onlyCepNumbers }));
    }
  }, [cep, dispatch]);

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
    <div style={{ height: "100%" }}>
      <Button
        style={{ height: "100%" }}
        variant="contained"
        color="primary"
        fullWidth
        type="button"
        onClick={handleClickOpen}
      >
        CADASTRAR NOVA ESCOLA
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        fullWidth
        open={open}
      >
        <Feedback
          message={responseRequest.message}
          severity={responseRequest.severity}
          isOpen={responseRequest.showMessage}
          onClose={() => {
            dispatch({ type: "RESET_SCHOOL" });
          }}
        />
        <Backdrop open={loadingAdrress} />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cadastrar nova escola
        </DialogTitle>
        <DialogContent dividers>
          <FormProvider {...methods}>
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Input
                  name="name"
                  fullWidth
                  label="Nome da Instituição"
                  error={errors.name && true}
                  fullWidth
                  helperText={errors.name?.message}
                  variant="outlined"
                />
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Select
                  name="schoolType"
                  variant="outlined"
                  options={schoolTypeOptions}
                  placeholder="Tipo"
                />
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <Input
                  name="cep"
                  fullWidth
                  label="CEP"
                  error={errors.cep && true}
                  fullWidth
                  helperText={errors.cep?.message}
                  variant="outlined"
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

              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justify="flex-end"
                  style={{ minHeight: "100%" }}
                >
                  <Grid item xl={12} lg={12} md={10} sm={3} xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
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
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
