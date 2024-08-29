import Header from "./components/header/Header";
import Logos from "./components/logos/Logos";
import CoverComponent from "../CoverComponent";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const Retail = () => {
  const { state } = useContext(Context);
  return (
    state.retailerData.settings && (
      <div>
        <CoverComponent
          desktopCover={state.retailerData.settings.cover_desktop}
          mobileCover={state.retailerData.settings.cover_mobile}
          header={state.retailerData.settings.cover_header}
          text={state.retailerData.settings.cover_text}
          isDark={state.retailerData.settings.is_dark}
        />
        <div className="max-w-[75rem] mx-auto">
          <div className="px-[15px]">
            <Header />
            <Logos />
          </div>
        </div>
      </div>
    )
  );
};

export default Retail;
