import { cloneElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OpacityAnimation = ({ children, index }) => {
  const childRef = useRef(null);

  useEffect(() => {
    if (childRef.current) {
      gsap.fromTo(
        childRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: childRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [index]);

  const clonedChild = cloneElement(children, { ref: childRef });

  return clonedChild;
};

export default OpacityAnimation;
