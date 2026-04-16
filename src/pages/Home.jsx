import { Hero } from "../components/home/Hero";
import { Arrivals } from "../components/home/Arrivals";
import { TopSelling } from "../components/home/TopSelling";
import { Browse } from "../components/home/Browse";
import { Testmonials } from "../components/home/Testimonials";
export const Home = () => {
  return (
    <>
      <Hero />
      <Arrivals />
      <TopSelling />
      <Browse />
      <Testmonials />
    </>
  );
};
