
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

RHFAutoComplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFAutoComplete({ name, label, helperText, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
}















































// import PropTypes from 'prop-types';
// import { useFormContext, Controller } from 'react-hook-form';
// import { Autocomplete, TextField } from '@mui/material';

// const RHFAutoComplete = ({ name, label, helperText, ...other }) => {
//   const { control, setValue } = useFormContext();

//   return (
//     <Controller
//     name={name}
//     control={control}
//     render={({ field, fieldState: { error } }) => (
//       <Autocomplete
//         onChange={(event, newValue) =>
//           setValue(name, newValue, { shouldValidate: true })
//         }
//         {...field}
//         fullWidth
//         value={
//           typeof field.value === 'number' && field.value === 0
//             ? ''
//             : field.value
//         }
//         error={!!error}
//         {...other}
//         renderInput={(params) => (
//           <TextField
//             label={label}
//             error={!!error}
//             helperText={error ? error.message : ''}
//             {...params}
//           />
//         )}
//       />
//     )}
//   />
//   );
// };

// RHFAutoComplete.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   helperText: PropTypes.node,
// };

// export default RHFAutoComplete;
