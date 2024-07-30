import FilterSearch from "./components/filterSearch/FilterSearch";

const FilterBrands = () => {
  return (
    <div
      className="min-[450px]:max-w-[450px] min-[992px]:w-[300px] max-w-none w-full min-[992px]:sticky
      min-[992px]:mr-[70px] min-[992px]:top-20 min-[992px]:h-[calc(100vh-120px)] min-[992px]:mb-0
      min-[992px]:ml-0 mx-auto mb-20px"
    >
      <aside className="min-[992px]:px-6 min-[992px]:mt-0 border-none text-center mt-12">
        <p className="min-[992px]:px-0 text-[1rem] leading-[1.2] font-extrabold uppercase px-6 mb-4">
          Filter
        </p>
        <FilterSearch />
      </aside>
    </div>
  );
};

export default FilterBrands;
