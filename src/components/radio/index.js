
import Aux from '../../hoc/auxiliar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useController } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ legend, name, control, options }) {

  const { field } = useController({ name, control });

  return (
    <Aux>
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup row {...field}>
        {options.map((option, idx) => <FormControlLabel key={idx} control={<Radio />} {...option} />)}
      </RadioGroup>
    </Aux>
  );
}