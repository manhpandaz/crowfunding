import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PropTypes } from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Button";
import { Checkbox } from "components/Checkbox";
import { IconEyeToggle } from "components/Icons";
import ErrorComponents from "./ErrorComponents";
import useToggleValue from "hooks/useToggleValue";

// const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
// const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// yup.addMethod(yup.string, "password", function (message) {
//   return this.matches(REGEX_PASSWORD, {
//     message,
//     excludeEmptyString: true,
//   });
// });

// yup.addMethod(yup.string, "email", function (message) {
//   return this.matches(REGEX_EMAIL, {
//     message,
//     excludeEmptyString: true,
//   });
// });

const schema = yup
  .object()
  .shape({
    username: yup.string().required("this filed is required"),
    email: yup.string().required("Required email address"),

    password: yup.string().required("Required password"),

    temps: yup.bool().required(),
  })
  .required();

function FormGroup({ isSignUp, onClick = () => {} }) {
  // const [isSignUp, setIsSignUp] = useState(true);
  const [acceptTemps, setAcceptTemps] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const open = showPassword;
  // useform
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  //submit
  const handleSignUp = (values) => {
    // console.log(values);
  };
  // console.log(typeof errors);

  const handleSignIn = (values) => {};
  const getValue = () => {
    const values = document.getElementById("username").value;
    return values;
  };

  // const [acceptTemps, handleToggleTerms] = useToggleValue(false);
  // const [showPassword, handleTogglePassword] = useToggleValue(false);

  // const { value: showPassword, handleToggleValue: handleTogglePassword } =
  //   useToggleValue();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleTerms = () => {
    setAcceptTemps(!acceptTemps);
  };
  // console.log(errors.username?.message);
  return (
    <div>
      {isSignUp === true ? (
        <form
          control={control}
          action=""
          className="block mb-5"
          onSubmit={handleSubmit((d) => {
            // console.log(d);
          })}>
          <div className="mb-5">
            <label htmlFor="username" className="flex items-start py-2">
              Full name *
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={getValue}
              placeholder="Tran Van A"
              className={`relative border rounded-lg  w-full mb-2 px-6 py-4 ${
                Object.keys(errors).length > 0
                  ? "border-error"
                  : "border-strock"
              }`}
            />
            {errors.username ? (
              <span className="absolute text-error flex items-start">
                {errors.username?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          <div>
            <label htmlFor="email" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="Email"
              placeholder="example@example.com"
              className={`relative border rounded-lg  w-full mb-2 px-6 py-4 ${
                Object.keys(errors).length > 0
                  ? "border-error"
                  : "border-strock"
              }`}
            />
            {errors.email ? (
              <span className="absolute text-error flex items-start">
                {errors.email?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              control={control}
              id="password"
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              className="w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="create a password"></input>
            {open ? (
              <FontAwesomeIcon
                onClick={handleTogglePassword}
                icon={faEye}
                className="absolute right-3 top-2/4 translate-y-2/4 cursor-pointer mr-4 mt-[5px] select-none"
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleTogglePassword}
                icon={faEyeSlash}
                className="absolute right-3 top-2/4 translate-y-2/4 cursor-pointer mr-4 mt-[5px] select-none"></FontAwesomeIcon>
            )}
          </div>

          {/* // checkbox */}
          <div className="flex mt-5">
            {" "}
            <Checkbox
              name="temps"
              checked={acceptTemps}
              onClick={handleToggleTerms}></Checkbox>
            <div className="inline-flex items-start flex-row gap-2">
              <span className="text-left text-text3">
                I agree to the{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and have read and understand the{" "}
                <span className="underline cursor-pointer">
                  Privacy policy.
                </span>
              </span>
            </div>
          </div>
        </form>
      ) : (
        <form className="block mb-5" control={control}>
          <div>
            <label htmlFor="email" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="Email"
              placeholder="example@example.com"
              className={`relative border rounded-lg  w-full mb-2 px-6 py-4 ${
                Object.keys(errors).length > 0
                  ? "border-error"
                  : "border-strock"
              }`}
            />
            {errors.email ? (
              <span className="absolute text-error flex items-start">
                {errors.email?.message}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              control={control}
              id="password"
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              className="w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="create a password"></input>
            {open ? (
              <FontAwesomeIcon
                onClick={handleTogglePassword}
                icon={faEye}
                className="absolute right-3 top-2/4 translate-y-2/4 cursor-pointer mr-4 mt-[5px] select-none"
              />
            ) : (
              <FontAwesomeIcon
                onClick={handleTogglePassword}
                icon={faEyeSlash}
                className="absolute right-3 top-2/4 translate-y-2/4 cursor-pointer mr-4 mt-[5px] select-none"></FontAwesomeIcon>
            )}
          </div>
        </form>
      )}
      <Button
        isLoading={true}
        type={"submit"}
        onClick={
          isSignUp ? handleSubmit(handleSignUp) : handleSubmit(handleSignIn)
        }
        title={isSignUp ? "Create my account" : "Sign in"}
        classnames={
          "w-full bg-primary text-white outline-none hover:opacity-75"
        }></Button>
    </div>
  );
}

FormGroup.propTypes = {
  children: PropTypes.string,
  control: PropTypes.string,
  errors: PropTypes.string,
  isSignUp: PropTypes.bool,
  onClick: PropTypes.func,
  //   title: PropTypes.string,
  //   changeLink: PropTypes.string,
  //   titleSign: PropTypes.string,
};

export default withErrorBoundary(FormGroup, {
  FallbackComponent: ErrorComponents,
});
