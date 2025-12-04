
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "words" });
    const words = split.words;

    // RANDOM START STATE
    gsap.set(words, {
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-45, 45),
      opacity: 0,
      scale: 0.6,
      position: "relative",
    });

    // TIMELINE -> random → final aligned position
    const tl = gsap.timeline({ delay: 0.5 });

    // Phase 1: pop in messy
    tl.to(words, {
      opacity: 1,
      duration: 0.8,
      scale: 1,
      stagger: 0.08,
      ease: "back.out(2)",
    });

    // Phase 2: reorganize into final layout
    tl.to(
      words,
      {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.6,
        stagger: 0.05,
        ease: "expo.out",
      },
      "+=1"
    ); // wait 1s before reorganizing
  }, []);

  return (
    <section className="hero">
      <h1 ref={textRef} className="hero-text">
        Raine Architects Designing Spaces With Meaning
      </h1>
    </section>
  );
}
