import React, { useState } from "react";
import { Field, useFormikContext } from 'formik';

import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { TextField } from 'formik-material-ui';

const Price = props => {
  const { values, setFieldValue, handleChange } = useFormikContext()

  const [open, setOpen] = useState(false);
  const [aircraftPrice, setAircraftPrice] = useState(true);
  const [instructorPrice, setInstructorPrice] = useState(true);
  const [landingPrice, setLandingPrice] = useState(true);

  const toggleAircraftPrice = () => {
    setAircraftPrice(prev => !prev)
    if (!aircraftPrice) {
      setFieldValue("creditForAircraft", 0)
    }
  }
  const toggleInstructorPrice = () => {
    setInstructorPrice(prev => !prev)
    if (!instructorPrice) {
      setFieldValue("creditPerHourInstructor", 0)
    }
  }
  const toggleLandingPrice = () => {
    setLandingPrice(prev => !prev)
    if (!landingPrice) {
      setFieldValue("creditPerLanding", 0)
    }
  }

  const handlePrice = (e) => {

    const { creditPerLanding, creditPerHourInstructor, creditPerHourAircraft, groundTraining, aircraftInMinutes, durationInMinutes } = values

    console.table(values)
    console.log(e.target.name)
    const hr = Number(e.target.value)

    console.log(hr)
    console.table({ creditPerLanding, creditPerHourInstructor, creditPerHourAircraft, groundTraining, aircraftInMinutes, durationInMinutes })
    console.log(((durationInMinutes / 60) * (creditPerHourInstructor + creditPerHourAircraft)), ((aircraftInMinutes / 60) * creditPerHourAircraft))
    handleChange(e)
    // const mins = Math.abs(hr * 60) + Math.abs(values[dependingValue])
    // setFieldValue(value, mins)
  }

  const toggle = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <Button
        onClick={toggle}
      >
        Price
      </Button>
      <Collapse in={open}>
        <Card>
          <CardContent>
            <FormGroup>

              <Field component={TextField} type="number" name="flatFee" label="Price"

              />

              <Field component={TextField} type="number" name="originalPrice" label="Flat Fee" />

            </FormGroup>

            <FormGroup>
              <Field component={TextField} type="number" name="creditPerHourAircraft" disabled={aircraftPrice} label="Aircraft Fee"
                InputProps={{
                  onChange: handlePrice,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Checkbox
                        checked={!aircraftPrice}
                        onChange={toggleAircraftPrice}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </InputAdornment>
                  ),
                }} />
              <Field component={TextField} type="number" name="creditPerHourInstructor" disabled={instructorPrice} label="Instuctor Fee"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Checkbox
                        checked={!instructorPrice}
                        onChange={toggleInstructorPrice}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </InputAdornment>
                  ),
                }} />
              <Field component={TextField} type="number" name="creditPerLanding" disabled={landingPrice} label="Landing Fee"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Checkbox
                        checked={!landingPrice}
                        onChange={toggleLandingPrice}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </InputAdornment>
                  ),
                }} />


            </FormGroup>


            {/* <FormGroup>
              <Col className="h5">
                Price Per Passenger
                </Col>
              <Col sm={10}>
                <Input type="number" name="pricePerPassenger" id="pricePerPassenger" />
              </Col>
            </FormGroup>

            <br />
            <Col sm={10} className="mb-3">
              Variable Fees (Variable fees only for Flight Training and
              Aircraft Rentals)
              </Col>

            <InputGroup className="col-sm-10">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Label check>
                    <Input addon type="checkbox" onChange={toggleAircraftPrice} />  Aircraft
                    </Label>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" name="creditForAircraft" disabled={aircraftPrice} value={props.values.creditForAircraft} />
              <InputGroupAddon addonType="append">
                <InputGroupText>/ hour</InputGroupText>
              </InputGroupAddon>
            </InputGroup>


            <br />
            <InputGroup className="col-sm-10">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Label check>
                    <Input addon type="checkbox" /> Instructor
                    </Label>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" disabled={instructorPrice} />
              <InputGroupAddon addonType="append">
                <InputGroupText>/ hour</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <InputGroup className="col-sm-10">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Label check>
                    <Input addon type="checkbox" /> Landing
                    </Label>
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" disabled={landingPrice} />
              <InputGroupAddon addonType="append">
                <InputGroupText>/ time(s)</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br />
            <FormGroup>
              <Col sm={10} className="h3">
                Reservation Fee (hours)
                </Col>
              <Col sm={10} style={{ color: Colors.red }}>
                Reservation Fee is applied to the total cost that you want the
                customer to pay for reserving the flight. In the case of a
                Pliot License Service, Reservation Fee= The hourly Variable
                Fee * 0.5
                </Col>
              <Col sm={10}>
                <Input
                  type="number"
                  name="reservationFee"
                  id="reservationFee"
                  placeholder={0.5}
                  disabled
                />
              </Col>
            </FormGroup> */}







          </CardContent>
        </Card>
      </Collapse>
    </div>
  );
};

export default Price;
