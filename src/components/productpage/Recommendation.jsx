import { ProductCard } from "../common/ProductCard";
import { useProduct } from "../../hooks/useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
export const Recommendation = ({ product }) => {
  const { products } = useProduct();
  const related = products.filter(
    (item) => item.tags.includes(product.tags[1]) && item.id !== product.id,
  );
  return (
    <section>
      <div className="container p-4">
        <h2 className="heading mb-5">you might also like</h2>
        <div className="flex flex-row lg:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.5} centeredSlides={false}>
            {related.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard
                  thumbnail={item.thumbnail}
                  id={item.id}
                  name={item.title}
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                  rating={item.rating || 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="gap-3 hidden lg:flex justify-center">
          {related.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              name={item.title}
              price={item.price}
              discountPercentage={item.discountPercentage}
              rating={item.rating || 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
