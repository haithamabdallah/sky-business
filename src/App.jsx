import { useContext, useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import sendRequest from "./methods/fetchData";
import logo from "./navbar/logo.jpeg";
import { Context } from "./ContextProvider";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Cookies from "./cookies/Cookies";
import renderPreviousPage from "./renderPreviousPage";

// Lazy load components
const Home = lazy(() => import("./components/home/Home"));
const Register = lazy(() => import("./components/Register/register"));
const ThankYou = lazy(() =>
  import("./components/Register/components/thankYou/ThankYou")
);
const Login = lazy(() => import("./components/login/Login"));
const About = lazy(() => import("./components/about/About"));
const SkinCare = lazy(() => import("./components/skinCare/SkinCare"));
const Blog = lazy(() => import("./components/blog/Blog"));
const Brands = lazy(() => import("./components/brands/Brands"));
const Retailers = lazy(() => import("./components/retailers/Retailers"));
const Contact = lazy(() => import("./components/contact/Contact"));
const HealthCare = lazy(() => import("./components/healthCare/HealthCare"));
const Article = lazy(() =>
  import("./components/blog/components/blogCards/components/article/Article")
);
const Makeup = lazy(() => import("./components/makeup/Makeup"));
const HairCare = lazy(() => import("./components/hairCare/HairCare"));
const Terms = lazy(() => import("./components/staticPages/terms/Terms"));
const Privacy = lazy(() => import("./components/staticPages/privacy/Privacy"));
const Returns = lazy(() => import("./components/staticPages/returns/Returns"));
const SearchResult = lazy(() => import("./searchResult/SearchResult"));
const ForgetPassword = lazy(() =>
  import("./components/forgetPassword/ForgetPassword")
);
const Subscribed = lazy(() => import("./components/subscribed/Subscribed"));
const Unsubscribed = lazy(() =>
  import("./components/unsubscribed/Unsubscribed")
);
const Unsubscribe = lazy(() => import("./components/unsubscribe/Unsubscribe"));
const ConfirmSubscribe = lazy(() =>
  import("./components/confirmSubscribe/ConfirmSubscribe")
);
const ResetPassword = lazy(() =>
  import("./components/resetPassword/ResetPassword")
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [skinCareData, setSkinCareData] = useState({});
  const [hairCareData, setHairCareData] = useState({});
  const [retailerData, setRetailerData] = useState({});
  const [healthCareData, setHealthCareData] = useState({});
  const [makeupData, setMakeupData] = useState({});
  const [brandData, setBrandData] = useState({});
  const [blogData, setBlogData] = useState({});
  const [registerData, setRegisterData] = useState({});
  const [contactData, setContactData] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [staticPagesData, setStaticPagesData] = useState({});
  const [showMargin, setShowMargin] = useState(true);
  const { pathname } = useLocation();

  const isEmailPage = /(\/subscribed|\/unsubscribed|\/unsubscribe)/.test(
    pathname
  );
  const { setValue } = useContext(Context);

  useEffect(() => {
    Promise.all([
      sendRequest({ method: "post", endpoint: "settings" }).then((res) => {
        if (res.status === "success") {
          setHomeData(res.data["home_page"]);
          setAboutData(res.data["about_page"]);
          setSkinCareData(res.data["skin_page"]);
          setHairCareData(res.data["hair_page"]);
          setMakeupData(res.data["makeup_page"]);
          setRetailerData(res.data["retailer_page"]);
          setHealthCareData(res.data["organic_page"]);
          setBrandData(res.data["brand_page"]);
          setBlogData(res.data["blog_page"]);
          setContactData(res.data["contact_page"]);
          setRegisterData(res.data["register_page"]);
          setValue(res.data["general"]);
          setStaticPagesData(res.data["static-pages"]);
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
      setLoading(false);
      setTimeout(() => {
        setShowCookies(true);
      }, 2000);
      if (pathname === "/" && localStorage.getItem("cookies_popup")) {
        setTimeout(() => {
          setShowPopup(true);
        }, 3000);
      }
    });
  }, []);

  const renderLoader = () => (
    <div className="min-w-[100vw] min-h-[100vh] absolute flex items-center justify-center top-0 z-50 bg-white bg-opacity-50">
      <img alt="loading" src={logo} className="animate-breath w-36" />
    </div>
  );

  return loading ? (
    renderLoader()
  ) : (
    <>
      {isEmailPage && (
        <Routes>
          <Route path="/subscribed" element={<Subscribed />} />
          <Route path="/unsubscribed" element={<Unsubscribed />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      )}
      {!isEmailPage && (
        <main className="grid grid-cols-1 gap-0 min-h-[100vh] overflow-x-hidden">
          <div className="self-start">
            {!localStorage.getItem("cookies_popup") && showCookies && (
              <Cookies setShowCookies={setShowCookies} />
            )}
            <Navbar setShowMargin={setShowMargin} />
            <main
              className={`transition-[margin] duration-500 ${
                showMargin ? "mt-[54px] min-[1200px]:mt-[110px]" : "mt-0"
              }`}
            >
              <Suspense fallback={() => renderPreviousPage(pathname)}>
                <ScrollToTop />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home
                        homeData={homeData}
                        showPopup={showPopup}
                        setShowPopup={setShowPopup}
                      />
                    }
                  />
                  <Route path="/search" element={<SearchResult />} />
                  <Route
                    path="/register"
                    element={<Register registerData={registerData} />}
                  />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route
                    path="/login"
                    element={<Login loginData={registerData} />}
                  />
                  <Route path="/forget_password" element={<ForgetPassword />} />
                  <Route
                    path="/password-reset/:token"
                    element={<ResetPassword />}
                  />
                  <Route
                    path="/about"
                    element={<About aboutData={aboutData} />}
                  />
                  <Route
                    path="/skin_care"
                    element={<SkinCare skinCareData={skinCareData} />}
                  />
                  <Route path="/blog" element={<Blog blogData={blogData} />} />
                  <Route path="/blog/:id" element={<Article />} />
                  <Route
                    path="/brands"
                    element={<Brands brandData={brandData} />}
                  />
                  <Route
                    path="/retailers"
                    element={<Retailers retailerData={retailerData} />}
                  />
                  <Route
                    path="/contact"
                    element={<Contact contactData={contactData} />}
                  />
                  <Route
                    path="/health_care"
                    element={<HealthCare healthCareData={healthCareData} />}
                  />
                  <Route
                    path="/makeup"
                    element={<Makeup makeupData={makeupData} />}
                  />
                  <Route
                    path="/hair_care"
                    element={<HairCare hairCareData={hairCareData} />}
                  />
                  <Route
                    path="/terms"
                    element={<Terms staticPagesData={staticPagesData} />}
                  />
                  <Route
                    path="/privacy"
                    element={<Privacy staticPagesData={staticPagesData} />}
                  />
                  <Route
                    path="/returns"
                    element={<Returns staticPagesData={staticPagesData} />}
                  />
                  <Route
                    path="/confirm-subscribe"
                    element={<ConfirmSubscribe />}
                  />
                  <Route
                    path="*"
                    element={
                      <Home
                        homeData={homeData}
                        showPopup={showPopup}
                        setShowPopup={setShowPopup}
                      />
                    }
                  />
                </Routes>
              </Suspense>
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
