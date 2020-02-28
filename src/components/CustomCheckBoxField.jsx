import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { CheckboxWithLabel } from "formik-material-ui";

export default function CustomCheckBoxField({ name, optionsArray, label }) {
  const elementId = name
    .match(/[A-Z]*[^A-Z]+/g)
    .join("-")
    .toLowerCase();
  const { touched, errors } = useFormikContext();

  return (
    <>
      <FormControl error={touched[name] && !!errors[name]}>
        <InputLabel htmlFor={elementId}>{label}</InputLabel>
        {optionsArray.map(p => {
          return (
            <Field
              key={p._id}
              component={CheckboxWithLabel}
              name={name}
              type="checkbox"
              value={p._id}
              Label={{ label: p.name }}
            />
          );
        })}
        <ErrorMessage name={name} component={FormHelperText} />
      </FormControl>
    </>
  );
}
