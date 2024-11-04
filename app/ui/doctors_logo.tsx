import Image from "next/image";

const DoctorsLogo = () => {
    return (
        <Image
            src="/logo.png"
            alt="logo.png"
            height={100}
            width={100}
            className="block"
            // because of priority this image will load as quick as possible
            // You should use the priority property on any image detected as the Largest Contentful Paint (LCP) element.
            priority
          />
    )
};

export default DoctorsLogo;