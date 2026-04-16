import { Button } from "../components/common/Button";
import { IoMdMail } from "react-icons/io";
export const Contact = () => {
  return (
    <section>
      <div className="container flex justify-between max-lg:flex-col lg:gap-30 gap-10 bg-black p-10 rounded-[30px]">
        <h2 className="heading !p-0 !text-left max-lg:!text-[30px] text-white mt-2 leading-[1.2]">
          stay upto date about our latest offers
        </h2>
        <div className="email flex flex-col gap-4 w-full max-w-[450px]">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
              <IoMdMail className="text-gray-400 text-2xl" />
            </div>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full min-h-[60px] md:min-h-[70px] pl-16 pr-6 rounded-full bg-white text-black text-lg md:text-xl outline-none border border-transparent focus:border-gray-300 transition-all"
            />
          </div>
          <Button
            btnName="Subscribe To Newsletter"
            btnClass="bg-white w-full !text-black font-bold text-lg md:text-xl !h-[60px] md:!h-[70px] rounded-full hover:bg-gray-100 transition-all shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};
