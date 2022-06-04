import React from "react";
import Image from "next/image";
import logo from "/assets/images/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <div className="py-10 mb-10 z-10">
    <div className="flex justify-between items-center">
      <Link href="/">
          <a className="w-20 h-30 object-cover">
        <Image src={logo} />
          </a>
      </Link>
      <nav className="space-x-5 font-semibold">
        <Link href="/" className="text-blue-500">
          <a className="text-active">Home</a>
        </Link>
        <Link href="">
          <a className="hover:text-blue-500">About</a>
        </Link>
        <Link href="service" className="hover:text-blue-500">
          <a className="hover:text-blue-500">Service</a>
        </Link>
        <Link href="safety" className="hover:text-blue-500">
          <a className="hover:text-blue-500">Safety</a>
        </Link>
        <Link href="careers" className="hover:text-blue-500">
          <a className="hover:text-blue-500">Careers</a>
        </Link>
      </nav>
      <div>
        <Link href="">
          <a className="py-2 px-5 border-1 border-gray-600 rounded font-semibold hover:bg-dark-blue hover:text-white">Contact Us</a>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Header;
