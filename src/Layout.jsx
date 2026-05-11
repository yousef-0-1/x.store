import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="relative z-10 container">
        <div className="translate-y-1/2">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};
