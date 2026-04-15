import { useState } from "react";

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block bg-black text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-10 hidden md:block"></div>
        <p className="text-[14px] leading-[19px] text-center flex-grow">
          Sign up and get 20% off to your first order.{" "}
          <button className="text-[14px] md:text-[16px] underline font-medium cursor-pointer ml-1">
            Sign Up Now
          </button>
        </p>
        <div className="hidden md:flex w-10  flex justify-end ">
          <button
            aria-label="Close modal"
            className="cursor-pointer hover:opacity-60 transition-opacity"
            onClick={() => setIsVisible(false)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
