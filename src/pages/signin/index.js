import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/copyright";
import useStyles from "./styles";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import Input from "../../components/input";
import makeDefaultValue from "../../domain/initialValues/signin";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidation from "../../helpers/validations/signin";
import Logo from "../../assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/spinner";

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const { error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const defaultValues = makeDefaultValue();
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schemaValidation),
  });
  const { errors } = useFormState({ control: methods.control });

  const onSubmit = (data) => {
    dispatch(
      authActions.setUser({
        email: data.email,
        password: data.password,
        navigation: history,
      })
    );
  };

  useEffect(() => {
    if (error) {
      methods.setError("email", {
        type: "required",
        message: "Usuário ou senha não encontrados",
      });
    }
  }, [error]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div>
          <img src={Logo} className={classes.image} />
        </div>
        <FormProvider {...methods}>
          <form
            className={classes.form}
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Input
              autoComplete="email"
              autoFocus
              error={errors.email && true}
              fullWidth
              helperText={errors.email?.message}
              label="Email"
              margin="normal"
              name="email"
              variant="outlined"
            />
            <Input
              autoComplete="current-password"
              error={errors.password && true}
              fullWidth
              helperText={errors.password?.message}
              label="Senha"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
                </Link>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
