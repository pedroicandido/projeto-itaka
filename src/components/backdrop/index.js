import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Aux from '../../hoc/auxiliar'
import useStyles from './styles'



export default function CustomBackdrop({ open }) {
  const classes = useStyles();

  return (
    <Aux>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Aux>
  );
}