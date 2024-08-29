import LeftToRightAnimation from "../../../../animationComponents/leftToRightAnimation/LeftToRightAnimation";
import RightToLeftAnimation from "../../../../animationComponents/rightToLeftAnimation/RightToLeftAnimation";
import { useContext } from "react";
import { Context } from "../../../../ContextProvider";
const HalfBanners = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  const banners = state.homeData.settings.half_banners;
  const isFull = state.homeData.settings.half_banners_container_is_full;
  return (
    <section
      className={`mx-auto mb-[60px] grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1
      gap-5 ${
        Number(isFull) === 1 ? "w-full px-0" : "max-w-[75rem] px-[.9375rem]"
      }`}
    >
      {banners.map((banner, i) =>
        i === 0 ? (
          <LeftToRightAnimation key={i} index={i}>
            <div className="relative">
              <img
                alt="Committed to skin health science"
                className="w-full h-full"
                src={`${url}/${banner.image}`}
              />
              <h2
                className={`text-[28px] leading-10 font-semibold absolute left-5 top-5 ${
                  banner["is_dark"] ? "text-white" : "text-black"
                }`}
              >
                {banner.header}
              </h2>
            </div>
          </LeftToRightAnimation>
        ) : (
          <RightToLeftAnimation key={i} index={i}>
            <div className="relative">
              <img
                alt="Committed to skin health science"
                className="w-full h-full"
                src={`${url}/${banner.image}`}
              />
              <h2
                className={`text-[28px] leading-10 font-semibold absolute left-5 top-5 ${
                  banner["is_dark"] ? "text-white" : "text-black"
                }`}
              >
                {banner.header}
              </h2>
            </div>
          </RightToLeftAnimation>
        )
      )}
    </section>
  );
};

export default HalfBanners;
