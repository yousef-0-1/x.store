import { ProductCard } from "../common/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Arrivals = () => {
  const { products } = useProduct();
  const [expand, setExpand] = useState(true);

  if (!products) return null;

  const displayProducts = products.slice(0, expand ? 4 : 8);

  return (
    <section className="arrivals py-12">
      <div className="container mx-auto px-4">
        <h2 className="heading mb-10 lg:!font-size[25px]">New Arrivals</h2>
        <div className="flex flex-row lg:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.5} centeredSlides={false}>
            {displayProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  thumbnail={item.thumbnail}
                  id={item.id}
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
              id={item.id}
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
