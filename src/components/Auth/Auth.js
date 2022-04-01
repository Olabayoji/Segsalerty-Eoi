import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Auth.module.css";
import Login from "../../assets/login.jpeg";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.loginToken);
  const defaultInput = {
    email: "",
    password: "",
  };

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
  }, [defaultInput.email, defaultInput.password]);

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });
  const onSubmitHandler = (values) => {
    setLoading(true);
    setError(null);
    fetch("https://segsalerty-eoi.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.message) {
              errorMessage = data.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(
          authActions.logIn({
            token: data.data.accessToken,
          })
        );
        navigate("admin");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  let feedback;
  if (error === "EMAIL_NOT_FOUND") {
    feedback = <p className={classes["error-text"]}>Email is not registered</p>;
  } else if (error === "INVALID_PASSWORD") {
    feedback = <p className={classes["error-text"]}>Invalid password</p>;
  } else if (error !== "") {
    feedback = <p className={classes["error-text"]}>{error}</p>;
  }
  return (
    <div className={classes.wrapper}>
      <img src={Login} alt="" />
      <div className={classes.container}>
        <h2>
          Sign <span className={classes.underline}>In</span>
        </h2>
        <Formik
          initialValues={defaultInput}
          validationSchema={validation}
          onSubmit={onSubmitHandler}
        >
          {({ errors, touched }) => (
            <Form className={classes.form} autoComplete="off">
              <div
                className={
                  errors.email && touched.email
                    ? `${classes["input-container"]} ${classes.invalid} `
                    : classes["input-container"]
                }
              >
                <label>Email address</label>
                <Field
                  placeholder="xxxx@xxxxx.xxx"
                  type="text"
                  name="email"
                  label="Email"
                />
                <p className={classes.error}>
                  <ErrorMessage name="email" />
                </p>
              </div>
              <div
                className={
                  errors.password && touched.password
                    ? `${classes["input-container"]} ${classes.invalid} `
                    : classes["input-container"]
                }
              >
                <label>Password</label>
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                />
                <p className={classes.error}>
                  <ErrorMessage name="password" />
                </p>
              </div>

              <div className={classes.button}>
                {!loading ? (
                  <button type="submit">Sign In</button>
                ) : (
                  <LoadingSpinner />
                )}
                {feedback}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
