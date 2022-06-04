import React from "react";
import Link from "next/link";
import Image from "next/image";
import unsplash2 from "../assets/images/unsplash-2.png";

function Safety() {
  return (
    <div className="flex   min-h-screen py-10 bg-gray">
      <div className="py-10 text-center w-screen  mx-32">
        <div className="flex gap-32">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-dark-blue font-bold text-4xl mb-5">
             Safety
            </h1>
            <p className="text-secondary mb-10 text-left">
            It is a matter of pride for Travira Air that we have one of the best air charter safety records in the region
            </p>
            <div className="w-full flex justify-between text-left text-dark-blue font-semibold uppercase text-xs font-serif leading-7">
              <div className="flex flex-col">
              <Link href="/" className="text-blue-500">
                <a className="underline hover:text-blue-500">
                MANAGEMENT COMMITMENT
                </a>
              </Link>
              <Link href="">
                <a className="underline hover:text-blue-500">
                IT-BASED TRACKING AND MONITORING
                </a>
              </Link>
              <Link href="" className="underline hover:text-blue-500">
                <a className="hover:text-blue-500">INDEPENDENT VERIFICATION</a>
              </Link>
              <Link href="" className="hover:text-blue-500">
                <a className="hover:text-blue-500">INTERNATIONAL ACCREDITATION</a>
              </Link>
              <Link href="" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">BEHIND THE SCENES</a>
              </Link>
             
              </div>

              <div className="flex flex-col flex-intial">
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">GLOBAL OUTLOOK</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">PILOTS AND CREW</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">MEDICAL FACILITIES</a>
              </Link>
              <Link href="careers" className="hover:text-blue-500">
                <a className="underline hover:text-blue-500">AIRCRAFT FLEET</a>
              </Link>
            </div>
            </div>
          </div>
          <div>
            <Image src={unsplash2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
