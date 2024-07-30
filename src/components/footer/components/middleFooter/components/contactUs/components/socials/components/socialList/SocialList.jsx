import { Link } from "react-router-dom";

const SocialList = () => {
  return (
    <ul
      className="lg:mb-[2.1875rem] lg:mt-0 lg:mr-0 lg:ml-0 flex items-center flex-nowrap
      justify-between leading-none list-none m-0 p-0 text-left"
    >
      <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./components/footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/insta.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li>

      <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./components/footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/facebook.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li>

      <li>
        <Link
          target="_blank"
          to="#"
          className={`lg:p-0 bg-none border-0 text-black inline-block p-[0.625rem]
                  before:bg-[url('./components/footer/components/middleFooter/components/contactUs/components/socials/components/socialList/assets/youtube.svg')]
                  before:bg-no-repeat before:bg-[length:100%]
                  before:h-[1.875rem] before:w-[1.875rem] before:bg-[0] before:block`}
        ></Link>
      </li>
    </ul>
  );
};

export default SocialList;
