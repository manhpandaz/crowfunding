import CampainStart from "modules/campaign/CampainStart.js";
import CampaignPage from "pages/CampaignPage.js";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SingInPage.js"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.js"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/campaign/startCampaign"
          element={<CampainStart></CampainStart>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
