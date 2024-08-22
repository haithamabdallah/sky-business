const ProductList = ({ products }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[50px] font-futura">
      {products.map(({ id, name, image, text }) => (
        <li
          key={id}
          className="cursor-pointer relative mb-10 w-full grid grid-rows-5"
        >
          <img
            src={`${url}/${image}`}
            alt={name}
            className="row-span-4 w-full h-full aspect-square"          />
          <h2 className="leading-[0.9] text-center mt-10 uppercase font-bold">
            {name}
          </h2>
          <div className="absolute top-0 left-0 w-full h-full">
            <div
              className="bg-black w-full h-full text-white
          flex flex-col opacity-0 px-[25px] py-[15px] justify-center transition-opacity duration-700
          hover:opacity-100"
            >
              <h2 className="text-3xl mb-[5px] leading-none [letter-spacing:0] uppercase font-bold">
                {name}
              </h2>
              <p className="text-base leading-[1.29] pt-[10px] font-sans font-thin">
                {text}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
