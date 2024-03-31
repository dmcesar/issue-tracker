"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return <button onClick={() => signIn("google")}>Sign In</button>;
};

export default LoginPage;
