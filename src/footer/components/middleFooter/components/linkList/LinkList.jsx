import { Link, NavLink } from "react-router-dom";
import { data } from "./data";

const LinkList = () => {
  return (
    <div className="lg:px-[1rem] lg:w-[66.66667%] w-auto ">
      <div className=" flex flex-wrap max-w-full justify-items-center">
        {data.map(({ id, h2, ul }) => (
          <ul
            key={id}
            className={`lg:mt-9 lg:w-[50%] mt-5 w-full px-[0.9375rem] font-futura`}
          >
            <li>
              <h2
                className="font-semibold lg:text-[1.3rem] lg:leading-[3rem] text-[1.3rem]
                  leading-[3rem] mb-2"
              >
                {h2}
              </h2>
            </li>
            <li>
              <ul className="list-none m-0 lg:mt-[5px]">
                {ul.map(({ name, route } , index) => (
                  <li key={index}>
                    <NavLink
                      to={route}
                      className="inline-block text-black font-normal text-[0.9rem]
                              leading-[3rem] font-futura py-[0.3125rem] lg:py-0
                              lg:font-normal lg:text-[0.9rem] lg:leading-[3rem] hover:opacity-80"
                    >
                      {name.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default LinkList;
