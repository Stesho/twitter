import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "@/pages/SignUpPage/SignupPage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage";

export const RootRoute = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="*" element={<div>Not found</div>} />
  </Routes>
);
