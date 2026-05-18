import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
export const ProductCard = ({
  id,
  thumbnail,
  name,
  price,
  discountPercentage,
  rating,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card flex flex-col gap-2 cursor-pointer group ">
        <div className="bg-[#F0F0F0] aspect-square rounded-[20px] overflow-hidden">
          <img
            src={thumbnail}
            alt={name}
            draggable="false"
            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <h4 className="text-lg md:text-xl font-bold line-clamp-1 mt-2 hover:text-gray-800 transition">
          {name}
        </h4>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, index) => {
              const starNumber = index + 1;
              return (
                <span key={index}>
                  {rating >= starNumber ? (
                    <FaStar />
                  ) : rating >= starNumber - 0.5 ? (
                    <FaStarHalf />
                  ) : (
                    ""
                  )}
                </span>
              );
            })}
          </div>
          <span className="text-sm text-black">
            {rating}/<span className="text-gray-400">5</span>
          </span>
        </div>

        <div className="text-xl font-bold">
          {discountPercentage ? (
            <div className="product-price font-normal flex items-center gap-3">
              ${(price - price * (discountPercentage / 100)).toFixed(0)}
              <b>
                <del className="text-gray-500">{price}</del>
              </b>
              <span className="ml-6 p-[3px] text-lg bg-[#ff33331a] text-[#FF3333] rounded-full">
                -{discountPercentage}%
              </span>
            </div>
          ) : (
            price
          )}
        </div>
      </div>
    </Link>
  );
};
