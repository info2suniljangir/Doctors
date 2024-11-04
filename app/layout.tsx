import "./globals.css";
import { Metadata } from "next";
import { inter } from "./ui/font";


export const metadata: Metadata = {
  title: "Doctors",
  description: "Project made by Sunil Jangir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}  
      >
        {children}
      </body>
    </html>
  );
}
