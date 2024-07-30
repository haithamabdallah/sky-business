import { Link } from "react-router-dom";
import { data } from "./data";

const LinkList = () => {
  return (
    <div className="lg:px-[0.9375rem] lg:w-[66.66667%] w-auto">
      <div className="mx-[-0.9375rem] flex flex-wrap max-w-full">
        {data.map(({ id, h2, ul }) => (
          <ul
            key={id}
            className={`lg:mt-9 lg:w-[25%] mt-5 w-full px-[0.9375rem] font-futura
              ${id < 3 ? "hidden lg:block" : ""}`}
          >
            <li>
              <h2
                className="font-semibold lg:text-[0.75rem] lg:leading-[1rem] text-[1rem]
                  leading-[1.25rem] mb-2"
              >
                {h2}
              </h2>
            </li>
            <li>
              <ul className="list-none m-0 lg:mt-[5px]">
                {ul.map(({ id, content, to }) => (
                  <li key={id}>
                    <Link
                      to={to}
                      className="inline-block text-black font-normal text-[0.75rem]
                              leading-[1rem] font-futura py-[0.3125rem] no-underline lg:py-0
                              lg:font-normal lg:text-[0.75rem] lg:leading-[1rem] hover:underline"
                    >
                      {content}
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
