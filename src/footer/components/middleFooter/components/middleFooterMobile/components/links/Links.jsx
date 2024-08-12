import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "../../../../../../../logout/Logout";

const Links = ({ data }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return (
    <div className="">
      {[data].map(({ id, h2, ul }) => (
        <ul key={id} className={`lg:mt-9 lg:w-1/3 w-full font-futura`}>
          <li>
            <ul
              className={`list-none m-0 lg:mt-[5px] ${
                ul[0].src ? "flex gap-x-2" : ""
              }`}
            >
              {ul.map(({ name, route, src }, index) => {
                if (token && ["/register", "/login"].includes(route)) return;
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
                                    lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600] ${
                                      location.pathname === route &&
                                      "opacity-80 font-[600] underline"
                                    }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {h2 == "COMPANY" && token && <Logout type="footer" />}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Links;
