import { Link, NavLink, useLocation } from "react-router-dom";
import { data } from "./data";
import { getSocialList } from "../contactUs/components/socials/components/socialList/data";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../ContextProvider";
// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";
import Links from "./components/links/Links";
import ContactUs from "../contactUs/ContactUs";

const MiddleFooterMobile = () => {
  useEffect(() => {
    initTWE({ Collapse });
  });
  const location = useLocation();
  const { value } = useContext(Context);
  const socialData = getSocialList(value.settings);

  return (
    <div className="m-5 font-futura">
      <div id="accordionExample">
        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="headingOne">
            <button
              className="group relative flex w-full items-center rounded-t-lg border-0 
              bg-black px-5 py-4 text-left text-xs text-white transition
              [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              FOLLOW US
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="scale-50"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="headingOne"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <Links data={{ id: 3, h2: "FOLLOW US", ul: socialData }} />
            </div>
          </div>
        </div>
        <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="headingThree">
            <button
              className="group relative flex w-full items-center border-0 bg-black px-5 py-4
              text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2]
              focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white
              [&:not([data-twe-collapse-collapsed])]:bg-black
              [&:not([data-twe-collapse-collapsed])]:text-primary
              [&:not([data-twe-collapse-collapsed])]:shadow-border-b
              dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark
              dark:[&:not([data-twe-collapse-collapsed])]:text-primary
              dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              COMPANY
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingThree"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <Links data={data.filter((item) => item.h2 == "COMPANY")[0]} />
            </div>
          </div>
        </div>
        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="headingTwo">
            <button
              className="group relative flex w-full items-center rounded-t-lg border-0 bg-black px-5 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              POLICIES
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingTwo"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <Links data={data.filter((item) => item.h2 == "POLICIES")[0]} />
            </div>
          </div>
        </div>

        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="accordion-header mb-0" id="headingFour">
            <button
              className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-black px-5 py-4 text-left text-xs text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-black [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              data-twe-collapse-init
              data-twe-collapse-collapsed
              data-twe-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              CONTACT US
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="scale-50"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="headingFour"
            data-twe-parent="#accordionExample"
          >
            <div className="px-5 py-4">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiddleFooterMobile;
