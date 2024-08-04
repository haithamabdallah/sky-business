import image1024 from "./1024.webp";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
const BannerImage = ({ image }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <div
      className="lg:mx-[-1.4375rem] lg:mt-[0.625rem] md:mx-[15px] mt-[0.625rem]
      flex flex-wrap justify-center items-center text-center"
    >
      <div
        className="lg:w-full lg:px-[1.4375rem] md:p-[15px] w-full py-[10px]
        flex-[0_0_auto] min-h-0 min-w-0 flex"
      >
        <div className="block relative">
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
