import CategoryBrands from "./categoryBrands/CategoryBrands";
import { categories } from "./data";

const BrandCategories = () => {
  return (
    <ul className="w-full flex flex-col font-futura">
      {categories.map(({ id, name, brands }) => (
        <li  key={id} className="w-full mb-20">
          <p className="text-3xl pb-2 mb-8 font-extrabold text-left">{name}</p>
          <CategoryBrands brands={brands} />
        </li>
      ))}
    </ul>
  );
};

export default BrandCategories;
