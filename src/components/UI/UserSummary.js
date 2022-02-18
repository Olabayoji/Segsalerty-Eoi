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
      <h2>{props.data.FullName}</h2>
      <div className={classes.container}>
        <p className={classes.head}>Email address</p> <p>{props.data.Email}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Phone number</p>
        <p>{props.data.Phone}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Gender</p>
        <p>{props.data.Gender}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>State of residence</p>
        <p>{props.data.StateOfResidence}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          What technical skill are you most interested in?
        </p>
        <p>{props.data.TechSkill}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          Do you have a basic knowledge of the selected skill?
        </p>
        <p>{props.data.BasicKnowHow}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>
          What would you describe as most challenging in your selected field
        </p>
        <p>{props.data.MostChallenging}</p>
      </div>{" "}
      <div className={classes.container}>
        <p className={classes.head}>
          Have you worked on any project in the past? Give details of the one
          you feel most impressed about.
        </p>
        <p>{props.data.ProjectInfo}</p>
      </div>{" "}
      <div className={classes.container}>
        <p className={classes.head}>
          Write a brief story about your tech career journey, give details about
          your challenges along the way
        </p>
        <p>{props.data.TechJourney}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>GitHub URL</p>
        <p>{props.data.GithubLink}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Why do you want to join my network?</p>
        <p>{props.data.WhyJoin}</p>
      </div>
      <button className="close" onClick={props.onClose} type="button">
        Close
      </button>
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
