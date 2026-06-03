import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import Practice from "./sections/Practice";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <FirstVideo/>
        <Jason />
        {/* <Practice /> */}
      </main>
    </>
  );
};

export default App;
