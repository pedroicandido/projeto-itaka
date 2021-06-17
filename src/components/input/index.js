import TextField from "@material-ui/core/TextField";
import { useController, useFormContext } from "react-hook-form";

const Input = ({ name, control, ...rest }) => {
  const { control: controlContext } = useFormContext()
  const {
    field: { ref, ...inputProps }
  } = useController({
    name,
    control: control ?? controlContext
  });

  return <TextField {...inputProps} inputRef={ref} {...rest} />;
}

export default Input