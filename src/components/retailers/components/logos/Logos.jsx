const Logos = ( { retailerData } ) => {
  const url = import.meta.env.VITE_STORAGE_URL;
    return (
      retailerData.retailers &&
      <div className="text-center my-[3rem] bg-red grid place-items-center grid-cols-3 gap-[3rem] sm:grid-cols-4 sm:gap-[2.3rem] lg:grid-cols-6 lg:gap-[2rem]">
        {retailerData.retailers.map((logo, i) => (
          <div className="bg-white shadow-2xl rounded-2xl w-[27vw] h-[27vw] sm:w-[15vw] sm:h-[15vw] md:w-[13vw] md:h-[13vw] lg:w-[10vw] lg:h-[10vw] grid place-content-center"  key={i}>
            <img src={`${url}/${logo.image}`} alt="logo" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Logos;