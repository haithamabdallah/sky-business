import { Link, NavLink, useLocation } from "react-router-dom";
import { data } from "./data";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../ContextProvider";
import { getSocialList } from "../contactUs/components/socials/components/socialList/data";

const LinkList = () => {
  const location = useLocation();
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
                  className={`list-none m-0 lg:mt-[5px] ${ul[0].src ? "flex gap-x-2" : ""
                    }`}
                >
                  {ul.map(({ name, route, src }, index) => { 
                    if (token && ["/register", "/login"].includes(route)) return;
                    return (src ? (
                      <li
                        key={index}
                        className={"flex justify-center items-center"}
                      >
                        <Link
                          className="rounded-full border border-black p-2 scale-110"
                          target="_blank"
                          to={`${route}`}
                        >
                          <img src={`${src}`} alt={name} />
                        </Link>
                      </li>
                    ) : (
                      <>
                      <li key={index}>
                        <Link
                          to={route}
                          className={`inline-block text-black text-[0.8rem]
                              leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                              lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600] ${location.pathname === route &&
                            "opacity-80 font-[600] underline"
                            }`}
                        >
                          <span className="flex flex-row gap-2 place-items-center">
                            {["/register", "/login"].includes(route) && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="12"
                                width="10"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="#000000"
                                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                />
                              </svg>
                            )}{" "}
                            {name}
                          </span>
                        </Link>
                      </li>
                      { 
                        ( h2 == 'COMPANY' && index == ul.length - 1 && token ) && 
                        <li key={ index + 1 }>
                          <button
                            className={`inline-block text-black text-[0.8rem]
                                leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                                lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600]`}
                          >
                            <span className="flex flex-row gap-2 place-items-center">
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="12"
                                  width="10"
                                  viewBox="0 0 448 512"
                                >
                                  <path
                                    fill="#000000"
                                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                                  />
                                </svg> */}
                              {" "}
                              {"Logout"}
                            </span>
                          </button>
                        </li>
                      }
                    </>
                    ) )
                  }
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
