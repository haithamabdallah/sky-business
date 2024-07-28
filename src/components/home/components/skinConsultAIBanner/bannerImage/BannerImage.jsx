import image1024 from "./1024.webp";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
const BannerImage = () => {
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
            <picture>
              <source
                sizes="100vw"
                media="(min-width:1024px)"
                width="1500"
                height="742"
                data-aspectratio="2.0215633423180592"
                srcSet={image1024}
              />
              <source
                sizes="100vw"
                media="(min-width:768px)"
                width="1500"
                height="1307"
                data-aspectratio="1.1476664116296864"
                srcSet={image768}
              />
              <source
                sizes="100vw"
                media="(min-width:0)"
                width="800"
                height="697"
                data-aspectratio="1.1477761836441893"
                srcSet={imageRest}
              />
              <img
                alt="SKIN CONSULT AI"
                src={imageDefault}
                className="inline-block align-middle"
                width="800"
                height="697"
              />
            </picture>
          </div>
        </div>
      </div>
  )
}

export default BannerImage