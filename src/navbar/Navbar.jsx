import { useState, useEffect } from "react";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";

const clearSearch = (setTerm, setShow) => {
  setShow(false);
  setTerm("");
};
const Navbar = ({ setShowMargin }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollStatus, setScrollStatus] = useState(undefined);

  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    console.log({
      currentScroll,
      lastScrollTop,
      windowWidth: window.innerWidth,
    });
    if (currentScroll > lastScrollTop) {
      setScrollStatus("down");
      setShowMargin(false);
    } else {
      setScrollStatus("up");
      setShowMargin(true);
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
    <div>
      <DesktopNavbar scrollStatus={scrollStatus} clearSearch={clearSearch} />
      <MobileNavbar scrollStatus={scrollStatus} clearSearch={clearSearch} />
    </div>
  );
};

export default Navbar;
