import CategoryBrands from "./categoryBrands/CategoryBrands";

const BrandCategories = ( { categories } ) => {
  return (
    <ul className="w-full flex flex-col font-futura">
      { categories.map(( category ) => (
        <li  key={category.id} className="w-full mb-20">
          <p className="text-3xl pb-2 mb-8 font-extrabold text-left">{category.name}</p>
          <CategoryBrands brands={category.brands} />
        </li>
      ))}
    </ul>
  );
};

export default BrandCategories;
