"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
// user register logic must be written by self
export const signup = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
      })
      .safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
      });

    if (!parsedCredentials.success) {
      return "Validation failed";
    }

    const { email, password, confirmPassword } = parsedCredentials.data;
    
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    
    // already existing user check
    const existingUser =
    await sql`SELECT email FROM users WHERE email = ${email} LIMIT 1`;
    if (existingUser.rows.length > 0) {
      return "Email already exists, try with a different one";
    }
    
    // instead of callback version use promise version of bcrypt. this is more usefull in javascript.
    // try to use promise where async awaits used. because if callback version used then it's hard to handle flow.
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;
    
    // redirect("/auth/login");
    
    // if user registered successfully then sign in the user
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      // redirectTo: "/dashboard",
      callbackUrl: '/dashboard',
    }); 
     
  } catch (error) {
    console.log("Regestration error :", error);
    return "An expected error occured during user registration";
  }
};

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  let errorOccurred = false;
  try {
   await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
      // redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      errorOccurred = true;
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalidate credentials.";
        default:
          return "Something went wrong.";
      }
    }
  } finally {
    if (!errorOccurred) {
      redirect("/dashboard");
    }
  }
};
