import { list } from "./data";

const ProsList = () => {
  return (
    <ul
      className="font-futura flex flex-wrap justify-between
      py-2 border-b bg-[rgb(209_213_219_/1)] gap-y-2"
    >
      {list.map(({ id, src, content }) => (
        <li
          key={id}
          className="md:px-[15px] px-[10px] flex flex-col mx-auto items-center justify-center"
        >
          <img
            className="h-[50%] mix-blend-multiply"
            src={src}
            alt={content}
          />
          <span
            className="w-fit lg:text-[0.875rem] lg:leading-[1.25rem] inline-block font-semibold
              text-[0.75rem] leading-[1rem] align-middle text-left mt-2"
          >
            {content}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProsList;
