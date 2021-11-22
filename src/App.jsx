/* eslint-disable react/function-component-definition */
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import SignUp from "./pages/public/SignUp";
import SignIn from "./pages/public/SignIn";
import Plans from "./pages/private/Plans";
import SubscribePlan from "./pages/private/SubscribePlan";
import PrivateRoute from "./utils/PrivateRoute";
import Subscription from "./pages/private/Subscription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<h1>Not found</h1>} />
        <Route
          path="/plans"
          element={
            <PrivateRoute>
              <Plans />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscribe-plan"
          element={
            <PrivateRoute>
              <SubscribePlan />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscription"
          element={
            <PrivateRoute>
              <Subscription />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
