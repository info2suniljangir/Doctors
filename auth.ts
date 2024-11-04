import  bcrypt  from 'bcrypt';
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import {  z } from "zod";
import { sql } from "@vercel/postgres";


type User = {
    id: string;
    email: string,
    password: string,
}



const getUser = async (email: string): Promise<User | undefined> => {
    try {
        const user = await sql<User> `SELECT * FROM users WHERE email = ${email}`;
        return user.rows[0];
    } catch (error) {
        console.log(error);
    }
}; 


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,

    providers: [
        Credentials({
           async authorize (credentials) {
            const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const {email, password} = parsedCredentials.data;

            const user = await getUser(email);
            if (!user) return null;
            const isPasswordMatched = await bcrypt.compare(password, user.password);

            if (isPasswordMatched) return user;
          }
          console.log("invalid credentials");
          return null;
           } 
        }),
    ]
}); 