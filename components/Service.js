import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "../assets/testimonials/image-1.png";
import image2 from "../assets/testimonials/image-2.png";
import image3 from "../assets/testimonials/image-3.png";
import image4 from "../assets/testimonials/image-4.png";
import unsplash from "../assets/images/unsplash.png";

function Service() {
  return (
    <div className="flex  bg-dark-blue min-h-screen py-10 ">
      <div className="py-10 text-center w-screen  mx-32">
        <p className="text-white mb-10">
          <span className="text-blue-500">Companies </span>
          that have used our services
        </p>
        <div className="testimonials space-x-5 flex items-center mb-16">
          <Image className="scale-75" src={image1} />
          <Image className="scale-75" src={image2} />
          <Image className="scale-75" src={image3} />
          <Image className="scale-75" src={image4} />
        </div>
        <div className="flex gap-32">
          <div>
            <Image src={unsplash} />
          </div>
          <div className="flex flex-col items-center w-full">
            <h1 className="text-white font-bold text-4xl mb-5">
              Our <span className="text-blue-500">Service</span>
            </h1>
            <p className="text-gray mb-10 text-left">
              Travira Air is totally committed to supporting our clients by
              providing safe and reliable solutions for their air charter needs.
            </p>
            <div className="w-full flex justify-between text-left text-white uppercase text-xs font-serif leading-7">
              <div className="flex flex-col">
              <Link href="/" className="text-blue-500">
                <a className="underline hover:text-blue-500">
                  SCHEDULED & SPOT CHARTER
                </a>
              </Link>
              <Link href="">
                <a className="underline hover:text-blue-500">
                  LONGTERM CONTRACT
                </a>
              </Link>
              <Link href="" className="underline hover:text-blue-500">
                <a className="hover:text-blue-500">MEDICAL EVACUATION FLIGHT</a>
              </Link>
              <Link href="" className="hover:text-blue-500">
                <a className="hover:text-blue-500">Safety</a>
              </Link>
              <Link href="" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">Careers</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">
                  AIRCRAFT MANAGEMENT
                </a>
              </Link>
              </div>

              <div className="flex flex-col flex-intial">
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">AIRCRAFT MRO</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">ONSHORE</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">OFFSHORE</a>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
