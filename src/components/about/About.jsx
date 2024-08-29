import { useContext } from "react";
import { Context } from "../../ContextProvider";
import CoverComponent from "../CoverComponent";
import parse from "html-react-parser";

const About = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  const settings = state.aboutData.settings;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const { cover_header: header, cover_text: text, is_dark: isDark } = settings;

  return (
    state.aboutData.settings && (
      <div className="">
        <CoverComponent
          desktopCover={desktopCover}
          mobileCover={mobileCover}
          header={header}
          text={text}
          isDark={isDark}
        />
        <div className="max-w-[1170px] mx-auto px-[15px] my-[3rem]">
          {/* section 1 large screen */}
          <div className="hidden lg:grid place-items-center  lg:grid-cols-2  gap-y-[3rem] my-[3rem]">
            <img
              src={`${url}/${state.aboutData.settings.images[0 + 1]}`}
              alt=""
            />
            <div className="text-gray-500 max-w-[455px] ml-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[0 + 1]}`)}
            </div>
            <div className="text-gray-500 max-w-[455px] mr-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[1 + 1]}`)}
            </div>
            <img
              src={`${url}/${state.aboutData.settings.images[1 + 1]}`}
              alt=""
            />
            <img
              src={`${url}/${state.aboutData.settings.images[2 + 1]}`}
              alt=""
            />
            <div className="text-gray-500 max-w-[455px] ml-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[2 + 1]}`)}
            </div>
          </div>
          {/* section 1 mobile */}
          <div className="grid place-items-center grid-cols-1 lg:hidden gap-y-[3rem] my-[3rem]">
            <img
              src={`${url}/${state.aboutData.settings.images[0 + 1]}`}
              alt=""
            />
            <div className="text-gray-500 max-w-[455px] mx-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[0 + 1]}`)}
            </div>
            <img
              src={`${url}/${state.aboutData.settings.images[1 + 1]}`}
              alt=""
            />
            <div className="text-gray-500 max-w-[455px] mx-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[1 + 1]}`)}
            </div>
            <img
              src={`${url}/${state.aboutData.settings.images[2 + 1]}`}
              alt=""
            />
            <div className="text-gray-500 max-w-[455px] mx-auto p-5 [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[2 + 1]}`)}
            </div>
          </div>
          {/* section 2 */}
          <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 my-[3rem]">
            <img
              src={`${url}/${state.aboutData.settings.images[3 + 1]}`}
              alt="image3"
            />
            <div className="p-5 text-center font-[600] [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[3 + 1]}`)}
            </div>
            <img
              src={`${url}/${state.aboutData.settings.images[4 + 1]}`}
              alt="image4"
            />
            <div className="p-5 text-center font-[600] [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[4 + 1]}`)}
            </div>
            <img
              src={`${url}/${state.aboutData.settings.images[5 + 1]}`}
              alt="image5"
            />
            <div className="p-5 text-center font-[600] [&_*]:text-[#6b7280!important] [&_*]:font-futura">
              {parse(`${state.aboutData.settings.texts[5 + 1]}`)}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default About;
