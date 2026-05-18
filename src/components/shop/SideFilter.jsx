import { SlidersHorizontal, ChevronRight } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { Button } from "../common/Button";
export const SideFilter = ({ className, openHandler }) => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <section className={`hidden lg:block h-fit w-[23%] bg-white ${className}`}>
      <div className=" flex flex-col gap-3 p-[20px] rounded-xl border border-gray-300">
        <div className="filter-head flex justify-between border-b border-gray-300 pb-3">
          <h3 className="text-xl font-medium font-sans">Filters</h3>
          <SlidersHorizontal onClick={() => openHandler()} />
        </div>
        <div className="categ pb-3 border-b border-gray-300">
          {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cate) => (
            <div
              key={cate}
              className="filter-head flex justify-between text-gray-500 hover:text-gray-900 my-[6px] cursor-pointer "
            >
              <h3 className=" font-medium font-sans">{cate}</h3>
              <ChevronRight size={20} />
            </div>
          ))}
        </div>
        <div
          className={`border-b border-gray-300 py-3 transition duration-300 ${priceOpen ? `overflow-hidden h-[40px]` : ``}`}
        >
          <h3 className="text-xl font-medium font-sans flex justify-between items-center">
            Price
            <ChevronRight
              size={20}
              className={`cursor-pointer ${priceOpen ? `rotate-90` : `rotate-270`} transition duration-300`}
              onClick={() => setPriceOpen((prev) => !prev)}
            />
          </h3>
          <Slider
            range
            min={0}
            max={500}
            value={priceRange}
            onChange={setPriceRange}
            styles={{
              track: { backgroundColor: "#000", height: 6 },
              rail: { backgroundColor: "#e0e0e0", height: 6 },
              handle: {
                backgroundColor: "#000",
                borderColor: "#000",
                width: 20,
                height: 19,
                marginTop: -7,
                opacity: 1,
              },
            }}
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <div className="border-b border-gray-300 py-3">
          <h3 className="text-xl font-medium font-sans">Colors</h3>
          <div className="grid grid-cols-5 gap-2 justify-center">
            {[
              "#00C12B",
              "#F50606",
              "#F5DD06",
              "#F57906",
              "#06CAF5",
              "#063AF5",
              "#7D06F5",
              "#F506A4",
              "#FFFFFF",
              "#000000",
            ].map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color, borderColor: "#a6a6a6" }}
                className={` w-[30px] h-[30px] rounded-full border cursor-pointer flex items-center justify-center`}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <FaCheck className="text-gray-500 text-sm" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-300 py-3">
          <h3 className="text-xl font-medium font-sans">Size</h3>
          <div className="flex flex-wrap w-full gap-2">
            {[
              "XX-Small",
              "X-Small",
              "Small",
              "Medium",
              "Large",
              "X-Large",
              "XX-Large",
              "3X-Large",
              "4X-Large",
            ].map((size) => (
              <div
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-[9px] max-lg:flex-1 text-center lg:px-[14px] text-base lg:text-base bg-[#F0EEED] text-gray-800 rounded-full cursor-pointer transition duration-150 select-none ${selectedSize === size ? "text-white bg-black" : ""} `}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <Button btnName="Apply Filters" onClick={() => openHandler()} />
      </div>
    </section>
  );
};
