import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/images/image.png";

function Hero() {
  return (
    <div className="flex w-full relative min-h-full">
      <div className="max-w-754">
        <h1 className="text-5xl text-dark-blue font-serif font-bold mb-7 leading-12">
          <span className="text-blue-500">World class </span>charter
          <br /> and maintenance
          <br /> flights
        </h1>
        <p className="text-secondary font-serif w-450 mb-10">
          Our goal is simply to offer the highest standards of professionalism
          and service as measured by our safety record, dispatch reliability and
          customer satisfaction
        </p>
        <Link href="">
          <a className="py-4 px-8  rounded-full font-semibold bg-dark-blue text-white hover:shadow-lg hover:opacity-90">
            Booking Now
          </a>
        </Link>
      </div>
      <div className="absolute mt-zero w-3/5 right-negative z-negativeOne">
        <Image src={heroImage} />
      </div>
      <div className="relative">
        {/* <Image src={heroImage} /> */}
        {/* This div is relative to the hero section, without it the layout will turn into asingle column */}
      </div>
    </div>
  );
}

export default Hero;
