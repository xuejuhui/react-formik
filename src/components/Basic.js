import React, { useState } from "react";
import { FastField } from "formik";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import CustomSelectField from './CustomSelectField'
import CustomCheckBoxField from './CustomCheckBoxField'

import { FormControlLabel } from '@material-ui/core';
import { TextField, RadioGroup } from 'formik-material-ui';






const Basic = (props) => {
  const [open, setOpen] = useState(false);
  const packageType = [{ name: "sss", _id: "" + 123, value: "sss" }]
  const toggle = () => {
    setOpen(prev => !prev);
  };
  return (
    <>
      <Button
        fullWidth={true}
        onClick={toggle}
      >
        Basic Information
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <FormGroup >
              <CustomSelectField name="packageType" label="Pacakge Types" optionsArray={packageType} />
              <FastField
                component={TextField}
                name="name"
                type="text"
                label="Service Title"
              />
            </FormGroup>

            <FormGroup>
              <CustomSelectField name="airport" label="Airport" optionsArray={packageType} />
              <CustomSelectField name="licenceType" label="Licence Types" optionsArray={packageType} />
            </FormGroup>

            <FormGroup >
              <InputLabel htmlFor="Aircraft">Aircraft</InputLabel>
              <CustomCheckBoxField name="resources" optionsArray={packageType} />
            </FormGroup>

            <FormGroup >
              <FormControl>
                <FormLabel component="legend">Need Pilot</FormLabel>
                <FastField
                  component={RadioGroup}
                  name="hasInstructor"
                >
                  <FormControlLabel
                    value={"true"}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={"false"}
                    control={<Radio />}
                    label="No"
                  />
                </FastField>
              </FormControl>
            </FormGroup>


            <FormGroup>
              <FastField
                component={TextField}
                name="street"
                type="text"
                label="Street"
              />
              <FastField
                component={TextField}
                name="city"
                type="text"
                label="City "
              />
              <FastField
                component={TextField}
                name="state"
                type="text"
                label="State"
              />
              <FastField
                component={TextField}
                name="zipCode"
                type="text"
                label="Zip Code"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Collapse>
    </>
  );
};

export default Basic;
