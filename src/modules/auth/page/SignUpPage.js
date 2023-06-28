import React from "react";
import { useForm } from "react-hook-form";
import LayoutAuthentication from "../../../layout/LayoutAuthentication";
// import { Link } from "react-router-dom";
import ButtonSign from "../../../components/Button/ButtonSign";
import FormGroup from "../../../components/Common/FormGroup";

function SignUpPage(props) {
  const {
    handleSubmit,
    control,
    isValue,
    formState: { isValid, isSubmitting },
  } = useForm();
  function handleSignUp(e) {}
  return (
    <div>
      <LayoutAuthentication
        heading="SingUp"
        title={"Already have an account?"}
        changeLink={"Sign in"}>
        <ButtonSign icon={"/google.png"} title={"Sign up with google"} />
        <ButtonSign
          classnames="text-text3 text-xs border-none"
          title={"Or sign up with email"}
        />
        <FormGroup
          onSubmit={handleSubmit(handleSignUp)}
          signup={"sigup"}></FormGroup>
        <ButtonSign
          title={"Create my account"}
          classnames={"bg-primary text-white"}></ButtonSign>
      </LayoutAuthentication>
    </div>
  );
}

export default SignUpPage;
