//

// const AddPersonModal = () => {
//   const methods = useForm();
//   return <FormProvider {...methods}></FormProvider>;
// };

// export default AddPersonModal;
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "../input";
import { useForm, FormProvider } from "react-hook-form";

import SearchIcon from "@material-ui/icons/Search";

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

export default function CustomizedDialogs() {
  const methods = useForm();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <div style={{ height: "100%" }}>
        <Button
          style={{ height: "100%" }}
          variant="contained"
          color="primary"
          fullWidth
          type="button"
          onClick={handleClickOpen}
        >
          ADICIONAR
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Procurar por Pessoa
          </DialogTitle>
          <DialogContent dividers>
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
                />
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ height: "100%" }}
                  fullWidth
                  startIcon={<SearchIcon />}
                >
                  Procurar
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </FormProvider>
  );
}
