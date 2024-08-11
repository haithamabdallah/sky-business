import { Link, NavLink, useLocation } from "react-router-dom";
import { data } from "./data";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../ContextProvider";
import { getSocialList } from "../contactUs/components/socials/components/socialList/data";

const LinkList = () => {
  const location = useLocation();
  const { value } = useContext(Context);
  const socialData = getSocialList(value.settings);

  return (
    <div className="lg:w-[66.66667%] p-0">
      <div className=" flex flex-wrap max-w-full justify-items-center">
        {[{ id: 3, h2: "FOLLOW US", ul: socialData }, ...data].map(
          ({ id, h2, ul }) => (
            <ul key={id} className={`lg:mt-9 lg:w-1/3 mt-5 w-full font-futura`}>
              <li>
                <h2
                  className="font-semibold lg:text-[.85rem] lg:leading-[3rem] text-[.85rem]
                  leading-[3rem] mb-2"
                >
                  {h2}
                </h2>
              </li>
              <li>
                <ul
                  className={`list-none m-0 lg:mt-[5px] ${
                    ul[0].src ? "flex gap-x-2" : ""
                  }`}
                >
                  {ul.map(({ name, route, src }, index) =>
                    src ? (
                      <li
                        key={index}
                        className={
                          "border border-[#000] rounded-full flex justify-center items-center px-[6px] py-2" +
                          `${name == "facebook" ? "scale-[0.50]" : ""}`
                        }
                      >
                        <Link target="_blank" to={`${route}`}>
                          <img
                            src={`${src}`}
                            alt={name}
                            width={"15px"}
                            height={"15px"}
                          />
                        </Link>
                      </li>
                    ) : (
                      <li key={index}>
                        <Link
                          to={route}
                          className={`inline-block text-black text-[0.8rem]
                              leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                              lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600] ${
                                location.pathname === route &&
                                "opacity-80 font-[600] underline"
                              }`}
                        >
                          {name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            </ul>
          )
        )}
      </div>
    </div>
  );
};
export default LinkList;
