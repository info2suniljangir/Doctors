
import { NextAuthConfig } from "next-auth";


export const authConfig = {

    pages: {
        signIn: "/auth/login",
    },

    callbacks: {
        // protect routes
        authorized({ auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            const isOnHomePage = nextUrl.pathname === "/";

            if (isOnDashboard) {
                if(isLoggedIn) return true;
                return false; //redirect unauthenticated user to login page
            } else if (isLoggedIn && !isOnHomePage) { //Authenticated users will remain on the Home page ("/") if they visit it.
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true; //allow access to all other routes
        },
        redirect({url, baseUrl}) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;

            // Allows callback URLs on the same origin
            if (new URL(url).origin === baseUrl) return url;
      
            // Default to base URL
            return baseUrl;
        }
        
    },

    providers: [],

} satisfies NextAuthConfig; 