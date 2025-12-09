// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Practice() {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const hero1Ref = useRef(null);
//   const hero2Ref = useRef(null);

//   useGSAP(() => {
//     ScrollTrigger.create({
//       trigger: section1Ref.current,
//       start: "top top",
//       pin: true,
//       pinSpacing: false, // ⬅️ KEY FIX
//       markers: true,
//     });
//     gsap.to(hero1Ref.current, {
//       x: -100,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.out",
//     });
//     gsap.to(hero2Ref.current, {
//       x: -100,
//       opacity: 1,
//       scale: 0.8,
//       duration: 1,
//       ease: "back.out(1.7)",
//       scrollTrigger: {
//         trigger: hero2Ref.current,
//         start: "top 80%",
//         toggleActions: "play none none reverse",
//         markers: true,
//       },
//     });
//   });

//   return (
//     <>
//       <section
//         ref={section1Ref}
//         className="h-screen bg-white flex justify-center items-center"
//         style={{ zIndex: 1, position: "relative" }} // 👈 Important
//       >
//         <h1 ref={hero1Ref} className="text-4xl opacity-0">
//           Section 1 (Pinned)
//         </h1>
//       </section>

//       <section
//         ref={section2Ref}
//         className="h-screen bg-green-400 flex justify-center items-center"
//         style={{ zIndex: 2, position: "relative" }} // 👈 Makes it overlap
//       >
//         <h1 ref={hero2Ref} className="text-4xl opacity-0">
//           Section 2 Overlaps
//         </h1>
//       </section>
//     </>
//   );
// }

// Practice V1
// import { useGSAP } from "@gsap/react";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Practice = () => {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const section4Ref = useRef(null);
//   const hero1Ref = useRef(null);
//   const hero2Ref = useRef(null);
//   const hero3Ref = useRef(null);
//   const hero4Ref = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     ScrollTrigger.create({
//       trigger: section1Ref.current,
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//       markers: true,
//     });
//     ScrollTrigger.create({
//       trigger: section2Ref.current,
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//       markers: true,
//     });
//     ScrollTrigger.create({
//       trigger: section3Ref.current,
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//       markers: true,
//     });
//   });

//   return (
//     <>
//       <section ref={section1Ref} className="h-screen bg-amber-300 z-1 relative">
//         <h1
//           ref={hero1Ref}
//           className="flex items-center justify-center text-6xl font-bold tracking-tight"
//         >
//           Section 1 (Pinned and Visible)
//         </h1>
//       </section>
//       <section ref={section2Ref} className="h-screen bg-green-300 z-2 relative">
//         <h1
//           ref={hero2Ref}
//           className="flex items-center justify-center text-6xl font-bold tracking-tight "
//         >
//           Section 2 (Slides in and overlaps section 1)
//         </h1>
//       </section>
//       <section ref={section3Ref} className="h-screen bg-red-400 z-3 relative">
//         <h1
//           ref={hero3Ref}
//           className="flex items-center justify-center text-6xl font-bold tracking-tight "
//         >
//           Section 3 (Slides in and overlaps section 2)
//         </h1>
//       </section>
//       <section
//         ref={section4Ref}
//         className="h-screen bg-purple-600 z-4 relative"
//       >
//         <h1
//           ref={hero4Ref}
//           className="flex items-center justify-center text-6xl font-bold tracking-tight "
//         >
//           Section 4 (Slides in and overlaps section 3)
//         </h1>
//       </section>
//     </>
//   );
// };

// export default Practice;

// Refactored Version
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Practice() {
  const sectionsRef = useRef([]);

  useGSAP(() => {
    sectionsRef.current.forEach((section, index) => {
      // if (index === 0) return; // skip first section (base layer)

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        // markers: true, // uncomment while debugging
      });
    });

    ScrollTrigger.refresh();
  });

  const content = [
    "Section 1 (Pinned and Visible)",
    "Section 2 (Slides in and overlaps section 1)",
    "Section 3 (Slides in and overlaps section 2)",
    "Section 4 (Slides in and overlaps section 3)",
  ];

  const colors = ["#FBBF24", "#6EE7B7", "#F87171", "#7C3AED"]; // amber, green, red, purple

  return (
    <>
      {content.map((text, i) => (
        <section
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className="h-screen flex justify-center items-center text-6xl font-bold tracking-tight"
          style={{
            background: colors[i],
            position: "relative",
            zIndex: i + 1,
          }}
        >
          {text}
        </section>
      ))}
    </>
  );
}
