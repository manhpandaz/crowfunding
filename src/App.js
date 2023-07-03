import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("../src/modules/auth/page/SignUpPage.js"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
