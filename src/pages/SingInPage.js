import React from "react";
import { PropTypes } from "prop-types";

import LayoutAuthentication from "../layout/LayoutAuthentication";
// import { Link } from "react-router-dom";
import FormGroup from "components/Common/FormGroup";
import Button from "components/Button";

function SignInPage(props) {
  return (
    <div>
      <LayoutAuthentication
        heading="SingIn"
        title={"Already have an account?"}
        changeLink={"Sign Up"}>
        <Button
          imageSrc={"/google.png"}
          classnames="w-full"
          title={"Sign up with google"}
        />
        {/* <Button
          classnames="text-text3 lg:text-sm text-xs font-medium lg:mb-8 mb-6 border-none w-full"
          title={"Or sign in with google"}
        /> */}
        <FormGroup isSignUp={false}></FormGroup>
      </LayoutAuthentication>
    </div>
  );
}

// SignUpPage.propTypes = {
//   name: PropTypes.string,
//   control: PropTypes.any.isRequired,
// };

export default SignInPage;
