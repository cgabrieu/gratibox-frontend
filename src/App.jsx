/* eslint-disable react/function-component-definition */
import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import SignUp from "./pages/public/SignUp";
import SignIn from "./pages/public/SignIn";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}
