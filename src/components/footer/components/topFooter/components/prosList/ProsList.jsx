import { list } from "./data";

const ProsList = () => {
  return (
    <ul className="md:mx-[-15px] mx-[10px] flex flex-wrap font-futura">
      {list.map(({ id, src, content, subContent }) => (
        <li
          key={id}
          className="lg:w-[25%] w-[50%] md:px-[15px] px-[10px] flex-[0_0_auto]
          min-h-0 min-w-0"
        >
          <div className="py-[0.625rem]">
            <img
              className="lg:max-w-[3.125rem] lg:max-h-[3.125rem] mr-[0.625rem]
              max-h-[1.6875rem] max-w-[1.6875rem] align-middle inline-block"
              src={src}
              alt="FREE SAMPLES"
            />
            <span
              className="lg:text-[0.875rem] lg:leading-[1.25rem] text-[#fff] inline-block
              text-[0.75rem] leading-[1rem] align-middle"
            >
              <br className="md:hidden" />
              {content}
              <br />
              <span
                className="lg:text-[0.875rem] lg:leading-[1.25rem] text-[#fff] inline-block
                text-[0.75rem] leading-[1rem] align-middle"
              >
                {subContent}
                <br className="md:hidden" />
              </span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProsList;
