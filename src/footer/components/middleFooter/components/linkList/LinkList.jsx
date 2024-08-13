import { Link, NavLink, useLocation } from "react-router-dom";
import { data } from "./data";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../ContextProvider";
import { getSocialList } from "../contactUs/components/socials/components/socialList/data";
import Logout from "../../../../../logout/Logout";

const LinkList = () => {
  const { value } = useContext(Context);
  const socialData = getSocialList(value.settings);
  const token = localStorage.getItem("token");

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
                  {ul.map(({ name, route, src }, index) => {
                    if (token && ["/register", "/login"].includes(route))
                      return;
                    return src ? (
                      <li
                        key={index}
                        className={"flex justify-center items-center"}
                      >
                        <Link
                          className="rounded-full border border-black p-2 scale-[1.2] mx-1"
                          target="_blank"
                          to={`${route}`}
                        >
                          <img src={`${src}`} alt={name} />
                        </Link>
                      </li>
                    ) : (
                      <li key={index}>
                        <Link
                          to={route}
                          className={`inline-block text-black text-[0.8rem]
                              leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                              lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600]`}
                        >
                          <span className="flex flex-row gap-2 place-items-center">
                            {name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                  {h2 == "COMPANY" && token && <Logout type="footer" />}
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
