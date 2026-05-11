import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "swiper/css";
import { useRef } from "react";
export const Testimonials = () => {
  const swiperRef = useRef(null);
  function nextSlideHandler() {
    swiperRef.current.slideNext();
  }
  function prevSlideHandler() {
    swiperRef.current.slidePrev();
  }
  const randomNames = [
    "Adam J.",
    "Sarah B.",
    "Richard A.",
    "Alex K.",
    "James L.",
    "Adam J.",
    "Sarah B.",
    "Richard A.",
    "Alex K.",
    "James L.",
  ];
  return (
    <section>
      <div className="container flex justify-between items-center mb-10">
        <h2 className="heading text-left !p-0 lg:!text-[40px] !text-[30px]">
          our happy customers
        </h2>
        <div className="arrows flex gap-2 ">
          <button
            className=" transition duration-300 cursor-pointer hover:scale-[1.1]"
            onClick={nextSlideHandler}
          >
            <ArrowLeft size={26} />
          </button>
          <button
            className=" transition duration-300 cursor-pointer hover:scale-[1.1] "
            onClick={prevSlideHandler}
          >
            <ArrowRight size={26} />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 z-10 h-full w-[10%] md:w-[20%] bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-[10%] md:w-[20%] bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={10}
          slidesPerView={1}
          slidesOffsetBefore={0}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 4.5 },
          }}
          centeredSlides={false}
          loop={true}
          rewind={false}
          loopPreventsSliding={true}
          watchSlidesProgress={true}
          className="my-swiper !overflow-visible"
        >
          {randomNames.map((rand, i) => (
            <SwiperSlide key={i} className="transition-opacity duration-300">
              <div className="testi-box p-6 border border-gray-200 rounded-[20px] bg-white h-full w-full">
                <div className="stars flex text-yellow-400 text-lg gap-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <h4 className="text-[20px] font-bold">{rand}</h4>
                  <IoIosCheckmarkCircle className="text-green-600 text-2xl" />
                </div>
                <p className="text-gray-500 mt-2 leading-relaxed text-sm md:text-base">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores aspernatur iure ea neque repudiandae temporibus."
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
