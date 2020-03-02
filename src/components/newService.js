import React from "react";
import { withFormik, Form } from "formik";
import Basic from "./Basic";
import Price from "./Price";
import Duration from './Duration';
import Other from './Other'
import Passenger from './Passenger'
import * as Yup from "yup";
import { createFormData } from "../helper"

const BasicSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  packageType: Yup.string()
    .required('Required'),
  licenceType: Yup.string()
    .required('Required'),
  airport: Yup.string()
    .required('Required'),
  street: Yup.string()
    .required('Required'),
  resources: Yup.array().min(2, "Aircraft Required"),
  minimumPassengers: Yup.number().moreThan(0, "At Least 1")
  ,
  maximumPassengers: Yup.number().moreThan(0, "At Least 1")

});




const NewService = ({ values, errors, }) => {
  return (
    <Form >
      <Basic />
      <Price />
      <Duration />
      <Passenger />
      <Other />
      <button type="submit">Submit</button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </Form>
  );
};



const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    licenceType: "",
    airport: "",
    packageType: "",
    zipcode: "",
    state: "",
    city: "",
    street: "",
    flatFee: 0,
    originalPrice: 0,
    pricePerPassenger: 0,
    resources: [],
    hasInstructor: "true",
    durationInMinutes: 1800,
    durationInMinutesHrs: 30,
    durationInMinutesMins: 0,
    aircraftInMinutes: 600,
    aircraftInMinutesHrs: 10,
    aircraftInMinutesMins: 0,
    groundTraining: 0,
    groundTrainingHrs: 0,
    groundTrainingMins: 0,
    description: "",
    restrictions: "",
    country: "",
    zipCode: "",
    numberOfSeats: 0,
    numberOfPeople: 0,
    creditPerHourAircraft: 0,
    isWet: false,
    isHabbs: false,
    maximumPassengers: 1,
    creditPerHourInstructor: 0,
    creditPerLanding: 0,
    imageUrl: "",
    imageUrls: [],
    entityId: "",
    minimumPassengers: 0,
    hoursOfOperation: [],
    specialTime: [],
    closedDays: []
  }),

  validationSchema: BasicSchema,


  handleSubmit: (values, { setSubmitting }) => {
    const fd = new FormData();
    for (let [key, value] of Object.entries(values)) {
      createFormData(fd, key, value)
    }
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(NewService);




export default MyEnhancedForm;
