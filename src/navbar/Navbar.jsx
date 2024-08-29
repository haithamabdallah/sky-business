import { useState, useEffect, useContext } from "react";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { Context } from "../ContextProvider";

const clearSearch = (setTerm, setShow) => {
  setShow(false);
  setTerm("");
};
const Navbar = ({ setShowMargin }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollStatus, setScrollStatus] = useState("up");
  const { setState } = useContext(Context);
  const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      setScrollStatus("down");
      setState((prev) => ({ ...prev, showMargin: false }));
    } else {
      setScrollStatus("up");
      setState((prev) => ({ ...prev, showMargin: true }));
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
