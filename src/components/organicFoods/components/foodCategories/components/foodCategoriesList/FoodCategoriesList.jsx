import { foodCategories } from "./data";

const FoodCategoriesList = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 font-futura">
      {foodCategories.map(({ id, name, src, description }) => (
        <li key={id} className="relative px-[25px] mb-10">
          <img src={src} alt={name} className="w-full" />
          <h2
            className="absolute text-3xl leading-[0.9] bottom-0 pr-[10px] pl-[20px] pb-[21px]
          text-white h-[55px] uppercase font-bold"
          >
            {name}
          </h2>
          <div className="absolute top-0 left-0 w-full h-full px-[25px]">
            <div
              className="bg-black w-full h-full text-white
            flex flex-col opacity-0 px-[25px] py-[15px] justify-center transition-opacity duration-700
            hover:opacity-100"
            >
              <h2 className="text-3xl mb-[5px] leading-none [letter-spacing:0] uppercase font-bold">
                {name}
              </h2>
              <p className="text-base leading-[1.29] pt-[10px] font-sans font-thin">
                {description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FoodCategoriesList;
