import { useController } from "react-hook-form";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useFormContext } from 'react-hook-form'


export default function ControlledCheckbox({ control, name, label, checked }) {
  const { control: controlContext } = useFormContext()
  const {
    field
  } = useController({
    name,
    control: control ?? controlContext
  });

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox color="primary" {...field} checked={checked} />
        }
        label={label}
      />
    </FormGroup>
  );
}