import image1024 from "./1024.webp";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
const BannerImage = ({ image, isFull }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <div
      className={`lg:mt-[0.625rem] mt-[0.625rem]
      flex flex-wrap justify-center items-center text-center ${
        isFull == 1 ? "md:mx-0 lg:mx-0" : "md:mx-[15px] lg:mx-[-1.4375rem]"
      }`}
    >
      <div
        className={`lg:w-full w-full py-[10px]
        flex-[0_0_auto] min-h-0 min-w-0 flex ${
          isFull == 1 ? "lg:px-0" : "lg:px-[1.4375rem]"
        }`}
      >
        <div className="block relative w-full">
          <img
            alt="SKIN CONSULT AI"
            src={`${url}/${image}`}
            className="inline-block align-middle"
            width="100%"
            height="697"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
