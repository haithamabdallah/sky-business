import { useState } from "react";
import image1024 from "./1024.jpg";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
import NewsletterSubscription from "./newsletterSubscription/NewsletterSubscription";

const Mail = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <li className="ml-3 pl-3 cursor-pointer" onClick={() => setShow(true)}>
        <span
          className="block leading-[1] text-center before:bg-black before:inline-block
          before:h-[1.125rem] before:w-[1.125rem]
          before:[mask:url(./navbar/desktopNavbar/sideList/gmail.svg)_no-repeat_center/contain]"
        ></span>
      </li>
      {show && (
        <section
          className="flex items-center justify-center fixed left-0 top-0 z-50
        h-[calc(1vh*100)] w-full animate-fadeIn bg-black bg-opacity-65"
        >
          <div
            className="lg:flex-[1_1_100%] lg:max-w-[60.625rem] lg:p-0 lg:w-auto md:h-auto
            md:max-h-[calc(1vh*100)] md:pt-[3.125rem] md:px-[0.9375rem] md:pb-[1.5625rem]
            md:w-[45.5rem] h-[calc(1vh*100)] w-screen bg-white max-w-[100vw]
            overflow-[hidden_auto] [overscroll-behavior:contain] pt-[3.125rem] px-[0.9375rem]
            pb-[1.5625rem] [pointer-events:all] relative"
          >
            <button
              type="button"
              className="before:bg-[url(./navbar/desktopNavbar/sideList/mail/close.svg)]
              before:h-[1.25rem] before:w-[1.25rem] before:bg-no-repeat before:bg-[0]
              before:[background-size:100%] before:block right-[1.25rem] top-[1.25rem] cursor-pointer
             absolute z-30"
             onClick={() => setShow(false)}
            ></button>
            <div
              className="lg:flex-row lg:p-0 lg:relative flex flex-col pt-[3.125rem] px-4
            pb-[1.5625rem] font-[.75rem/1.5_Futura_PT_Medium,sans-serif]"
            >
              <div
                className="lg:self-auto lg:overflow-hidden lg:relative lg:w-[25rem] self-center
              flex-shrink-0"
              >
                <picture>
                  <source
                    sizes="470px"
                    media="(min-width:1024px)"
                    width="470"
                    height="622"
                    data-aspectratio="0.7556270096463023"
                    srcSet={image1024}
                  />
                  <source
                    sizes="576px"
                    media="(min-width:768px)"
                    width="576"
                    height="480"
                    data-aspectratio="1.2"
                    srcSet={image768}
                  />
                  <source
                    sizes="375px"
                    media="(min-width:0)"
                    width="375"
                    height="375"
                    data-aspectratio="1"
                    srcSet={imageRest}
                  />
                  <img
                    className="lg:absolute lg:left-[50%] lg:top-[50%] lg:max-w-[none] lg:min-h-full
                  lg:min-w-full lg:[transform:translate(-50%,-50%)] lg:w-auto"
                    alt="Newslette Subscribe"
                    src={imageDefault}
                    width="375"
                    height="375"
                  />
                </picture>
              </div>
              <div
                className="lg:basis-0 lg:py-[3.125rem] lg:px-[4.375rem] lg:w-[35.625rem]
              flex-grow py-[1.5625rem] px-0 text-left"
              >
                <h2
                  className="lg:[font:400_2.125rem/1.75rem_Futura_PT_Medium,sans-serif] 
                lg:mb-[0.625rem] lg:text-left text-[#000]
                [font:400_1.5rem/1.5rem_Futura_PT_Medium,sans-serif]"
                >
                  SIGN UP FOR EMAIL
                </h2>
                <p
                  className="text-[#626566] text-[0.875rem] font-normal leading-[1.6]
                mb-[1.5625rem]"
                >
                  Join the Vichy Laboratoires mailing list for early access to
                  our exclusive offers and newest skincare innovations.
                </p>
                <h3
                  className="[font:600_.875rem/1.25rem_Futura_PT_Medium,sans-serif] text-[#000]
                mb-2 [text-transform:none]"
                >
                  YOUR BENEFITS
                </h3>
                <ul className="ml-[1.25rem] list-disc">
                  <li>
                    Get a <b>4-piece welcome-gift</b> on your first order of $60
                    or more
                  </li>
                  <li>Get deals exclusive to members only</li>
                  <li>
                    Be the first to know about our new launches and get access
                    to advice from our experts!
                  </li>
                </ul>
                <p>*Offer only available for first-time subscribers.</p>
                <NewsletterSubscription />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Mail;
