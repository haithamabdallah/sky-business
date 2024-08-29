import { useContext } from "react";
import { Context } from "../../../../../../ContextProvider";

const FoodCategoriesList = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  const organics = state.healthCareData.organics;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] font-futura">
      {organics.map(({ id, name, image, text }) => (
        <li
          key={id}
          className="group cursor-pointer relative mb-10 
        before:bg-gradient-to-t before:from-black before:to-[rgba(0,0,0,0.1)] before:w-full
        before:h-full before:block before:absolute before:inset-[5%]
        before:top-0 before:left-0 before:transition-colors before:duration-500
        before:bg-black before:bg-opacity-0 hover:before:bg-opacity-100"
        >
          <img
            src={`${url}/${image}`}
            alt={name}
            className="w-full h-full aspect-square"
          />
          <div
            className="transition-[top,transform] duration-500 delay-200
            pr-[10px] pl-[20px] absolute top-[80%]
          group-hover:top-[50%] group-hover:translate-y-[-50%]"
          >
            <h2
              className="text-3xl leading-[0.9]
          text-white uppercase font-bold"
            >
              {name}
            </h2>
            <p
              className="text-base opacity-0 group-hover:opacity-100 text-white
            leading-[1.29] pt-[10px] font-sans font-thin
            transition-opacity duration-500 delay-200"
            >
              {text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FoodCategoriesList;
