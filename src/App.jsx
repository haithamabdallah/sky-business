import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/Register/register";
import ThankYou from "./components/Register/components/thankYou/ThankYou";
import Login from "./components/login/Login";
import About from "./components/about/About";
import SkinCare from "./components/skinCare/SkinCare";
import Blog from "./components/blog/Blog";
import Brands from "./components/brands/Brands";
import Retailers from "./components/retailers/Retailers";
import Contact from "./components/contact/Contact";
import HealthCare from "./components/healthCare/HealthCare";
import Footer from "./footer/Footer";
import Article from "./components/blog/components/blogCards/components/article/Article";
import sendRequest from "./methods/fetchData";
import logo from "./navbar/logo.jpeg";
import { Context } from "./ContextProvider";
import Makeup from "./components/makeup/Makeup";
import HairCare from "./components/hairCare/HairCare";
import Terms from "./components/staticPages/terms/Terms";
import Privacy from "./components/staticPages/privacy/Privacy";
import Returns from "./components/staticPages/returns/Returns";
import Cookies from "./cookies/Cookies";
import SearchResult from "./searchResult/SearchResult";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import Subscribed from "./components/subscribed/Subscribed";
import Unsubscribed from "./components/unsubscribed/Unsubscribed";
import Unsubscribe from "./components/unsubscribe/Unsubscribe";
import ConfirmSubscribe from "./components/confirmSubscribe/ConfirmSubscribe";
import ResetPassword from "./components/resetPassword/ResetPassword";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const App = () => {
  const { pathname } = useLocation();
  const isEmailPage = /(\/subscribed|\/unsubscribed|\/unsubscribe)/.test(
    pathname
  );

  const { setState, state } = useContext(Context);

  useEffect(() => {
    Promise.all([
      sendRequest({ method: "post", endpoint: "settings" }).then((res) => {
        if (res.status === "success") {
          setState((prev) => ({
            ...prev,
            homeData: res.data["home_page"],
            aboutData: res.data["about_page"],
            skinCareData: res.data["skin_page"],
            hairCareData: res.data["hair_page"],
            makeupData: res.data["makeup_page"],
            retailerData: res.data["retailer_page"],
            healthCareData: res.data["organic_page"],
            brandData: res.data["brand_page"],
            blogData: res.data["blog_page"],
            contactData: res.data["contact_page"],
            registerData: res.data["register_page"],
            staticPagesData: res.data["static-pages"],
            general: res.data["general"],
          }));
          localStorage.setItem(
            "icon",
            `${import.meta.env.VITE_STORAGE_URL}/${
              res.data.general.settings.icon
            }`
          );
          document.getElementById("app-icon").href = `${
            import.meta.env.VITE_STORAGE_URL
          }/${res.data.general.settings.icon}`;
        }
      }),
    ]).then(() => {
      setState((prev) => ({ ...prev, loading: false }));
      if (!localStorage.getItem("cookies_popup")) {
        setTimeout(() => {
          setState((prev) => ({ ...prev, showCookies: true }));
        }, 2000);
      }
    });
  }, []);

  return state.loading ? (
    <div
      className="min-w-[100vw] min-h-[100vh] absolute flex items-center justify-center
      top-0 z-50 bg-white bg-opacity-50"
    >
      <img alt="loading" src={logo} className="animate-breath w-36" />
    </div>
  ) : (
    <>
      {isEmailPage && (
        <Routes>
          <Route path="/subscribed" element={<Subscribed />} />
          <Route path="/unsubscribed" element={<Unsubscribed />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      )}
      {isEmailPage === false && (
        <main className="grid grid-cols-1 gap-0 min-h-[100vh] overflow-x-hidden">
          <ScrollToTop />
          <div className="self-start">
            {!localStorage.getItem("cookies_popup") && state.showCookies && (
              <Cookies />
            )}
            <Navbar />
            <main
              className={`transition-[margin] duration-500 ${
                state.showMargin ? "mt-[54px] min-[1200px]:mt-[110px]" : "mt-0"
              }`}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/register" element={<Register />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget_password" element={<ForgetPassword />} />
                <Route
                  path="/password-reset/:token"
                  element={<ResetPassword />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/skin_care" element={<SkinCare />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Article />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/retailers" element={<Retailers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/health_care" element={<HealthCare />} />
                <Route path="/makeup" element={<Makeup />} />
                <Route path="/hair_care" element={<HairCare />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/returns" element={<Returns />} />
                <Route
                  path="/confirm-subscribe"
                  element={<ConfirmSubscribe />}
                />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
          </div>
          <div className="self-end">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};
export default App;
