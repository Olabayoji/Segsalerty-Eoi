import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import * as Yup from "yup";

const validation = Yup.object({
  challenge: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Required"),
  project: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Required"),
  journey: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Required"),
});

const StepFive = (props) => {
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
        {({ errors, touched, values }) => (
          <Form className={classes.form}>
            <div
              className={
                errors.challenge && touched.challenge
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label htmlFor="challenge">
                What would you describe as most challenging in your selected
                field?
                <span className="asterick">*</span>
              </label>
              <Field
                as="textarea"
                id="challenge"
                rows="8"
                placeholder="Your text here..."
                name="challenge"
              />
              <p className={classes.error}>
                <ErrorMessage name="challenge" />
              </p>
            </div>
            <div
              className={
                errors.project && touched.project
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label htmlFor="project">
                Have you worked on any project in the past? Give details of the
                one you feel most impressed about
                <span className="asterick">*</span>
              </label>
              <Field
                as="textarea"
                placeholder="Your text here..."
                rows="8"
                id="project"
                name="project"
              />
              <p className={classes.error}>
                <ErrorMessage name="project" />
              </p>
            </div>
            <div
              className={
                errors.journey && touched.journey
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label htmlFor="journey">
                Write a brief story about your tech career journey, give details
                about your challenges along the way
                <span className="asterick">*</span>
              </label>
              <Field
                as="textarea"
                placeholder="Your text here..."
                rows="8"
                id="journey"
                name="journey"
              />
              <p className={classes.error}>
                <ErrorMessage name="journey" />
              </p>
            </div>
            <div className={classes["btn-container"]}>
              <button
                onClick={() => props.back(values)}
                type="submit"
                className={classes.back}
              >
                Back
              </button>
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

export default StepFive;
