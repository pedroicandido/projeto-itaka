import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { useFormState, useFormContext } from "react-hook-form";
import Input from "../input";
import Select from "../select";
import maritalStatusOptions from "../../domain/selectsOptions/maritalStatus";
import useStyles from "./styles";

const Volunteer = (props) => {
  const { control } = useFormContext();
  const { errors } = useFormState({ control });
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography component="h2" variant="h6">
            {props.title}
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
            name="maritalStatus"
            variant="outlined"
            options={maritalStatusOptions}
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
            name="phone"
            fullWidth
            label="Telefone Celular (DDD)"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Volunteer;
