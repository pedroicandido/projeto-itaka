import BackdropMaterialUi from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Aux from '../../hoc/auxiliar'
import useStyles from './styles'



export default function Backdrop({ open }) {
  const classes = useStyles();

  return (
    <Aux>
      <BackdropMaterialUi className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </BackdropMaterialUi>
    </Aux>
  );
}