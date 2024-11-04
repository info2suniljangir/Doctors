import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        
        {/* Text Content */}
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Your Hospital Management System
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Streamline your healthcare services with our efficient management solution. Manage patient records, appointments, billing, and more—all in one place.
          </p>
          <div className="flex space-x-4">
            <Link href="/auth/login" className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
              Login
            </Link>
            <Link href="/auth/signup" className="px-6 py-3 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition">
              Sign up
            </Link>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/4">

        <Image
        src="/hero.png"
        alt='heorImage'
        height={50}
        width={50}
        priority
        className="w-full h-auto rounded-lg shadow-lg"
        />

        </div> 
      </div>
    </section>
  );
};

export default HeroSection;
