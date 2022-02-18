import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import * as Yup from "yup";

const validation = Yup.object({
  git: Yup.string().required("Required"),
  gitUrl: Yup.string().when("git", {
    is: (git) => git === "Yes",
    then: Yup.string()
      .matches(
        /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/i,
        "Enter a valid url"
      )
      .required("Required"),
  }),
  why: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Required"),
});
const StepSix = (props) => {
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
                errors.git && touched.git
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Do you have a Github URL? Kindly drop the link
                <span className="asterick">*</span>
              </label>
              <fieldset>
                <legend className="sr-only">
                  Do you have a Github URL? Kindly drop the link
                </legend>
                <div>
                  <Field id="git-yes" type="radio" value="Yes" name="git" />
                  <label htmlFor="git-yes">Yes</label>
                </div>
                <div>
                  <Field id="git-no" type="radio" value=" No" name="git" />
                  <label htmlFor="git-no">No</label>
                </div>
              </fieldset>
              <p className={classes.error}>
                <ErrorMessage name="git" />
              </p>

              <div
                className={
                  errors.gitUrl && touched.gitUrl
                    ? `${classes["input-container"]} ${classes.invalid} `
                    : classes["input-container"]
                }
              >
                <label htmlFor="gitUrl">GitHub URL</label>
                <Field
                  id="git-url"
                  placeholder="Enter url"
                  type="text"
                  name="gitUrl"
                />
                <p className={classes.error}>
                  <ErrorMessage name="gitUrl" />
                </p>
              </div>
            </div>
            <div
              className={
                errors.why && touched.why
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label htmlFor="why">
                Why do you want to join my network?
                <span className="asterick">*</span>
              </label>
              <Field
                as="textarea"
                rows="8"
                id="why"
                placeholder="Your text here..."
                name="why"
              />
              <p className={classes.error}>
                <ErrorMessage name="why" />
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
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepSix;
