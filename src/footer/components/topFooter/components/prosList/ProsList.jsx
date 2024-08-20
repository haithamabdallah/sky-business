import { useContext } from "react";
import { Context } from "../../../../../ContextProvider";

const ProsList = () => {
  const { value } = useContext(Context);
  const list = value.settings.top_footer;
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <ul
      className="m-5 md:m-0 font-futura flex flex-wrap
       py-5 md:py-10 gap-y-5 justify-between gap-x-12"
    >
      {list.map(({ text, image }, index) => (
        <li key={index} className="flex flex-col items-center justify-center px-[10px]">
          <img
            className="w-[40px] md:w-[80px]"
            src={`${url}/${image}`}
            alt={text}
          />
          <span
            className="w-fit lg:text-[0.875rem] lg:leading-[1.25rem] inline-block font-semibold
              text-[0.75rem] leading-[1rem] align-middle text-left mt-2 text-white"
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProsList;
