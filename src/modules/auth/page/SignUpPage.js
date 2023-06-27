import React from "react";
import LayoutAuthentication from "../../../layout/LayoutAuthentication";

function SignUpPage(props) {
  return (
    <div>
      <LayoutAuthentication
        heading="SingUp"
        title={"Already have an account?"}
        changeLink={"Sign in"}></LayoutAuthentication>
    </div>
  );
}

export default SignUpPage;
