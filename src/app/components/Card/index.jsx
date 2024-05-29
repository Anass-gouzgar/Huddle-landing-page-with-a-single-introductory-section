import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/images/logo.svg'
import illustration from '../../../../public/images/illustration-mockups.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


const index = () => {
  return (
    <div className="md:flex md:flex-row md:gap-6 h-full w-full flex flex-col gap-24 py-6 md:py-0">
      {/* first card */}
      <div className="w-full md:w-[66%] h-full flex flex-col gap-y-16 ">
        <div className='w-44 md:w-auto'>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <Image
            src={illustration}
            className="lg:translate-x-16 lg:translate-y8"
            alt="illustartion"
          />
        </div>
      </div>
      {/* sec card */}
      <div className="relative md:w-[40%] w-full h-full text-white font-openSans flex flex-col items-center justify-center gap-8 lg:translate-x-16 min-[1440px]:translate-x-0 ">
        <div className="flex flex-col md:gap-5 gap-10 items-center md:items-start">
          <h1 className="text-3xl font-bold font-poppins text-center md:text-start leading-relaxed xl:w-[60%]">
            {" "}
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-center md:text-start text-lg'>
            {" "}
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <button className="shadow-2xl  text-Violet bg-white p-2 rounded-full px-8 md:self-start self-center hover:bg-SoftMagenta hover:text-white transition duration-700 ">
            Register
          </button>
        </div>

        <div className="bg-transparent flex gap-3 md:self-end self-center md:absolute md:-bottom-3  ">
          <p className="grid place-content-center rounded-full border w-10 h-10 cursor-pointer hover:text-SoftMagenta hover:border-SoftMagenta hover:scale-125 transition duration-300">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8 p-1 " />
          </p>

          <p className="grid place-content-center rounded-full border w-10 h-10 cursor-pointer hover:text-SoftMagenta hover:border-SoftMagenta hover:scale-125 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8 p-1 " />
          </p>

          <p className="rounded-full border w-10 h-10 grid place-content-center cursor-pointer hover:text-SoftMagenta hover:border-SoftMagenta hover:scale-125 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 p-1 " />
          </p>
        </div>
      </div>
    </div>
  );
}

export default index