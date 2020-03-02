import React, { useState, } from "react";
import { Field, } from 'formik';

import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ImageUpload from './ImageUpload'
import { TextField } from 'formik-material-ui';
import FormGroup from '@material-ui/core/FormGroup';


const Other = props => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <>
      <Button
        onClick={toggle}
      >
        Other Information
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <FormGroup>

              <Field component={TextField} multiline rows="4" name="description" label="Description" />
              <Field component={TextField} multiline rows="4" name="restrictions" label="Restrictions" />
            </FormGroup>

            <ImageUpload />
          </CardContent>
        </Card>
      </Collapse>
    </>
  );
};

export default Other;
