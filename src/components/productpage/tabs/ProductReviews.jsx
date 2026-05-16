import { SlidersHorizontal } from "lucide-react";
import { IoIosArrowDown, IoIosCheckmarkCircle } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { Button } from "../../common/Button";
export const ProductReviews = ({ product }) => {
  return (
    <section>
      <div className="container">
        <div className="top-part flex justify-between items-center mb-5">
          <h3 className="font-semibold text-[20px] lg:text-2xl">
            All Reviews{"  "}
            <span className="text-sm text-gray-400">
              {"(" + product.reviews.length + ")"}
            </span>
          </h3>
          <div className="filters flex items-center gap-2">
            <div className="p-3 rounded-full bg-[#F0F0F0] cursor-pointer">
              <SlidersHorizontal className="rotate-90" size={20} />
            </div>
            <button className="hidden lg:flex gap-4 text-lg items-center lg:py-3 lg:px-4 rounded-full bg-[#F0F0F0] cursor-pointer">
              latest <IoIosArrowDown />
            </button>
            <Button btnName="Write a Review" btnClass="lg:py-3 lg:px-4 " />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
          {product.reviews.map((rev, i) => (
            <div
              key={i}
              className="p-6 flex flex-col gap-3 border border-gray-200 rounded-[20px] bg-white w-full "
            >
              <div className="text-yellow-400 lg:text-xl flex items-center justify-between w-full">
                <span className="flex">
                  {[...Array(5)].map((_, index) => {
                    const starNumber = index + 1;
                    return (
                      <span key={index}>
                        {rev.rating >= starNumber ? (
                          <FaStar />
                        ) : rev.rating >= starNumber - 0.5 ? (
                          <FaStarHalf />
                        ) : (
                          ""
                        )}
                      </span>
                    );
                  })}
                </span>
                <SlOptions className="hidden lg:inline text-black text-right cursor-pointer" />
              </div>
              <div className="flex items-center gap-2">
                <h4 className="text-[20px] font-bold">{rev.reviewerName}</h4>
                <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
              </div>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {rev.comment}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                posted on {rev.date.match(/.*?(?=T)/)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
