"use client";

import { useActionState } from "react";
import { authenticate } from "../lib/action";

const LoginForm = () => {
  const [errorMessage, formAction] = useActionState(authenticate, undefined);
  return (
    <form action={formAction}>
      <h2 className="justify-self-center font-bold my-10 text-xl">
        Sign in to your account
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
          <label htmlFor="password">Email addresss</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="block border rounded-md border-gray-200 outline-blue-600 w-full mt-3 py-1 pl-5"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-1 border rounded-md font-semibold"
      >
        Sign in
      </button>
{/* showing error message */}
      <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
    </form>
  );
};

export default LoginForm;
