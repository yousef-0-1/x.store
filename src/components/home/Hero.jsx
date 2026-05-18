import modelImg from "../../assets/models.webp";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";
const Stats = (props) => {
  return (
    <div className={props.className + " max-lg:text-center"}>
      <h2 className="text-[32px] lg:text-[35px] font-bold leading-tight lg:leading-[54px]">
        {props.num}
      </h2>
      <p className="opacity-60 lg:text-nowrap ">{props.disc}</p>
    </div>
  );
};
export const Hero = () => {
  return (
    <div>
      <section className="bg-[#f3f0f1] p-5 lg:p-10 overflow-hidden">
        <div className="container flex flex-col items-center gap-10 lg:flex-row">
          <div className="z-1 w-[60%] flex flex-col gap-10 max-lg:w-[100%] max-lg:items-center">
            <h1 className="Integral-CF not-italic text-[40px] leading-[1] lg:text-[64px] font-bold lg:leading-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="opacity-60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link to={"/shop"}>
              <Button btnName="Shop Now" btnClass="lg:w-55 w-[100%]" />
            </Link>
            <div className="stats flex gap-10 items-center flex-wrap lg:flex-nowrap max-lg:justify-center">
              <Stats
                num="200+"
                disc="International Brands"
                className="w-[calc(33%-12px)] lg:w-auto"
              />
              <div className="self-stretch w-[2px] bg-black my-2 opacity-20"></div>
              <Stats
                num="2,000+"
                disc="High-quality Products"
                className="w-[calc(33%-12px)] lg:w-auto"
              />
              <div className="hidden lg:block self-stretch w-[2px] bg-black my-2 opacity-20"></div>
              <Stats
                num="30,000+"
                disc="Happy Customers"
                className="w-[33%] lg:w-auto"
              />
            </div>
          </div>

          <div className="relative">
            <svg
              className="z-3 absolute bottom-[75%] right-[0px]"
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                fill="black"
              />
            </svg>
            <svg
              className="z-3 absolute top-[35%] left-[0px]"
              width="52"
              height="52"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                fill="black"
              />
            </svg>
            <img
              src={modelImg}
              alt="Models"
              draggable="false"
              className="relative scale-125 -translate-y-[-20%] -translate-x-[50px]"
            />
          </div>
        </div>
      </section>
      <div className="brands bg-black p-7 w-[100%] mt-[-10px] z-[3] relative">
        <div className="container flex justify-center gap-4 lg:justify-between flex-wrap lg:flex-nowrap ">
          <p className="text-white text-[40px] font-[Versace] tracking-widest uppercase max-lg:text-[25px]">
            Versace
          </p>
          <p className="text-white text-[40px] font-[Zara] tracking-widest uppercase max-lg:text-[25px]">
            Zara
          </p>
          <p className="text-white text-[40px] font-[Gucci] tracking-widest uppercase max-lg:text-[22px]">
            Gucci
          </p>
          <p className="text-white text-[40px] font-[Parada] tracking-wide uppercase max-lg:text-[22px]">
            Parada
          </p>
          <p className="text-white text-[40px] font-[Calvin klein] tracking-wide uppercase max-lg:text-[22px]">
            Calvin klein
          </p>
        </div>
      </div>
    </div>
  );
};
