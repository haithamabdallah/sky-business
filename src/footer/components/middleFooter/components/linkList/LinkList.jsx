import { Link, NavLink } from "react-router-dom";
import { data } from "./data";

const LinkList = () => {
  return (
    <div className="lg:w-[66.66667%] p-0">
      <div className=" flex flex-wrap max-w-full justify-items-center">
        {data.map(({ id, h2, ul }) => (
          <ul
            key={id}
            className={`lg:mt-9 lg:w-[50%] mt-5 w-full font-futura`}
          >
            <li>
              <h2
                className="font-semibold lg:text-[.85rem] lg:leading-[3rem] text-[.85rem]
                  leading-[3rem] mb-2"
              >
                {h2}
              </h2>
            </li>
            <li>
              <ul className="list-none m-0 lg:mt-[5px]">
                {ul.map(({ name, route } , index) => (
                  <li key={index}>
                    <Link
                      to={route}
                      className="inline-block text-black text-[0.8rem]
                              leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                              lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 font-[100]"
                    >
                      {name}
                    </Link>
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
