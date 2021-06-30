import Alert from '../alert'
import Snackbar from '@material-ui/core/Snackbar';

export default function Feedback(props) {

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={props.open}
        onClose={props.handleClose}
        message="I love snacks"
        key={'top+right'}
        autoHideDuration={4000}
      >
        <Alert onClose={props.handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}