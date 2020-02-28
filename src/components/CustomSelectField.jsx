import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "formik-material-ui";

export default function CustomSelectField({ name, optionsArray, label }) {
  const elementId = name
    .match(/[A-Z]*[^A-Z]+/g)
    .join("-")
    .toLowerCase();
  const { touched, errors } = useFormikContext();

  return (
    <>
      <FormControl error={touched[name] && !!errors[name]}>
        <InputLabel htmlFor={elementId}>{label}</InputLabel>
        <Field
          component={Select}
          name={name}
          inputProps={{
            id: elementId
          }}
        >
          <MenuItem>--Select Your Service--</MenuItem>
          {optionsArray.map(p => {
            return (
              <MenuItem key={p._id} value={p.value}>
                {p.name}
              </MenuItem>
            );
          })}
        </Field>
        <ErrorMessage name={name} component={FormHelperText} />
      </FormControl>
    </>
  );
}
