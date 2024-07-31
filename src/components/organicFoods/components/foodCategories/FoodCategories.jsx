import FoodCategoriesList from "./components/foodCategoriesList/FoodCategoriesList";

const FoodCategories = () => {
  return (
    <section className="flex flex-col items-center">
      <h2
        className="text-center text-5xl mb-[30px] font-bold leading-[48px]
    uppercase [letter-spacing:_0]"
      >
        Products That Your Customers Want
      </h2>
      <p
        className="text-[18px] leading-[26px] text-[#393839] text-center mb-[72px]
    [letter-spacing:_1.8px] [word-wrap:_break-word] font-sans font-thin"
      >
        MDI offers over 40,000 items across ambient, refrigerated, and frozen
        climate zones, with deep assortments in all product categories.
      </p>
      <FoodCategoriesList />
    </section>
  );
};

export default FoodCategories;
