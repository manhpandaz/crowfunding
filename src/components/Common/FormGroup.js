import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button";
import { Checkbox } from "components/Checkbox";
function FormGroup({ children }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
  };
  const [acceptTemps, setAcceptTemps] = useState(false);

  const handleSignIn = (values) => {};

  const handleToggleTerms = () => {
    setAcceptTemps(!acceptTemps);
  };

  return (
    <div>
      {isSignUp === true ? (
        <form action="" className="block mb-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="flex items-start py-2">
              Full name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-strock rounded-lg outline-none w-full px-6 py-4"
              placeholder="Tran Van A"
            />
          </div>

          <div>
            <label htmlFor="email" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="Email"
              className="border w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="text"
              className="w-full px-6 py-4 border border-strock rounded-lg outline-none"
              placeholder="create a password"
            />
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
        <form className="block mb-5">
          <div>
            <label htmlFor="email" className="flex items-start mt-5 py-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border w-full px-6 py-4"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="flex items-start mt-5 py-2">
              Password *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border w-full px-6 py-4"
              placeholder="create a password"
            />
          </div>
        </form>
      )}
      <Button
        isLoading={true}
        type={"submit"}
        onSubmit={
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
  control: PropTypes.any.isRequired,
  //   title: PropTypes.string,
  //   changeLink: PropTypes.string,
  //   titleSign: PropTypes.string,
};

export default FormGroup;
