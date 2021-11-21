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

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/subscribe-plan" element={<SubscribePlan />} />
        </Routes>
    </BrowserRouter>
  );
}
