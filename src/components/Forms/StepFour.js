import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Forms.module.css";
import * as Yup from "yup";

const validation = Yup.object({
  interest: Yup.string().required("Required"),
  skilled: Yup.string().required("Required"),
});
const StepFour = (props) => {
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
                errors.interest && touched.interest
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                {" "}
                What technical skill are you most interested in?
                <span className="asterick">*</span>
              </label>
              <fieldset>
                <legend className="sr-only">
                  What technical skill are you most interested in?
                </legend>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="UI/UX Design"
                    id="ui-ux"
                  />
                  <label htmlFor="ui-ux">UI/UX Design</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Data Science"
                    id="data-science"
                  />
                  <label htmlFor="data-science">Data Science</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Dev Ops"
                    id="dev-ops"
                  />
                  <label htmlFor="dev-ops">Dev Ops</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Mobile App Development"
                    id="mobile"
                  />
                  <label htmlFor="mobile">Mobile App Development</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Frontend Development"
                    id="frontend"
                  />
                  <label htmlFor="frontend">Frontend Development</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Backend Development"
                    id="backend"
                  />
                  <label htmlFor="backend">Backend Development</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="QA Testing"
                    id="qa"
                  />
                  <label htmlFor="qa">QA Testing</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Technical Project Management"
                    id="pm"
                  />
                  <label htmlFor="pm">Technical Project Management</label>
                </div>
                <div>
                  <Field
                    name="interest"
                    type="radio"
                    value="Other"
                    id="other-skill"
                  />
                  <label htmlFor="other-skill">Other</label>
                </div>
              </fieldset>
              <p className={classes.error}>
                <ErrorMessage name="interest" />
              </p>
            </div>
            <div
              className={
                errors.skilled && touched.skilled
                  ? `${classes["input-container"]} ${classes.invalid} `
                  : classes["input-container"]
              }
            >
              <label>
                Do you have basic knowledge of the selected skill?
                <span className="asterick">*</span>
              </label>
              <fieldset>
                <legend className="sr-only">
                  Do you have basic knowledge of the selected skill?
                </legend>
                <div>
                  <Field name="skilled" type="radio" value="Yes" id="yes" />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <Field name="skilled" type="radio" value=" No" id="no" />
                  <label htmlFor="no">No</label>
                </div>
              </fieldset>
              <p className={classes.error}>
                <ErrorMessage name="skilled" />
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

export default StepFour;
