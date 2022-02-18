import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import * as Yup from "yup";

const validation = Yup.object({
  education: Yup.string().required("Required"),
});

const StepThree = (props) => {
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
                errors.education && touched.education
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Level of education<span className="asterick">*</span>
              </label>
              <fieldset>
                <legend className="sr-only">Level of education</legend>
                <div>
                  <Field name="education" type="radio" value="SSCE" id="ssce" />
                  <label htmlFor="ssce">SSCE</label>
                </div>
                <div>
                  <Field id="ond" name="education" type="radio" value="OND" />
                  <label htmlFor="ond">OND</label>
                </div>
                <div>
                  <Field id="hnd" name="education" type="radio" value="HND" />
                  <label htmlFor="hnd">HND</label>
                </div>
                <div>
                  <Field id="bsc" name="education" type="radio" value="BSC" />
                  <label htmlFor="bsc">BSC</label>
                </div>
                <div>
                  <Field id="msc" name="education" type="radio" value="MSC" />

                  <label htmlFor="msc">MSC</label>
                </div>
              </fieldset>
              <p className={classes.error}>
                <ErrorMessage name="education" />
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

export default StepThree;
