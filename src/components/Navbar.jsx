import { useState } from "react";
import { Menu, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NotificationBanner } from "./NotificationBanner";
import { useCart } from "../context/CartContext";
export const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const { cart } = useCart();
  function dropDownHandler() {
    setIsDropdownActive((prev) => !prev);
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {isDropdownActive && (
        <div
          className="fixed inset-0 z-3 lg:hidden"
          onClick={() => setIsDropdownActive(false)}
        />
      )}
      <NotificationBanner />
      <nav className="container py-6 flex justify-between items-center navbar gap-10 relative">
        <div className="logo Integral-CF text-[32px] font-bold leading-[38px] flex items-center gap-2">
          <Menu
            onClick={dropDownHandler}
            className={`${isDropdownActive && "fixed"} hidden max-lg:block cursor-pointer hover:opacity-80 transition-opacity z-5`}
            size={28}
          />
          <Link to={"/"}>X.Shop</Link>
        </div>
        <ul
          className={`links lg:static lg:flex lg:flex-row lg:justify-between gap-5 ${isDropdownActive ? "active-drop" : ""}`}
        >
          <Link to={"/shop"}>
            <li className="flex items-center gap-1">
              Shop <ChevronDown size={18} />
            </li>
          </Link>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="search-bar p-3 rounded-4xl flex items-center flex-1 hidden md:flex">
          <Search className="mr-4 text-black/40" size={21} />
          <input
            className="flex-1"
            type="text"
            placeholder="Search For Products..."
          />
        </div>
        <div className="cart-acc flex items-center justify-between gap-2">
          <Search
            className="block md:hidden cursor-pointer hover:opacity-60 transition-opacity"
            size={21}
            onClick={() => setIsSearchOpen((prev) => !prev)}
          />
          <Link
            to={"/cart"}
            className="flex gap-1 cursor-pointer hover:opacity-60 transition-opacity"
          >
            <ShoppingCart size={23} />
            {cart.length}
          </Link>

          <User
            className="cursor-pointer hover:opacity-60 transition-opacity"
            size={24}
          />
        </div>
      </nav>
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 container">
          <div className="search-bar p-3 rounded-4xl flex items-center">
            <Search className="mr-4 text-black/40" size={21} />
            <input
              className="flex-1 bg-transparent outline-none"
              type="text"
              placeholder="Search For Products..."
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};
