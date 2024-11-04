import Image from "next/image";

const SocialAuthOptions = () => {
    return (
        <div className="flex justify-between sm:flex-row">
          <div className="border rounded-md border-gray-200 sm:w-1/2 w-full text-center py-2 mx-2 font-semibold">
            <Image
              src="/google.png"
              alt="google Image"
              height={20}
              width={20}
              className="inline mx-3"
              priority
            />
            Google
          </div>
          <div className="border rounded-md border-gray-200 sm:w-1/2 w-full text-center py-2 mx-2 font-semibold">
            <Image
              src="/apple.png"
              alt="google Image"
              height={20}
              width={20}
              className="inline mx-3"
              priority
            />
            <span>Apple</span>
          </div>
        </div>
    )

}

export default SocialAuthOptions;