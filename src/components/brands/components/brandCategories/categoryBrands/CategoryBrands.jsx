const CategoryBrands = ({ brands }) => {
  return (
    <ul className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
      {brands.map(({ id, description, src }) => (
        <li className="flex flex-col" key={id}>
          <img
            alt={id}
            src={src}
            className="rounded-full transition-transform duration-500 scale-100 hover:scale-125
            object-contain"
          />
          <p className="text-center pt-10">{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryBrands;
