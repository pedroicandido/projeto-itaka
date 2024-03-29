import ReactSelect from "react-select";
import { useController, useFormContext, useFormState } from "react-hook-form";

const Select = ({ control, name, ...rest }) => {
  const { control: controlContext } = useFormContext();
  const { errors } = useFormState({ control: control ?? controlContext });
  const { field } = useController({
    name,
    control: control ?? controlContext,
  });

  const hasError = Boolean(errors[name]);

  return (
    <ReactSelect
      {...field}
      {...rest}
      styles={{
        control: (provided) => ({
          ...provided,
          height: 55,
          borderColor: hasError ? "red": 'hsl(0, 0%, 80%)',
        }),
        menu: (provided, state) => ({
          ...provided,
          zIndex: 1000,
        }),
      }}
    />
  );
};

export default Select;
