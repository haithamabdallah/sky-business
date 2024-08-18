const CategoryBrands = ({ brands }) => {
  const url = import.meta.env.VITE_STORAGE_URL;

  return (
    <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
      {brands.map((brand) => (
        <li className="flex flex-col" key={brand.id}>
          <div
            className="peer cursor-pointer rounded-full transition-transform duration-500
            scale-100 hover:scale-125 p-8 border border-black border-opacity-50 pee"
          >
            <img
              alt={`brand ${brand.id}`}
              src={`${url}/${brand.image}`}
              className="object-contain object-center aspect-square"
            />
          </div>
          <p
            className="text-center transition-[margin] duration-500 mt-5
          peer-hover:mt-10"
          >
            {brand.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBrands;
