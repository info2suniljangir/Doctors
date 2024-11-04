"use client";

import { signup } from "../lib/action";
import { useActionState } from "react";



const SignUpForm = () => {


  const [errorMessage, formAction] = useActionState(signup, undefined);
  console.log(errorMessage);
  return (
    <form action={formAction} >
      <h2 className="justify-self-center font-bold my-10 text-xl">
        Create your account
      </h2>

      <div>
        <div className="my-5">
          <label htmlFor="email">Email addresss</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="block border rounded-md border-gray-200 outline-blue-600 w-full mt-3 py-1 pl-5"
            required
          />
        </div>

        <div className="my-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="block border rounded-md border-gray-200 outline-blue-600 w-full mt-3 py-1 pl-5"
            required
          />
        </div>
        <div className="my-5">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Retype your password"
            className="block border rounded-md border-gray-200 outline-blue-600 w-full mt-3 py-1 pl-5"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-1 border rounded-md font-semibold"
      >
        Sign up
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>  }

      
    </form>
  );
};

export default SignUpForm;
