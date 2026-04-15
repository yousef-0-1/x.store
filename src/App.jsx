import { NotificationBanner } from "./components/NotificationBanner";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <NotificationBanner />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
