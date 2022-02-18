import * as Yup from "yup";

const phoneRegExp = /^([0]{1})[0-9]{10}$/;
// schema validation
export const FormValidation = Yup.object({
  name: Yup.string()
    .min(5, "Must be 5 characters or more")
    .max(20, "Must be less than 20 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  tel: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  gender: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  education: Yup.string().required("Required"),
  interest: Yup.string().required("Required"),
  skilled: Yup.string().required("Required"),
  challenge: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  project: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  journey: Yup.string()
    .min(5, "Must be 5 characters or more")
    .required("Required"),
  git: Yup.string().required("Required"),
  gitUrl: Yup.string()
    .matches(
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i,
      "Enter valid url"
    )
    .required("Required"),
  why: Yup.string().min(5, "Must be 5 characters or more").required("Required"),
});
