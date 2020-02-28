import React, { useState } from "react";
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import { Field } from "formik";
import { TextField } from 'formik-material-ui';


const Passengers = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <Button
        onClick={toggle}
        fullWidth={true}
      >
        Passengers
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <FormGroup>
              <Field
                component={TextField}
                name="minimumPassengers"
                type="number"
                label="Minimum Passengers"
              />
              <Field
                component={TextField}
                name="maximumPassengers"
                type="number"
                label="Maximum Passengers"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default Passengers;
