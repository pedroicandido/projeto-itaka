import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { SET_NEW_PERSON } from "../../../redux/types";

const ShowPerson = ({ name, document, id, setSelectedPerson, closeModal }) => {
  const dispatch = useDispatch()
  const theme = useTheme();
  return (
    <Grid
      container
      style={{
        background: theme.palette.grey["200"],
        padding: 10,
        marginTop: 10,
      }}
    >
      <Grid item xs={5}>
        <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography>{document}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={() => {
            setSelectedPerson({ id, name });
            closeModal();
            dispatch({type: "RESET"})
          }}
        >
          Selecionar
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowPerson;
