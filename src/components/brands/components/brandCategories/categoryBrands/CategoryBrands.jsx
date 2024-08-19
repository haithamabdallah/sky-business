const CategoryBrands = ({ brands }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
      {brands.map((brand) => (
        <li className="flex flex-col gap-x-2" key={brand.id}>
          <img
            alt={`brand ${brand.id}`}
            src={`${url}/${brand.image}`}
            className="peer cursor-pointer rounded-full transition-transform duration-500 scale-100
            hover:scale-125 object-contain object-center aspect-square"
          />
          <p className="text-center transition-[margin] duration-500 mt-5 peer-hover:mt-10">
            {brand.name}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default CategoryBrands;
