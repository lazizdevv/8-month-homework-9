"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  };
  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="font-bold text-lg text-yellow-500">Login Page</h1>
      </div>
      <div className="flex justify-center items-center mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-yellow-200 bg-white w-full max-w-lg p-5 rounded-lg shadow-lg shadow-yellow-300 space-y-10 text-center"
        >
          <input
            type="email"
            className="border-2 p-3 w-full rounded-md border-yellow-500 focus:outline-green-500"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            type="password"
            className="border-2 p-3 w-full rounded-md border-yellow-500 focus:outline-green-500"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <button
            className="bg-yellow-400 hover:bg-yellow-500 p-3 max-w-96 w-full mx-auto rounded-lg text-white font-bold"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
