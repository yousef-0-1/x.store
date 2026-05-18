import { ProductCard } from "../common/ProductCard";
import { SideFilter } from "./SideFilter";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
export const ShopProducts = ({ openHandler }) => {
  const { products } = useProduct();
  const { category } = useParams();
  const [more, setMore] = useState(12);
  if (!products) return null;
  const displayProducts = products.slice(0, more);
  return (
    <>
      <section className="flex-1">
        <div className="flex justify-between items-end mb-5">
          <h3 className="p-1 text-4xl font-medium font-sans">{category}</h3>
          <div className="text-gray-500 flex gap-2 items-center">
            Showing 12 of {products.length} Products
            <span className="hidden lg:flex">
              Sort By:
              <span className="flex gap-1 items-center font-bold text-black cursor-pointer">
                Most Popular <ChevronDown size={18} />
              </span>
            </span>
            <div
              className="lg:hidden p-3 rounded-full bg-[#F0F0F0] cursor-pointer"
              onClick={() => openHandler()}
            >
              <SlidersHorizontal className="rotate-90 text-black" size={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                thumbnail={item.thumbnail}
                name={item.title}
                price={item.price}
                rating={item.rating || 0}
              />
            ))}
          </div>
        </div>
        <div
          className={`flex justify-center mt-12 ${more >= products.length ? "!hidden" : ""}`}
        >
          <button
            onClick={() => setMore((t) => (t = t + 6))}
            className="px-14 py-3 border rounded-full hover:bg-[#d8d8d8] transition duration-300 cursor-pointer"
          >
            View More
          </button>
        </div>
      </section>
    </>
  );
};
