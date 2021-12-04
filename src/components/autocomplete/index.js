import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import AutocompleteMaterialUi from "@material-ui/lab/Autocomplete";
import { useController, useFormContext } from "react-hook-form";

const Autocomplete = ({ name, control, options, loading, keyLabel, onChangeAutocomplete, ...rest }) => {
  const { control: controlContext } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control: control ?? controlContext,
  });

  return (
    <AutocompleteMaterialUi
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option[keyLabel]}
      fullWidth
      loading={loading}
      onChange={onChangeAutocomplete}
      renderInput={(params) => (
        <TextField
          {...inputProps}
          inputRef={ref}
          {...rest}
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
