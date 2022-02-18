import React, { useState } from "react";
import classes from "./Forms.module.css";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import ProgressBar from "../UI/ProgressBar";
import Overview from "../UI/Overview";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const Forms = () => {
  const defaultData = {
    name: "",
    email: "",
    tel: "",
    gender: "",
    state: "",
    education: "",
    interest: "",
    skilled: "",
    challenge: "",
    project: "",
    journey: "",
    git: "",
    gitUrl: "",
    why: "",
  };

  // Loading
  const [isLoading, setisLoading] = useState(false);
  // Initial values
  const [data, setData] = useState(defaultData);

  // Submit form
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Current step
  const [currentStep, setCurrentStep] = useState(0);

  // Is error
  const [isError, setIsError] = useState(false);
  const [showError, setShowError] = useState(false);

  // next step
  const nextStepHandler = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (currentStep === 5) {
      setShow(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // prev step
  const prevStepHandler = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const [show, setShow] = useState(false);
  // Close overview screen
  const onClose = () => {
    setShow(false);
    setIsSubmitted(false);
  };

  // Close error
  const closeError = () => {
    setShowError(false);
    setIsError(false);
    setShow(false);
    setCurrentStep(0);
  };

  const steps = [
    <StepOne data={data} next={nextStepHandler} />,
    <StepTwo data={data} back={prevStepHandler} next={nextStepHandler} />,
    <StepThree data={data} back={prevStepHandler} next={nextStepHandler} />,
    <StepFour data={data} back={prevStepHandler} next={nextStepHandler} />,
    <StepFive data={data} back={prevStepHandler} next={nextStepHandler} />,
    <StepSix data={data} back={prevStepHandler} next={nextStepHandler} />,
  ];

  // Success screen
  const success = (
    <Modal onClose={onClose}>
      <Card>
        <p className={classes.text}>
          Your response has been submitted successfully
        </p>
        <button onClick={onClose} className={classes.btn}>
          Close
        </button>
      </Card>
    </Modal>
  );

  // Error screen
  const errorScreen = (
    <Modal onClose={onClose}>
      <Card>
        <p className={classes.text}>This email is already registered.</p>
        <button onClick={closeError} className={classes.btn}>
          Close
        </button>
      </Card>
    </Modal>
  );

  // On submit handler
  const onSubmit = async () => {
    setisLoading(true);
    fetch("  https://segsalerty-eoi.herokuapp.com/eoi", {
      // mode: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((jsonResponse) => {
        setisLoading(false);
        setData(defaultData);
        setCurrentStep(0);
        setIsSubmitted(true);
        setShow(false);
      })
      .catch((error) => {
        setisLoading(false);
        setIsError(true);
        setShowError(true);
      });
  };

  return (
    <div className={classes["form-container"]}>
      {show && !isError && (
        <Overview
          isSubmitted={isSubmitted}
          submit={onSubmit}
          data={data}
          onClose={onClose}
          isLoading={isLoading}
        />
      )}
      {isSubmitted && success}
      {isError && showError && errorScreen}
      {steps[currentStep]}
      <div className={classes.form}>
        <ProgressBar
          progress={((currentStep + 1) / (6 + 1)) * 100}
          level={currentStep + 1}
        />
      </div>
    </div>
  );
};

export default Forms;
