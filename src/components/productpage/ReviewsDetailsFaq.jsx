import { useState } from "react";
import { ProductReviews } from "./tabs/ProductReviews";
import { ProductDetails } from "./tabs/ProductDetails";
import { ProductFAQs } from "./tabs/ProductFAQs";
export const ReviewsDetailsFaq = ({ product }) => {
  const [activeTab, setActiveTab] = useState("Rating&Reviews");
  return (
    <section className="p-5">
      <div className="flex items-center justify-around border-b border-gray-200 container mb-5">
        {["Product Details", "Rating&Reviews", "FAQs"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-4 transition duration-200 text-base lg:text-xl font-medium ${
              activeTab === tab ? "" : "text-gray-400"
            } w-full cursor-pointer`}
          >
            {tab}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-opacity duration-200 ${
                activeTab === tab ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
      {activeTab === "Rating&Reviews" && <ProductReviews product={product} />}
      {activeTab === "Product Details" && <ProductDetails product={product} />}
      {activeTab === "FAQs" && <ProductFAQs />}
    </section>
  );
};
