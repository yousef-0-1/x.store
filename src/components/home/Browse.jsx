import casualImg from "../../assets/casual.webp";
import formalImg from "../../assets/formal.webp";
import partyImg from "../../assets/party.webp";
import gymImg from "../../assets/gym.webp";
export const Browse = () => {
  return (
    <section className="my-20">
      <div className="container rounded-3xl bg-[#F0F0F0] p-15">
        <h2 className="heading mb-10 max-lg:!text-[30px]">
          Browse by dress style
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative h-[289px] bg-white rounded-[20px] overflow-hidden cursor-pointer">
            <h3 className="absolute top-6 left-9 text-3xl font-bold z-2">
              Casual
            </h3>
            <img
              src={casualImg}
              draggable="false"
              className="w-full h-full object-cover scale-x-[-1.4] scale-y-[1.4] hover:scale-x-[-1.5] hover:scale-y-[1.5] transition-transform duration-300"
              alt="casual"
            />
          </div>
          <div className="relative md:col-span-2 h-[289px] bg-white rounded-[20px] overflow-hidden cursor-pointer">
            <h3 className="absolute top-6 left-9 text-3xl font-bold z-2">
              Formal
            </h3>
            <img
              src={formalImg}
              draggable="false"
              className="w-full h-full object-cover scale-x-[-1] scale-y-[1] hover:scale-x-[-1.1] hover:scale-y-[1.1] transition-transform duration-300"
              alt="formal"
            />
          </div>
          <div className="relative md:col-span-2 h-[289px] bg-white rounded-[20px] overflow-hidden cursor-pointer">
            <h3 className="absolute top-6 left-9 text-3xl font-bold z-2">
              Party
            </h3>
            <img
              src={partyImg}
              draggable="false"
              className="w-full h-full object-cover scale-x-[1.2] scale-y-[1.2] hover:scale-x-[1.3] hover:scale-y-[1.3] transition-transform duration-300"
              alt="party"
            />
          </div>
          <div className="relative h-[289px] bg-white rounded-[20px] overflow-hidden cursor-pointer">
            <h3 className="absolute top-6 left-9 text-3xl font-bold z-2">
              Gym
            </h3>
            <img
              src={gymImg}
              draggable="false"
              className="w-full h-full object-cover hover:scale-x-[1.1] hover:scale-y-[1.1] transition-transform duration-300"
              alt="gym"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
