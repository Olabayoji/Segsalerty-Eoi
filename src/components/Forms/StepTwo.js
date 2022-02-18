import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import { STATES } from "./States";
import * as Yup from "yup";

const validation = Yup.object({
  gender: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

const StepTwo = (props) => {
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
            {/* Gender */}
            <div
              className={
                errors.gender && touched.gender
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Gender <span className="asterick">*</span>
              </label>
              <fieldset>
                <legend className="sr-only">Gender</legend>
                <div>
                  <Field
                    name="gender"
                    type="radio"
                    value="Female"
                    id="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <Field name="gender" type="radio" value="Male" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <Field name="gender" type="radio" value="Other" id="other" />
                  <label htmlFor="other">Other</label>
                </div>
              </fieldset>
              <p className={classes.error}>
                <ErrorMessage name="gender" />
              </p>
            </div>

            {/* State of Residence */}
            <div
              className={
                errors.state && touched.state
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label htmlFor="state">
                State of residence in Nigeria<span className="asterick">*</span>
              </label>
              <Field as="select" name="state" id="state">
                <option value="">Select</option>
                {STATES.map((state) => {
                  return (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  );
                })}
              </Field>
              {errors.state && touched.state ? (
                <p className={classes.error}>{errors.state}</p>
              ) : null}
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

export default StepTwo;
