import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import Practice from "./sections/Practice";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <>
      <main>
        {/* <Navbar /> */}
        {/* <HeroSection /> */}
        <Practice />
      </main>
    </>
  );
};

export default App;
