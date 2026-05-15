import { Link, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheck } from "react-icons/fa";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useProductById } from "../../hooks/useProductById";
import { Button } from "../common/Button";
export const MainProduct = () => {
  const { id } = useParams();
  const { product } = useProductById(id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#4F4631");
  const [selectedSize, setSelectedSize] = useState("Small");
  const [amount, setAmount] = useState(1);
  if (!product.id) return null;

  const main = selectedImage ?? product.images[0];
  return (
    <section>
      <div className="container">
        <hr className="opacity-20 mb-5" />
        <p className="text-gray-700 text-lg mb-8">
          <Link to={"/"} className="hover:text-black">
            Home
          </Link>
          {" › "}
          <span className="hover:text-black cursor-pointer">Shop</span>
          {" › "}
          <span className="hover:text-black cursor-pointer">
            {product.category.includes("womens") ? "Women" : "Men"}
          </span>
          {" › "}
          <span className="text-black">{product.tags[1]}</span>
        </p>
        <div className="product-details flex gap-10 lg:gap-8 max-xl:flex-col">
          <div className="images-holder flex justify-between flex-1 gap-4 max-lg:flex-col-reverse">
            <div className="side-img flex flex-col gap-2 lg:w-[32%] max-lg:flex-row">
              {product.images.slice(0, 3).map((image, index) => (
                <img
                  loading="lazy"
                  draggable={false}
                  key={index}
                  src={image}
                  onClick={() => setSelectedImage(image)}
                  className={`bg-[#F0EEED] aspect-square rounded-4xl overflow-hidden ${main === image ? "ring-2 ring-black" : ""} hover:ring-2 ring-black cursor-pointer`}
                />
              ))}
            </div>
            <div className="main-img w-full">
              <img
                draggable={false}
                src={main}
                className="bg-[#F0EEED] aspect-square rounded-4xl overflow-hidden "
                alt="main"
                loading="lazy"
              />
            </div>
          </div>
          <div className="details-holder flex flex-col gap-5 lg:gap-3 flex-1">
            <h2 className="Integral-CF text-[30px] lg:text-[40px] font-bold">
              {product.title}
            </h2>
            <div className="flex text-yellow-400 lg:text-3xl flex items-center">
              {[...Array(5)].map((_, index) => {
                const starNumber = index + 1;
                return (
                  <span key={index}>
                    {product.rating >= starNumber ? (
                      <FaStar />
                    ) : product.rating >= starNumber - 0.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}{" "}
                  </span>
                );
              })}
              <span className="text-black ml-2">
                {product.rating.toFixed(1)}/
                <span className="text-gray-400">5</span>
              </span>
            </div>
            {product.discountPercentage ? (
              <div className="product-price text-[24px] lg:text-[37px] font-normal font-[https://www.fontshare.com/fonts/satoshi] flex items-center gap-3">
                $
                {Math.floor(
                  product.price -
                    product.price * (product.discountPercentage / 100),
                ) + ".99"}{" "}
                <b>
                  <del className="text-gray-500">{product.price}</del>
                </b>
                <span className="ml-6 text-[15px] lg:text-[25px] p-[3px] lg:p-[6px] bg-[#ff33331a] text-[#FF3333] rounded-full">
                  -{product.discountPercentage}%
                </span>
              </div>
            ) : (
              product.price
            )}
            <p className=" text-gray-600">{product.description}</p>
            <hr className="opacity-10" />
            <div className="select-color">
              <h4 className="text-xl text-gray-600 mb-3">Select Colors</h4>
              <div className="colors flex gap-4">
                <div
                  onClick={() => setSelectedColor("#4F4631")}
                  className={`w-[46px] h-[46px] lg:w-[37px] lg:h-[37px] bg-[#4F4631] rounded-full cursor-pointer flex items-center justify-center ${selectedColor === "#4F4631" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                >
                  {selectedColor === "#4F4631" && (
                    <FaCheck className="text-white text-sm" />
                  )}
                </div>
                <div
                  onClick={() => setSelectedColor("#314F4A")}
                  className={`w-[46px] h-[46px] lg:w-[37px] lg:h-[37px] bg-[#314F4A] rounded-full cursor-pointer flex items-center justify-center ${selectedColor === "#314F4A" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                >
                  {selectedColor === "#314F4A" && (
                    <FaCheck className="text-white text-sm" />
                  )}
                </div>
                <div
                  onClick={() => setSelectedColor("#31344F")}
                  className={`w-[46px] h-[46px] lg:w-[37px] lg:h-[37px] bg-[#31344F] rounded-full cursor-pointer flex items-center justify-center ${selectedColor === "#31344F" ? "ring-2 ring-offset-2 ring-black" : ""}`}
                >
                  {selectedColor === "#31344F" && (
                    <FaCheck className="text-white text-sm" />
                  )}
                </div>
              </div>
            </div>
            <hr className="opacity-10" />
            <div className="select-size">
              <h4 className="text-xl text-gray-600 mb-3">Select Size</h4>
              <div className="sizes flex gap-4 max-lg:justify-between">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <div
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-[10px] max-lg:flex-1 text-center lg:px-[20px] text-lg lg:text-lg bg-[#F0EEED] text-gray-800 rounded-full cursor-pointer transition duration-150 select-none ${selectedSize === size ? "text-white bg-black" : ""} `}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <hr className="opacity-10" />
            <div className="purchase flex gap-2">
              <div className="amount bg-[#F0EEED] py-3 lg:w-[20%] rounded-full flex items-center justify-around text-xl select-none max-lg:flex-1">
                <Minus
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setAmount((a) => (a == 1 ? 1 : a - 1))}
                />
                {amount}
                <Plus
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setAmount((a) => a + 1)}
                />
              </div>
              <Button btnName="Add to Cart" btnClass="text-xl flex-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
