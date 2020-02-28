import React, { useState } from "react";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import { Field, useFormikContext } from "formik";
import { TextField } from 'formik-material-ui';



const Duration = (props) => {
  const [open, setOpen] = useState(false);
  const { values, setFieldValue, handleChange } = useFormikContext()
  const toggle = () => {
    setOpen(prev => !prev);
  };
  const handleMinute = (value, dependingValue) => (e) => {
    const min = Number(e.target.value)
    handleChange(e)
    const mins = Math.abs(values[dependingValue] * 60) + Math.abs(min)
    setFieldValue(value, mins)
  }
  const handleHour = (value, dependingValue) => (e) => {
    const hr = Number(e.target.value)
    handleChange(e)
    const mins = Math.abs(hr * 60) + Math.abs(values[dependingValue])
    setFieldValue(value, mins)
  }

  console.log(values.packageType)
  return (
    <>
      <Button
        fullWidth={true}
        onClick={toggle}
      >
        Duration
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <FormGroup >
              <Field
                component={TextField}
                name="durationInMinutesHrs"
                type="number"
                label={"Dual Hrs"}
                InputProps={{ onChange: handleHour("durationInMinutes", "durationInMinutesMins") }}
              />
              <Field
                component={TextField}
                name="durationInMinutesMins"
                type="number"
                label={"Dual Mins"}
                InputProps={{ onChange: handleMinute("durationInMinutes", "durationInMinutesHrs") }} />
              <Field
                component={TextField}
                name="aircraftInMinutesHrs"
                type="number"
                label={"Solo"}
                InputProps={{ onChange: handleHour("aircraftInMinutes", "aircraftInMinutesMins") }} />
              <Field
                component={TextField}
                name="aircraftInMinutesMins"
                type="number"
                label={"Solo"}
                InputProps={{ onChange: handleMinute("aircraftInMinutes", "aircraftInMinutesHrs") }} />
              <Field
                component={TextField}
                name="groundTrainingHrs"
                type="number"
                label="Ground Training (Optional)"
                InputProps={{ onChange: handleHour("groundTraining", "groundTrainingMins") }}
              />
              <Field
                component={TextField}
                name="groundTrainingMins"
                type="number"
                label="Ground Training (Optional)"
                InputProps={{ onChange: handleMinute("groundTraining", "groundTrainingHrs") }}

              />
            </FormGroup>
          </CardContent>
        </Card>
      </Collapse>
    </>





  );
};

export default Duration;
