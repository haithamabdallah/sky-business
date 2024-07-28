import { useState, useEffect } from "react";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(undefined);

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      setScrollStatus("down");
    } else {
      setScrollStatus("up");
    }
    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <>
      <DesktopNavbar scrollStatus={scrollStatus} />
      <MobileNavbar scrollStatus={scrollStatus} />
    </>
  );
};

export default Navbar;
