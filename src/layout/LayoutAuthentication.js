import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "../components/Common/ErrorComponents";

function LayoutAuthentication(props) {
  const { children, heading = "", title, changeLink } = props;
  return (
    <div className="relative w-full min-h-screen bg-lightBg p-10 isolate">
      <img
        src="/bg.png"
        alt="background"
        className="absolute pointer-events-none bottom-0 left-0 right-0 z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img
          src="/logo.png"
          alt="crowfunding-app"
          className="inline-block w-14"
        />
      </Link>
      <div className="w-full max-w-[556px] shadow-md bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto text-center">
        <h1 className="font-semibold text-lg lg:text-xl lg:mb-3 text-text1 mb-8">
          {heading}
        </h1>
        <p className=" text-text3 lg:text-sm text-xs font-medium lg:mb-8 mb-6">
          {title}{" "}
          <Link className="text-primary font-medium text-decoration-underline ">
            {changeLink}
          </Link>
        </p>

        {children}
      </div>
    </div>
  );
}

LayoutAuthentication.propTypes = {
  children: PropTypes.string,
  heading: PropTypes.node,
  //   title: PropTypes.string,
  //   changeLink: PropTypes.string,
  //   titleSign: PropTypes.string,
};

const ComponentWithErrorBoundary = withErrorBoundary(LayoutAuthentication, {
  fallback: ErrorComponents,
});

export default ComponentWithErrorBoundary;
