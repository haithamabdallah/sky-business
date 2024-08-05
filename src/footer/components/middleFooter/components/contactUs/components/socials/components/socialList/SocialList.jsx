import { Link } from "react-router-dom";
import { data } from "./data";

const SocialList = () => {
  return (
    <ul
      className="lg:mb-[2.1875rem] my-3 flex items-center flex-nowrap
      justify-between leading-none list-none m-0 p-0 text-left"
    >
      { data.map( ( { name , src } , index ) => (
        <li key={index} className={"border border-[#000] rounded-xl p-2 "+`${ name == 'facebook' ? 'scale-[0.85]' : '' }`} >
          <Link target="_blank" to="#">
            <img src={`${src}`} alt={ name }  width={"15px"} height={"15px"}/>
          </Link>
        </li>
      ) ) }

      
      {/* <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/facebook.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li> */}

      {/* <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/twitter.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li>

      <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/insta.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li>


      <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/linkedin.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li> */}
    </ul>
  );
};

export default SocialList;
