import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "@/pages/SignUpPage/SignupPage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";

export const RootRoute = () => (
  <Routes>
    <Route path="/" element={<SignupPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);
