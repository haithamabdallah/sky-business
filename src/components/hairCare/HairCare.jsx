import { useContext } from "react";
import CoverComponent from "../CoverComponent";
import OurServices from "./components/ourServices/OurServices";
import Products from "./components/products/Products";
import { Context } from "../../ContextProvider";

const HairCare = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <CoverComponent
        desktopCover={state.hairCareData.settings.cover_desktop}
        mobileCover={state.hairCareData.settings.cover_mobile}
        header={state.hairCareData.settings.cover_header}
        text={state.hairCareData.settings.cover_text}
        isDark={state.hairCareData.settings.is_dark}
      />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-12 font-futura">
        <Products />
        <OurServices />
      </div>
    </div>
  );
};

export default HairCare;
