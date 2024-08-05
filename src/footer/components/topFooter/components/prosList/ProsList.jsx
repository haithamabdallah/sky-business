import { list } from "./data";

const ProsList = () => {
  return (
    <ul className="md:mx-[-15px] mx-[10px] font-futura grid lg:grid-cols-5 py-2
    border-t border-t-[#0349ad] border-b border-b-[#0349ad]">
      {list.map(({ id, src, content }) => (
        <li
          key={id}
          className="md:px-[15px] px-[10px] flex flex-col items-center"
        >
            <img
              className="lg:max-w-[5.125rem] lg:max-h-[3.125rem] mr-[0.625rem]
              max-h-[1.6875rem] max-w-[1.6875rem] align-middle inline-block"
              src={src}
              alt="FREE SAMPLES"
            />
            <span
              className="w-fit lg:text-[0.875rem] lg:leading-[1.25rem] inline-block font-semibold
              text-[0.75rem] leading-[1rem] align-middle text-left mt-2 text-[#0349ad]"
            >
              {content}
            </span>
        </li>
      ))}
    </ul>
  );
};

export default ProsList;
