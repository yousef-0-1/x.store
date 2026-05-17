import {
  ChevronRight,
  Trash2,
  Tag,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "../components/common/Button";

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const totalDiscount = cart.reduce(
    (acc, cur) => acc + cur.price * cur.quantity * ((cur.discount || 0) / 100),
    0,
  );
  const deliveryFee = 6;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <section>
      <div className="container my-2 mb-6">
        <hr className="opacity-20 mb-5" />
        <p className="flex items-center gap-2 text-gray-700 text-lg mb-8">
          <Link to={"/"} className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={18} />
          <span>Cart</span>
        </p>
        <h2 className="heading max-lg:!text-[40px] lg:!text-left !p-0">
          Your Cart
        </h2>
      </div>

      {cart.length !== 0 ? (
        <div className="container flex flex-col lg:flex-row gap-5 mb-10">
          <div className="data-prod rounded-3xl border border-gray-200 flex-[1.33] overflow-hidden">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className={`flex p-5 justify-between ${index !== cart.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="flex gap-4 flex-1">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="bg-[#F0EEED] rounded-2xl w-45 h-45 object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h4 className="font-semibold text-2xl leading-tight">
                      {item.name}
                    </h4>
                    <div className="flex flex-col gap-1">
                      <p className="text-base text-gray-500">
                        Size: <span className="text-black">{item.size}</span>
                      </p>
                      <div className="flex items-center gap-2 text-base text-gray-500">
                        Color:
                        <span
                          style={{ backgroundColor: item.color }}
                          className="w-4 h-4 rounded-full inline-block border border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold text-2xl">
                        $
                        {(
                          item.price -
                          item.price * ((item.discount || 0) / 100)
                        ).toFixed(0)}
                      </p>
                      <div className="bg-[#F0EEED] py-2 px-4 rounded-full flex items-center gap-4 text-sm select-none">
                        <Minus
                          size={16}
                          className="cursor-pointer hover:opacity-60"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.size,
                              item.color,
                              item.quantity === 1 ? 0 : -1,
                            )
                          }
                        />
                        <span className="font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <Plus
                          size={16}
                          className="cursor-pointer hover:opacity-60"
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.color, 1)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Trash2
                    size={24}
                    color="red"
                    className="cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={() =>
                      removeFromCart(item.id, item.size, item.color)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="checkout rounded-3xl p-6 border border-gray-200 flex-1 sticky top-5 h-fit flex flex-col gap-5">
            <h3 className="font-bold text-2xl">Order Summary</h3>

            <div className="flex flex-col gap-3 border-b border-gray-200 pb-5">
              <div className="flex justify-between text-base text-gray-600">
                <span>Subtotal</span>
                <span className="text-black font-medium">
                  ${subtotal.toFixed(0)}
                </span>
              </div>
              {totalDiscount > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-red-500 font-medium">
                    -${totalDiscount.toFixed(0)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="text-black font-medium">${deliveryFee}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-2xl">
              <span>Total</span>
              <span>${total.toFixed(0)}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Tag
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="p-3 pl-9 outline-none bg-gray-100 rounded-full w-full text-sm"
                />
              </div>
              <Button btnName="Apply" btnClass="px-5 py-3 text-sm" />
            </div>

            <Button
              btnName="Go to Checkout →"
              btnClass="w-full py-4 text-lg"
              onClick={() =>
                Swal.fire({
                  title: "Order Placed!",
                  text: "Thank you for your purchase.",
                  icon: "success",
                  confirmButtonColor: "#000",
                })
              }
            />
          </div>
        </div>
      ) : (
        <div className="container flex flex-col items-center justify-center mt-28 gap-5 text-center">
          <ShoppingBag size={60} className="text-gray-300" />
          <h2 className="text-2xl font-semibold text-gray-400">
            Your cart is empty
          </h2>
          <Link to="/">
            <Button btnName="Start Shopping" btnClass="px-8 py-3 text-lg" />
          </Link>
        </div>
      )}
    </section>
  );
};
