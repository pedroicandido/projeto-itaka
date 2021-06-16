import { useState } from 'react';
import { useController } from "react-hook-form";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function ControlledCheckbox({ control, name, label, checked }) {
  const {
    field
  } = useController({
    name,
    control
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