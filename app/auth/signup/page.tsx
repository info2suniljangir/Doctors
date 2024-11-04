import DoctorsLogo from "@/app/ui/doctors_logo";
import SignUpForm from "@/app/ui/sign_up_form";
import Separator from "@/app/ui/saperator";
import SocialAuthOptions from "@/app/ui/social_auth_options";

const Page = () => {
    return (
        <div className=" min-h-screen flex justify-center items-center">
      {/* using flex-1 makes the element take up any remaining space within a flex container. */}
      <div className="flex-1 sm:max-w-[400px] max-w-[300px]">
        <div className="flex justify-center items-center ">
        <DoctorsLogo />
        </div>
        <SignUpForm />
        <Separator />
        <SocialAuthOptions />
      </div>
    </div>
    )

};

export default Page;