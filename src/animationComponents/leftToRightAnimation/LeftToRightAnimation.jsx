import { cloneElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeftToRightAnimation = ({ children, index }) => {
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current) {
      const animation = gsap.fromTo(
        childRef.current,
        { x: -1200, opacity: 0 }, // Start from left and hidden
        {
          x: 0, // Move to right
          opacity: 1, // Fade in
          duration: 1.5, // Animation duration
          delay: index * 0.3, // Apply index-based stagger
          ease: "power2.out",
          scrollTrigger: {
            trigger: childRef.current,
            toggleActions: "play none none none",
            start: "center 100%",
            scrub: false,
            once: true, // Ensure animation triggers only once
          },
        }
      );

      // Cleanup on component unmount
      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [index]);

  const clonedChild = cloneElement(children, { ref: childRef });

  return clonedChild;
};

export default LeftToRightAnimation;
