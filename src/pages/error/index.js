import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useStyles from "./styles";
import Logo from "../../assets/images/logo.png";

export default function Error() {
  var classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Paper classes={{ root: classes.paperRoot }}>
        <div className={classes.logotype}>
          <img className={classes.logotypeIcon} src={Logo} alt="logo" />
        </div>
        <Typography
          variant="h1"
          color="secondary"
          className={classnames(classes.textRow, classes.errorCode)}
        >
          404
        </Typography>
        <Typography variant="h5" color="primary" className={classes.textRow}>
          Oops. Parece que a página que você tentou acessar não existe.
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          className={classnames(classes.textRow, classes.safetyText)}
        >
          Volte para o início e tente novamente
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
          className={classes.backButton}
        >
          Voltar para o início
        </Button>
      </Paper>
    </Grid>
  );
}
