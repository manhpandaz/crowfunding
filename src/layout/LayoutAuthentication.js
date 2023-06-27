import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "../components/Common/ErrorComponents";

function LayoutAuthentication({
  children,
  heading,
  title,
  changeLink,
  titleSign,
}) {
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
        <h1 className="font-semibold text-lg lg:text-xl lg:mb-3 text-text1">
          {heading}
        </h1>
        <span className="text-sm text-text3">
          {title} <Link className="text-primary">{changeLink}</Link>
        </span>
        <Link className="" to={""}>
          {titleSign}
        </Link>
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

export default withErrorBoundary(LayoutAuthentication, {
  fallback: ErrorComponents,
});
