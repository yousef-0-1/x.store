import { Contact } from "../components/Contact";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import paymentsIcons from "../assets/payicons.webp";
export const Footer = () => {
  return (
    <section className="bg-[#f0f0f0] p-20 max-lg:p-0 ">
      <div className="container my-15 gap-10 flex max-lg:flex-col max-lg:pt-60 max-lg:gap-10">
        <div className="socials flex flex-col gap-10 flex-[0.35]">
          <h1 className="logo Integral-CF text-[32px] font-bold leading-[38px] flex items-center gap-2">
            X.store
          </h1>
          <p className="opacity-60 leading-[1.6] break-normal">
            We have clothes that suits your style and which you're proud to
            wear. From Women to Men
          </p>
          <div className="s-acounts flex gap-5">
            <FaTwitter className="border-solid border-[#d3d3d3] border-[1px] rounded-full scale-[150%] bg-white cursor-pointer w-5 h-5 p-[2px] hover:bg-black hover:text-white duration-300" />
            <FaFacebook className="border-solid border-[#d3d3d3] border-[1px] rounded-full scale-[150%] bg-white cursor-pointer w-5 h-5 p-[2px] hover:bg-black hover:text-white duration-300" />
            <FaInstagram className="border-solid border-[#d3d3d3] border-[1px] rounded-full scale-[150%] bg-white cursor-pointer w-5 h-5 p-[2px] hover:bg-black hover:text-white duration-300" />
            <FaGithub className="border-solid border-[#d3d3d3] border-[1px] rounded-full scale-[150%] bg-white cursor-pointer w-5 h-5 p-[2px] hover:bg-black hover:text-white duration-300" />
          </div>
        </div>
        <div className="flex justify-between flex-1 max-lg:gap-10 max-lg:grid max-lg:items-start max-lg:grid-cols-2">
          <div className="flex flex-col gap-5 font-semibold">
            <h3 className="uppercase text-30">Company</h3>
            <ul className="opacity-60 space-y-5 [&>li]:cursor-pointer [&>li]:hover:opacity-80 [&>li]:duration-200 ">
              <li>About</li>
              <li>Features</li>
              <li>Work</li>
              <li>Career</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5 font-semibold">
            <h3 className="uppercase text-30">Help</h3>
            <ul className="opacity-60 space-y-5 [&>li]:cursor-pointer [&>li]:hover:opacity-80 [&>li]:duration-200 ">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Term & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5 font-semibold">
            <h3 className="uppercase text-30">FAQ</h3>
            <ul className="opacity-60 space-y-5 [&>li]:cursor-pointer [&>li]:hover:opacity-80 [&>li]:duration-200 ">
              <li>Acount</li>
              <li>Manage</li>
              <li>Oders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5 font-semibold">
            <h3 className="uppercase text-30">Resources</h3>
            <ul className="opacity-60 space-y-5 [&>li]:cursor-pointer [&>li]:hover:opacity-80 [&>li]:duration-200 ">
              <li>Free eBooks</li>
              <li>Development Tutorials</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="my-5 opacity-40 " />
        <div className="rights flex items-center justify-between max-lg:flex-col gap-5">
          <p className="capitalize opacity-70">
            X.Store © 2000-{new Date().getFullYear()} all rights reserved
          </p>
          <img
            src={paymentsIcons}
            alt="Payment methods"
            className="h-[50px]"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};
