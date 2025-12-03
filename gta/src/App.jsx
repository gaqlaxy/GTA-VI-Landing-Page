import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
      </main>
    </>
  );
};

export default App;
