import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import * as Yup from "yup";

const phoneRegExp = "^!*([0-9]!*){10,}$";

const validation = Yup.object({
  name: Yup.string()
    .min(5, "Must be 5 characters or more")
    .max(20, "Must be less than 20 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  tel: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
});

const StepOne = (props) => {
  const onSubmitHandler = (values) => {
    props.next(values);
  };
  return (
    <div>
      <Formik
        initialValues={props.data}
        validationSchema={validation}
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className={classes.form}>
            <h1>Expression of interest form</h1>
            <p>
              All field are compulsory, make sure you fill all fields before you
              submit the form..
            </p>
            <div
              className={
                errors.name && touched.name
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Full name <span className={classes.asterick}>*</span>
              </label>
              <Field
                type="text"
                name="name"
                label="Full name"
                placeholder="Ex: Segun Mustapha"
              />
              <p className={classes.error}>
                <ErrorMessage name="name" />
              </p>
            </div>
            <div
              className={
                errors.email && touched.email
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Email address <span className={classes.asterick}>*</span>
              </label>
              <Field
                type="text"
                name="email"
                label="Email address"
                placeholder="Ex: xxxxx@xxxx.com"
              />
              <p className={classes.error}>
                <ErrorMessage name="email" />
              </p>
            </div>
            <div
              className={
                errors.tel && touched.tel
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Phone number <span className={classes.asterick}>*</span>
              </label>
              <Field
                type="tel"
                name="tel"
                label="Phone number"
                placeholder="Ex: 08000000000"
              />
              <p className={classes.error}>
                <ErrorMessage name="tel" />
              </p>
            </div>
            <div className={classes["btn-container"]}>
              <button type="submit" className={classes.next}>
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepOne;
