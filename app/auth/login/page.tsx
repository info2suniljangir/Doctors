"use client";

import LoginForm from "../../ui/login-form";
import Separator from "../../ui/saperator";
import SocialAuthOptions from "../../ui/social_auth_options";
import DoctorsLogo from "../../ui/doctors_logo";

const Page = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      {/* using flex-1 makes the element take up any remaining space within a flex container. */}
      <div className="flex-1 sm:max-w-[400px] max-w-[300px]">
        <div className="flex justify-center items-center ">
        <DoctorsLogo />
        </div>
        {/* Login form */}
        <LoginForm />
        {/* separator */}
        <Separator />
        {/* social auth options */}
        <SocialAuthOptions />
      </div>
    </div>
  );
};

export default Page;
