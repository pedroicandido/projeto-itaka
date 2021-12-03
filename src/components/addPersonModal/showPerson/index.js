import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";

const ShowPerson = ({ name, document }) => {
  const theme = useTheme();
  console.log(theme.palette);
  return (
    <Grid
      container
      style={{ background: theme.palette.grey["200"], padding: 10, marginTop: 10 }}
    >
      <Grid item xs={5}>
        <Typography style={{fontWeight:'bold'}}>{name}</Typography>
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
          onClick={() => {}}
        >
          Selecionar
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowPerson;
