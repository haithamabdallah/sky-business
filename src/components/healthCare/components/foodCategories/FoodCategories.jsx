import FoodCategoriesList from "./components/foodCategoriesList/FoodCategoriesList";
import parse from "html-react-parser";
const FoodCategories = ({ foodCategories }) => {
  return (
    <section className="flex flex-col items-center px-4">
      <h2
        className="text-center text-2xl min-[562px]:text-5xl mb-[30px] font-bold leading-[48px]
    uppercase [letter-spacing:_0]"
      >
        {foodCategories.header}
      </h2>
      <p
        className="[&_*]:min-[562px]:[font-size:18px_!important] [&_*]:[font-size:16px_!important]
        leading-[26px] text-[#393839] text-center mb-[72px]
        [letter-spacing:_1.8px] [word-wrap:_break-word] font-sans font-thin"
      >
        {parse(foodCategories.text)}
      </p>
      <FoodCategoriesList organics={foodCategories.organics} />
    </section>
  );
};

export default FoodCategories;
