import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Input from "../input";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import {
  useFormContext,
  useWatch,
  useFormState,
} from "react-hook-form";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const Expenses = () => {
  const classes = useStyles();
  const { control } = useFormContext();
  const { errors } = useFormState({ control });

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Paper className={classes.paper} elevation={2}>
          <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography component="h2" variant="h6">
                9. DESPESAS
              </Typography>
              <Divider />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
              <Grid container spacing={2}>
                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseMandatoryDiscounts"
                    fullWidth
                    label="Descontos Obrigatórios"
                    variant="outlined"
                    helperText={errors.expenseMandatoryDiscounts?.message}
                    error={errors.expenseMandatoryDiscounts && true}
                  />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseGrossIncome"
                    fullWidth
                    label="Renda Bruta"
                    variant="outlined"
                    helperText={errors.expenseGrossIncome?.message}
                    error={errors.expenseGrossIncome && true} />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseHome"
                    fullWidth
                    label="Moradia"
                    variant="outlined"
                    helperText={errors.expenseHome?.message}
                    error={errors.expenseHome && true} />
                </Grid>
                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseNetIncome"
                    fullWidth
                    label="Renda Líquida"
                    variant="outlined"
                    helperText={errors.expenseNetIncome?.message}
                    error={errors.expenseNetIncome && true} />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseHealth"
                    fullWidth
                    label="Saúde"
                    variant="outlined"
                    helperText={errors.expenseHealth?.message}
                    error={errors.expenseHealth && true} />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseEducation"
                    fullWidth
                    label="Educação"
                    variant="outlined"
                    helperText={errors.expenseRPC?.message}
                    error={errors.expenseRPC && true} />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseRPC"
                    fullWidth
                    label="RPC"
                    variant="outlined"
                    helperText={errors.expenseRPC?.message}
                    error={errors.expenseRPC && true} />
                </Grid>

                <Grid item xl={3} lg={3}>
                  <Input
                    name="expenseNumberPeopleHouse"
                    fullWidth
                    label="Número de Pessoas na Residência"
                    variant="outlined"
                    helperText={errors.expenseNumberPeopleHouse?.message}
                    error={errors.expenseNumberPeopleHouse && true} />
                </Grid>

                <Grid item xl={12} lg={12}>
                  <Input
                    name="expenseNote"
                    fullWidth
                    multiline
                    rows={4}
                    label="Observação"
                    variant="outlined"
                    helperText={errors.expenseNote?.message}
                    error={errors.expenseNote && true} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Expenses;
