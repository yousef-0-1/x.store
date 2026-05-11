import { ProductCard } from "../common/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const TopSelling = () => {
  const { topSell } = useProduct();
  const [expand, setExpand] = useState(true);

  if (!topSell) return null;
  // why ? cuz the api doesn't provide much data so i had to do this to not get repeated items
  const displayProducts = topSell.slice(1, expand ? 5 : 9);

  return (
    <section className="my-10">
      <div className="top-sell container">
        <hr className="opacity-20 my-10" />
        <h2 className="heading max-lg:font-size[25px]">Top Selling</h2>
        <div className="flex flex-row lg:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.5} centeredSlides={false}>
            {displayProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  thumbnail={item.thumbnail}
                  name={item.title}
                  price={item.price}
                  rating={item.rating || 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {displayProducts.map((item) => (
            <ProductCard
              key={item.id}
              thumbnail={item.thumbnail}
              name={item.title}
              price={item.price}
              rating={item.rating || 0}
            />
          ))}
        </div>
        <div className="hidden lg:flex justify-center mt-12">
          <button
            onClick={() => setExpand(!expand)}
            className="px-14 py-3 border rounded-full hover:bg-[#d8d8d8] transition duration-300 cursor-pointer"
          >
            {expand ? "View More" : "View Less"}
          </button>
        </div>
      </div>
    </section>
  );
};
