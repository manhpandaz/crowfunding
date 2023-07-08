import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("../src/modules/auth/page/SignUpPage.js"));
const SignInPage = lazy(() => import("../src/modules/auth/page/SingInPage.js"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
