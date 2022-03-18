import Modal from "./Modal";
import Card from "./Card";
import classes from "./Overview.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
const Overview = (props) => {
  let loading;
  if (props.isLoading === true) {
    loading = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  const overview = (
    <Card>
      <h2>Here's a summary of your answers</h2>
      <div className={classes.container}>
        <p className={classes.head}>Full name</p>
        <p>{props.data.name}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Email address</p> <p>{props.data.email}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Phone number</p>
        <p>{props.data.tel}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Gender</p>
        <p>{props.data.gender}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>State of residence</p>
        <p>{props.data.state}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          What technical skill are you most interested in?
        </p>
        <p>{props.data.interest}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          Do you have a basic knowledge of the selected skill?
        </p>
        <p>{props.data.skilled}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          What would you describe as most challenging in your selected field
        </p>
        <p>{props.data.challenge}</p>
      </div>{" "}
      <div className={classes.container}>
        <p className={classes.head}>
          Have you worked on any project in the past? Give details of the one
          you feel most impressed about.
        </p>
        <p>{props.data.project}</p>
      </div>{" "}
      <div className={classes.container}>
        <p className={classes.head}>
          Write a brief story about your tech career journey, give details about
          your challenges along the way
        </p>
        <p>{props.data.journey}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          Do you have a Github URL? kindly drop the link
        </p>
        <p>{props.data.git}</p>
      </div>
      {props.data.git === "Yes" && (
        <div className={classes.container}>
          <p className={classes.head}>GitHub URL</p>
          <p>{props.data.gitUrl}</p>
        </div>
      )}
      <div className={classes.container}>
        <p className={classes.head}>Why do you want to join my network?</p>
        <p>{props.data.why}</p>
      </div>
      <div className="btn-container">
        <button onClick={props.onClose} className="back" type="button">
          Back
        </button>
        <button onClick={props.submit} className="next" type="button">
          Confirm
        </button>
      </div>
    </Card>
  );

  return (
    <Modal onClose={props.onClose}>
      {!props.isSubmitted && !props.isLoading && overview}
      {props.isLoading && loading}
    </Modal>
  );
};

export default Overview;
