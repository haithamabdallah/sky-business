const FilterSearch = () => {
  return (
    <div className="min-[992px]:p-0 min-[992px]:gap-4 flex items-center gap-16 px-6 pb-4">
      <div
        className="min-[992px]:max-w-[240px] max-w-none w-full border-[1.5px] border-black
      h-10 flex flex-row-reverse rounded-[30px]"
      >
        <label
          className="w-[10%] ml-[10px] mr-[20px] flex items-center 
          before:bg-[url(./navbar/desktopNavbar/search/search.svg)] before:bg-no-repeat
          before:w-6 before:h-[25px] before:inline-block"
        ></label>
        <input
          type="text"
          autocomplete="off"
          className="border-none inline-block w-[90%] h-full leading-[unset] pl-4 outline-none"
          placeholder="Search brands"
        />
      </div>
      <button
        className="min-[992px]:hidden bg-[black] text-[0px] rounded-[50$] border-none
        w-10 h-10 flex-shrink-0 items-center justify-center flex [transition:_transform_1s]
        [transform:_rotate(0)]
        before:w-[18px] before:h-14px
        before:bg-[url(./components/brands/filterBrands/components/filterSearch/assets/icons/brand-filter.svg)]
        before:inline-block;"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterSearch;
