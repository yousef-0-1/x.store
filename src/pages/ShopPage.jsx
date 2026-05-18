import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SideFilter } from "../components/shop/SideFilter";
import { ShopProducts } from "../components/shop/ShopProducts";
import { useState } from "react";
export const ShopPage = () => {
  const { category } = useParams();
  const [openFilters, setOpenFilters] = useState(false);
  function openHandler() {
    setOpenFilters((prev) => !prev);
  }
  return (
    <section className="relative">
      <div className="container flex items-center">
        <hr className="opacity-20 mb-5" />
        <p className="flex items-center gap-2 text-gray-700 text-lg mb-8">
          <Link to={"/"} className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={18} />
          <span className="capitalize">{category}</span>
        </p>
      </div>
      <SideFilter
        openHandler={openHandler}
        className={`lg:hidden sticky top-5 ${openFilters ? "!block !absolute h-full !top-15 w-full left-0 z-3" : ""}`}
      />
      <div className="container relative flex justify-between gap-3 ">
        <SideFilter className={`sticky top-5`} />
        <ShopProducts openHandler={openHandler} />
      </div>
    </section>
  );
};
