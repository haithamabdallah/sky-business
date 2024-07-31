import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";

const OrganicFoods = () => (
  <>
    <PageCover
      title=""
      subtitle=""
      backgroundImage="https://images.unsplash.com/photo-1676313779351-9648c6eaae8a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <section className="flex flex-col items-center max-w-[75rem] mx-auto mt-[154px] font-futura">
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
      <FoodCategories />
    </section>
  </>
);

export default OrganicFoods;
