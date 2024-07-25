import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <li className="ml-3 pl-3">
        <button
          className="flex items-center pr-[1.875rem]"
          type="button"
          onClick={() => setShow(true)}
        >
          <span className="before:[content:'('] after:[content:')'] text-[10px]">
            0
          </span>
          <span
            className="inline-block h-[1.21875rem] bg-black w-[1.125rem] mt-[-.1875rem] ml-[.625rem]
            order-3 [mask:url(./navbar/desktopNavbar/sideList/basket.svg)_no-repeat_center/contain]"
          ></span>
        </button>
      </li>
      {show && (
        <section className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-65">
          <section
            className="bg-[#f1f2f2] h-full absolute top-0 right-auto left-0 flex flex-col
     w-[28.125rem] lg:right-0 lg:left-auto"
          >
            <div className="py-[1.25rem] pr-[3.125rem] pl-[1.25rem] border-b border-[#d8d8d8] relative">
              <button
                className="flex items-center pr-[1.875rem] font-semibold"
                type="button"
              >
                <span
                  className="inline-block h-[1.21875rem] bg-black w-[1.125rem] mt-[-.1875rem] ml-[.625rem]
            [mask:url(./navbar/desktopNavbar/sideList/basket.svg)_no-repeat_center/contain] self-start"
                ></span>
                <span className="before:[content:'('] after:[content:')']">
                  0
                </span>
              </button>
              <button
                className="before:bg-[url(./navbar/desktopNavbar/sideList/cart/close.svg)]
              before:h-[1.25rem] before:w-[1.25rem] before:bg-no-repeat before:bg-[0]
              before:[background-size:100%] before:block right-[1.25rem] top-[1.25rem] cursor-pointer
             absolute z-30"
                onClick={() => setShow(false)}
              ></button>
            </div>
            <div className="bg-[#f1f2f2] py-[2.1875rem] px-[3.125rem] flex items-center flex-col flex-auto">
              <h2 className="text-[1.5rem] leading-6 mb-[0.9375rem] text-center">
                YOUR CART
                <br />
                IS EMPTY
              </h2>
              <Link
                to="#"
                className="underline text-[0.875rem] leading-[inherit]"
              >
                Discover our newest innovations
              </Link>
            </div>
            <div
              className="bg-[#f1f2f2] [box-shadow:_.125rem_-.125rem_.375rem_0_rgba(0,_0,_0,_.1)]
               px-[1.875rem] pb-[.625rem]"
            >
              <div className="pt-[1.5625rem] pb-4">
                <div class="flex items-center py[.375rem]">
                  <div class="flex-[1_0_auto] font-semibold text-[0.875rem] leading-[1.25rem]">
                    SUBTOTAL
                  </div>
                  <div class="flex-[0_0_6.25rem] font-semibold text-[0.875rem] text-right">
                    $ 0.00
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-wrap mx-[-.625rem]">
                <div
                  className="basis-full mx-[0.625rem] mb-[1.25rem] flex items-start
              flex-[1_1_100%] flex-wrap"
                >
                  <Link
                    to="#"
                    className="w-full text-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] px-[.75rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black"
                  >
                    GO TO MY CART
                  </Link>
                </div>
                <div
                  className="basis-full mx-[0.625rem] mb-[1.25rem] flex items-start
              flex-[1_1_100%] flex-wrap"
                >
                  <button
                    className="w-full text-center appearance-none bg-[#fff]
                  border border-[#d1d1d1] rounded-[1.5625rem] text-[#000] cursor-pointer
                  block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] px-[.75rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:border-black"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Cart;
