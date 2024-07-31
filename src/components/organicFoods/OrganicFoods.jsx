import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";

const OrganicFoods = () => (
  <>
    <PageCover
      title=""
      subtitle=""
      backgroundImage="https://images.unsplash.com/photo-1676313779351-9648c6eaae8a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
      <FoodCategories />
      <OurFoodServices />
    </div>
  </>
);

export default OrganicFoods;
