import { sql } from "@vercel/postgres";


const Page = async () => {
    const email = "info2suniljangir@gmail.com";
    const user = await sql `SELECT * FROM users WHERE email = ${email}`
    console.log(user.rows[0]);
    
    return (
        <div>
            doctors page
        </div>
    )
};

export default Page;