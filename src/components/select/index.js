import Select from 'react-select'
import { useController } from "react-hook-form";

const CustomSelectInput = ({ control, name, ...rest }) => {
  const { field } = useController({
    name,
    control
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