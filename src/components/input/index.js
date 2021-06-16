import TextField from "@material-ui/core/TextField";
import { useController, useFormContext } from "react-hook-form";

const Input = ({ name, ...rest }) => {
  const { control } = useFormContext()
  const {
    field: { ref, ...inputProps }
  } = useController({
    name,
    control
  });

  return <TextField {...inputProps} inputRef={ref} {...rest} />;
}

export default Input