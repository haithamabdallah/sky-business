import { useContext } from "react";
import ProsList from "./components/prosList/ProsList";
import { Context } from "../../../ContextProvider";

const TopFooter = () => {
  const { value } = useContext(Context);
  const imgDesktop = value.settings.top_footer_desktop;
  const imgMobile = value.settings.top_footer_mobile;
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="w-full mx-auto">
          <img alt="top footer" src={`${url}/${imgDesktop}`} width="100%" className="hidden md:block" />
          <img alt="top footer" src={`${url}/${imgMobile}`} width="100%" className="md:hidden" />
          {/* <ProsList /> */}
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
