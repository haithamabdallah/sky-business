import { Link } from "react-router-dom";
import { useContext } from "react";
import { getSocialList } from "./data";
import { Context } from "../../../../../../../../../ContextProvider";

const SocialList = () => {
  const { value } = useContext(Context);
  const data = getSocialList(value.settings);
  return (
    <ul
      className="lg:mb-[2.1875rem] my-3 flex items-center flex-nowrap
      justify-around leading-none list-none m-0 p-0 text-left"
    >
      {data.map(({ name, src, to }, index) => (
        <li
          key={index}
          className={
            "border border-[#000] rounded-xl p-2 " +
            `${name == "facebook" ? "scale-[0.85]" : ""}`
          }
        >
          <Link target="_blank" to={`${to}`}>
            <img src={`${src}`} alt={name} width={"15px"} height={"15px"} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
