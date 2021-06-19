import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './styles'
import MobileStepper from '@material-ui/core/MobileStepper';


export default function ProgressMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={props.totalSteps}
      position="static"
      activeStep={props.activeStep}
      className={classes.root}
    />
  );
}