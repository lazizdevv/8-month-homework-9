"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/login");
      });
  };
  return (
    <div className="container">
      <div className="text-center py-5">
        <h1 className="font-bold text-lg text-yellow-500">Register Page</h1>
      </div>
      <div className="flex justify-center items-center mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-yellow-200 bg-white w-full max-w-lg p-5 rounded-lg shadow-lg shadow-yellow-300 space-y-10 text-center"
        >
          <input
            className="border-2 p-3 w-full rounded-md border-yellow-500 focus:outline-green-500"
            type="text"
            placeholder="text"
            {...register("name", { required: true })}
          />
          <br />
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
