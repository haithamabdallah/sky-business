import CoverComponent from "../CoverComponent";
import BrandCategories from "./components/brandCategories/BrandCategories";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const Brands = () => {
  const { state } = useContext(Context);
  return (
    state.brandData.settings && (
      <div>
        <CoverComponent
          desktopCover={state.brandData.settings.cover_desktop}
          mobileCover={state.brandData.settings.cover_mobile}
          header={state.brandData.settings.cover_header}
          text={state.brandData.settings.cover_text}
          isDark={state.brandData.settings.is_dark}
        />
        <section className="max-w-[75rem] mx-auto mt-16 px-5">
          <BrandCategories />
        </section>
      </div>
    )
  );
};

export default Brands;
