const Test = () => {
  return (
    <div
      class="c-tooltip m-active"
      id="k_v7og3e78nt"
      style="position: absolute; inset: 72px auto auto 896px; margin: 0px;"
      data-popper-placement="bottom"
    >
      <div class="c-tooltip__content">
        <div class="c-tooltip__body">
          {" "}
          <div class="l-layout-dividers">
            <div class="l-layout-dividers__section m-x-left">
              <div class="c-may-we-help">
                <div class="c-may-we-help__title">A QUESTION?</div>
                <ul class="c-may-we-help__list">
                  <li class="c-may-we-help__item">
                    <a
                      href="https://www.vichy.ca/en_CA/customer-service-faqs.html"
                      class="c-may-we-help__link"
                    >
                      FAQs
                    </a>
                  </li>
                  <li class="c-may-we-help__item">
                    <a
                      href="https://www.vichy.ca/en_CA/customer-service-my-orders.html"
                      class="c-may-we-help__link"
                    >
                      Check Order Status
                    </a>
                  </li>
                  <li class="c-may-we-help__item">
                    <a
                      href="https://www.vichy.ca/en_CA/customer-service-shipping-and-returns.html"
                      class="c-may-we-help__link"
                    >
                      Shipping &amp; Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="l-layout-dividers__section m-x-center">
              <div class="c-may-we-help">
                <div class="c-may-we-help__title">Contact us</div>
                <ul class="c-may-we-help__list">
                  <li class="c-may-we-help__item">
                    <img
                      class="c-may-we-help__item-icon"
                      alt=""
                      src="https://www.vichy.ca/on/demandware.static/-/Sites-vichy-ca-Library/default/dwdb62b606/images/header-banners/mail-new.svg"
                      width="20"
                    />{" "}
                    <a
                      href="https://www.vichy.ca/en_CA/customer-service-contact-us.html"
                      class="c-may-we-help__link"
                    >
                      Email Us
                    </a>
                  </li>
                  <li class="c-may-we-help__item">
                    <img
                      class="c-may-we-help__item-icon"
                      alt=""
                      src="https://www.vichy.ca/on/demandware.static/-/Sites-vichy-ca-Library/default/dwa561783b/images/chat.png"
                      width="20"
                      style="margin-top: 5px;"
                    />
                    <div
                      data-component="integration/KineticChatNGL"
                      data-component-options='{"url":"https://kcs-chat.kineticcommerce.io/vichy/loader/kc-chat-loader.js","bundleId":"kineticchatngl"}'
                      data-component-force=""
                      data-component-id="f_rrj4i5jiw9p"
                    >
                      {" "}
                      <button class="c-may-we-help__link h-text-align-left">
                        Chat with us
                      </button>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
        <button class="c-tooltip__close h-hidden">
          <span aria-hidden="true">X</span>
          <span class="h-show-for-sr">Close</span>
        </button>
      </div>
    </div>
  );
};
