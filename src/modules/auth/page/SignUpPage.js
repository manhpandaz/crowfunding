import React from "react";
import { PropTypes } from "prop-types";

import LayoutAuthentication from "../../../layout/LayoutAuthentication";
// import { Link } from "react-router-dom";
import FormGroup from "components/Common/FormGroup";
import Button from "components/Button";

function SignUpPage(props) {
  return (
    <div>
      <LayoutAuthentication
        heading="SingUp"
        title={"Already have an account?"}
        changeLink={"Sign in"}>
        <Button
          imageSrc={"/google.png"}
          classnames="w-full"
          title={"Sign up with google"}
        />
        <Button
          classnames="text-text3 lg:text-sm text-xs font-medium lg:mb-8 mb-6 border-none w-full"
          title={"Or sign up with email"}
        />
        <FormGroup></FormGroup>
      </LayoutAuthentication>
    </div>
  );
}

// SignUpPage.propTypes = {
//   name: PropTypes.string,
//   control: PropTypes.any.isRequired,
// };

export default SignUpPage;
