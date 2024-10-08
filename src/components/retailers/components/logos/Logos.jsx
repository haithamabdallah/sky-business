import { useContext } from "react";
import { Context } from "../../../../ContextProvider";

const Logos = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  return (
    state.retailerData.retailers && (
      <div className="text-center my-[3rem] bg-red grid place-items-center grid-cols-2 gap-[3rem] sm:grid-cols-4 sm:gap-[2.3rem] lg:grid-cols-6 min-[2000px]:grid-cols-4 lg:gap-[2rem]">
        {state.retailerData.retailers.map((logo, i) => (
          <div
            className="gap-2 bg-white shadow-xl rounded-2xl w-[27vw] h-[27vw] sm:w-[15vw] sm:h-[15vw] md:w-[13vw] md:h-[13vw] lg:w-[10vw] lg:h-[10vw] 
          grid place-content-center hover:scale-[1.1] hover:p-1 transition-all cursor-pointer"
            key={i}
          >
            <img src={`${url}/${logo.image}`} alt="logo" />
          </div>
        ))}
      </div>
    )
  );
};

export default Logos;
