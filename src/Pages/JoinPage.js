import React from "react";
import Forms from "../components/Forms/Forms";
import { MdArrowBack } from "react-icons/md";
const JoinPage = () => {
  return (
    <>
      <div className="back-home">
        <a href="https://segsalertywebsite.netlify.app/">
          <span>
            <MdArrowBack />
          </span>
          <span>Go back to homepage</span>
        </a>
      </div>
      <Forms />
    </>
  );
};

export default JoinPage;
