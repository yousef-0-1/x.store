import casualImg from "../../assets/casual.webp";
import formalImg from "../../assets/formal.webp";
import partyImg from "../../assets/party.webp";
import gymImg from "../../assets/gym.webp";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Casual",
    to: "/shop/casual",
    img: casualImg,
    colSpan: false,
    imgClass:
      "scale-x-[-1.4] scale-y-[1.4] hover:scale-x-[-1.5] hover:scale-y-[1.5]",
  },
  {
    label: "Formal",
    to: "/shop/formal",
    img: formalImg,
    colSpan: true,
    imgClass:
      "scale-x-[-1] scale-y-[1] hover:scale-x-[-1.1] hover:scale-y-[1.1]",
  },
  {
    label: "Party",
    to: "/shop/party",
    img: partyImg,
    colSpan: true,
    imgClass:
      "scale-x-[1.2] scale-y-[1.2] hover:scale-x-[1.3] hover:scale-y-[1.3]",
  },
  {
    label: "Gym",
    to: "/shop/gym",
    img: gymImg,
    colSpan: false,
    imgClass: "hover:scale-x-[1.1] hover:scale-y-[1.1]",
  },
];

export const Browse = () => {
  return (
    <section className="my-20">
      <div className="container rounded-3xl bg-[#F0F0F0] p-15">
        <h2 className="heading mb-10 max-lg:!text-[30px]">
          Browse by dress style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map(({ label, to, img, colSpan, imgClass }) => (
            <Link
              key={label}
              to={to}
              className={`relative h-[289px] bg-white rounded-[20px] overflow-hidden cursor-pointer ${colSpan ? "md:col-span-2" : ""}`}
            >
              <h3 className="absolute top-6 left-9 text-3xl font-bold z-2">
                {label}
              </h3>
              <img
                src={img}
                draggable="false"
                alt={label}
                className={`w-full h-full object-cover transition-transform duration-300 ${imgClass}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
