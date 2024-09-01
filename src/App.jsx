import { useCallback, useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import sendRequest from "./methods/fetchData";
import logo from "./navbar/logo.jpeg";
import { Context } from "./ContextProvider";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import Cookies from "./cookies/Cookies";

const preloadComponents = async () => {
  const components = [
    import("./components/home/Home"),
    import("./components/about/About"),
    import("./components/retailers/Retailers"),
    import("./components/contact/Contact"),
    import("./components/healthCare/HealthCare"),
    import("./components/hairCare/HairCare"),
    import("./components/skinCare/SkinCare"),
    import("./components/makeup/Makeup"),
    import("./components/blog/components/blogCards/components/article/Article"),
    import("./components/staticPages/terms/Terms"),
    import("./components/staticPages/privacy/Privacy"),
    import("./components/staticPages/returns/Returns"),
    import("./searchResult/SearchResult"),
    import("./components/forgetPassword/ForgetPassword"),
    import("./components/confirmSubscribe/ConfirmSubscribe"),
    import("./components/resetPassword/ResetPassword"),
    import("./components/unsubscribed/Unsubscribed"),
    import("./components/unsubscribe/Unsubscribe"),
    import("./components/subscribed/Subscribed"),
    import("./components/blog/Blog"),
    import("./components/brands/Brands"),
    import("./components/Register/register"),
    import("./components/login/Login"),
    import("./components/Register/components/thankYou/ThankYou"),
  ];

  return Promise.all(components);
};

const preloadImages = (imageUrls) => {
  const promises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  });

  return Promise.all(promises);
};

const App = () => {
  const { pathname } = useLocation();
  const isEmailPage = /(\/subscribed|\/unsubscribed|\/unsubscribe)/.test(
    pathname
  );
  const { setState, state } = useContext(Context);

  const [components, setComponents] = useState({});

  const fetchData = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const res = await sendRequest({ method: "post", endpoint: "settings" });

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

        // Set the favicon icon in localStorage
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

      // Preload images
      const imageUrls = [
        "https://board.skybusiness.ca/storage/makeup/cover_desktop/pVLCFg6Er4xGtIOk36EtyPnMNeHSg6xVTTWjQ5ms.jpg",
        "https://board.skybusiness.ca/storage/beauty/p6xvHEkces0howKdT4Gyv9n0sSiVaWvVAbXRXCYk.jpg",
        "https://board.skybusiness.ca/storage/beauty/lYa2uXxiJv8xtqQVLAdvjYbigkioRrO2jKChBtQM.jpg",
        "https://board.skybusiness.ca/storage/beauty/8rAy72G5UA4ROuJYbwGyY0yT9CEMSEJmGs3Gt3wJ.jpg",
        "https://board.skybusiness.ca/storage/beauty/eAmD6jjImDkgPDOpIkooqSFWPuatiTHOtMagxFEW.jpg",
      ];

      await preloadImages(imageUrls);
      console.log("All images preloaded successfully");
      
      const preloadedComponents = await preloadComponents();

      const componentNames = [
        "Home",
        "About",
        "Retailers",
        "Contact",
        "HealthCare",
        "HairCare",
        "SkinCare",
        "Makeup",
        "Article",
        "Terms",
        "Privacy",
        "Returns",
        "SearchResult",
        "ForgetPassword",
        "ConfirmSubscribe",
        "ResetPassword",
        "Unsubscribed",
        "Unsubscribe",
        "Subscribed",
        "Blog",
        "Brands",
        "Register",
        "Login",
        "ThankYou",
      ];

      const componentsMap = {};
      componentNames.forEach((name, index) => {
        componentsMap[name] = preloadedComponents[index].default;
      });

      setComponents(componentsMap);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }

    if (!localStorage.getItem("cookies_popup")) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, cookiesPopup: true }));
      }, 2000);
    }
  }, [setState]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderLoader = () => (
    <div className="min-w-[100vw] min-h-[100vh] absolute flex items-center justify-center top-0 z-50 bg-white">
      <img alt="loading" src={logo} className="animate-breath w-36" />
    </div>
  );

  if (state.loading) {
    return renderLoader();
  }

  const {
    Home,
    About,
    Retailers,
    Contact,
    HealthCare,
    SkinCare,
    HairCare,
    Makeup,
    Article,
    Terms,
    Privacy,
    Returns,
    SearchResult,
    ForgetPassword,
    ConfirmSubscribe,
    ResetPassword,
    Unsubscribed,
    Unsubscribe,
    Subscribed,
    Blog,
    Brands,
    Register,
    Login,
    ThankYou,
  } = components;

  return (
    <>
      {isEmailPage ? (
        <Routes>
          <Route path="/subscribed" element={<Subscribed />} />
          <Route path="/unsubscribed" element={<Unsubscribed />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      ) : (
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
                <Route path="/hair_care" element={<HairCare />} />
                <Route path="/makeup" element={<Makeup />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/returns" element={<Returns />} />
                <Route
                  path="/confirm-subscribe"
                  element={<ConfirmSubscribe />}
                />
              </Routes>
            </main>
          </div>
          <Footer />
        </main>
      )}
    </>
  );
};

export default App;
