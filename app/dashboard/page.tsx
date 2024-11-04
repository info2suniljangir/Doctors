import { signOut } from "@/auth";

const Page = () => {


    return (
        <form action={async () => {
            'use server';
            await signOut();
          }}>
        <h1>dashboard page</h1>
        <button type="submit">Sign out</button>

        </form>
    )
}

export default Page;