const PurchaseOption = () => {
  return (
    <section className="mb-5 font-futura lg:px-0 px-[15px]">
      <div className="md:mx-[-15px] mx-[10px] flex flex-wrap items-baseline justify-start">
        <div
          className="lg:flex-[0_0_auto] lg:max-w-full lg:w-auto md:px-[15px]
          px-[10px] flex-[0_0_auto] min-h-0 min-w-0 w-full"
        >
          <h2
            className="font-semibold uppercase lg:text-[1.625rem] text-[1.25rem]
            mb-2 leading-[1.4] text-left"
          >
            Purchase option
          </h2>
        </div>
        <div
          className="lg:flex-[1_1_0px] lg:w-auto md:px-[15px] px-[10px] flex-[0_0_auto]
          min-h-0 min-w-0 w-full"
        >
          <div className="relative">
            <button
              className="bg-white border-gray-700 rounded-[1.5625rem] text-gray-700 uppercase
              items-center appearance-none border cursor-pointer direction-ltr flex flex-grow
              text-[.75rem] font-light leading-[1.25rem] font-futuraBook h-[3.125rem] m-0
              outline-none overflow-hidden px-[1.875rem] py-0 pl-[0.625rem] relative text-left
              truncate [transition:_box-shadow_.2s,_border-color_.2s_ease-in-out] select-none
              whitespace-nowrap w-full hover:border-black hover:border-2
              after:[mask:url('./footer/components/middleFooter/components/contactUs/components/purchaseOption/assets/chevron-down.svg')_no-repeat_left/100%]
              after:h-[0.625rem] after:w-[0.625rem] after:pointer-events-none after:absolute
              after:right-5 after:top-[50%] after:[transform:_translateY(-50%)] after:z-10 after:bg-[#404040]"
            >
              C$ - CA (EN)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseOption;
