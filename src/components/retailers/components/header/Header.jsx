import parse from "html-react-parser";
import { Context } from "../../../../ContextProvider";
import { useContext } from "react";

const header = () => {
  const { state } = useContext(Context);
  return (
    state.retailerData.settings && (
      <div className="text-center my-[3rem] ">
        <h1 className="text-[1.5rem] lg:text-[3.3rem] my-5 font-[700] px-[4vw]">
          {state.retailerData.settings.header}
        </h1>
        <div className="text-[1.1rem] px-[2vw] max-w-[1000px] mx-auto">
          {parse(`${state.retailerData.settings.text}`)}
        </div>
      </div>
    )
  );
};

export default header;
