import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import Button from '@material-ui/core/Button'

export default function Account() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Registro de Usuário
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <TextField fullWidth label="Nome" variant="outlined" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <TextField fullWidth label="Email" variant="outlined" type="email" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <TextField fullWidth label="Senha" variant="outlined" type="password" />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <TextField fullWidth label="Confirmação da Senha" variant="outlined" type="password" />
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="contained" color="secondary" fullWidth >
              Cancelar
          </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Cadastrar
          </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}