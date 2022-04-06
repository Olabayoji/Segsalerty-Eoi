import Modal from "./Modal";
import Card from "./Card";
import classes from "./Overview.module.css";
import LoadingSpinner from "./LoadingSpinner";
import { propTypes } from "react-bootstrap/esm/Image";
const HireSummary = (props) => {
  const overview = (
    <Card>
      <h2>{props.data.CompanyName}</h2>
      <div className={classes.container}>
        <p className={classes.head}>Email address</p>{" "}
        <a className={classes.link} href={`mailto:${props.data.ContactEmail}`}>
          {props.data.ContactEmail}
        </a>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Contact Name</p>{" "}
        <p>{props.data.ContactName}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Phone Number</p>
        <p>{props.data.Phone}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Location</p>
        <p>
          {props.data.State}, {props.data.Country}
        </p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Work Nature</p>
        <p>{props.data.WorkNature}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Stack for Hire</p>
        <p>{props.data.StackForHire}</p>
      </div>
      <div className={classes.container}>
        <p className={classes.head}>Frameworks </p>
        <p>{props.data.Frameworks}</p>
      </div>
      {/* <div className={classes.container}>
        <p className={classes.head}>Call Appointment </p>
        <p>{props.data.Frameworks}</p>
      </div> */}
      <div className={classes.container}>
        <p className={classes.head}>How did you hear about us?</p>
        <p>{props.data.InfoSource}</p>
      </div>{" "}
      <button className="close" onClick={props.onClose} type="button">
        Close
      </button>
    </Card>
  );

  return <Modal onClose={props.onClose}>{overview}</Modal>;
};

export default HireSummary;
