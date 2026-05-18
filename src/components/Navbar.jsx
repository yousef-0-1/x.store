import { useState } from "react";
import { Menu, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NotificationBanner } from "./NotificationBanner";
import { useCart } from "../context/CartContext";
import { useProduct } from "../hooks/useProduct";
export const Navbar = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const { cart } = useCart();
  const { products } = useProduct();
  const [query, setQuery] = useState("");
  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
  function dropDownHandler() {
    setIsDropdownActive((prev) => !prev);
  }
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <section className="relative">
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
      <div
        className={`container ${query.trim() === "" || isFocused === false ? "hidden" : "block"}`}
      >
        <ul className=" absolute top-35 bg-white w-[95%] z-10 left-[50%] translate-x-[-50%] rounded-xl p-3">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              onClick={() => setQuery("")}
            >
              <li className="p-1 hover:bg-[#f0f0f0] rounded-lg cursor-pointer flex items-center h-14 w-full">
                <img src={item.thumbnail} alt={item.title} className="w-19" />
                <h3>{item.title}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};
