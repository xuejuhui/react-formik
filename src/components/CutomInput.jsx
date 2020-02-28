import React, { useState } from "react";
import { TextField } from "formik-material-ui";

const CustomInputComponent = ({
  handleTime,
  field, // { name, value, onChange, onBlur }
  form,
  form: {
    touched,
    errors,
    isValid,
    handleBlur,
    handleChange,
    values,
    setFieldValue
  }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <TextField
      {...field}
      {...props}
      {...form}
      onBlur={handleBlur(field.name)}
      onChange={handleTime}
    />
  );
};

export default CustomInputComponent;
