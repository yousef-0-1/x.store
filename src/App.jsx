import { NotificationBanner } from "./components/NotificationBanner";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Contact } from "./components/Contact";
function App() {
  return (
    <>
      <NotificationBanner />
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}

export default App;
