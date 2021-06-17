import Select from 'react-select'
import { useController, useFormContext } from "react-hook-form";

const CustomSelectInput = ({ control, name, ...rest }) => {
  const { control: controlContext } = useFormContext()
  const { field } = useController({
    name,
    control: control ?? controlContext
  });

  return <Select {...field} {...rest} styles={{
    control: (provided) => ({
      ...provided,
      height: 55
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 1000,
    }),
  }} />;
}

export default CustomSelectInput