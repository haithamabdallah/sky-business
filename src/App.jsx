import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/Register/register";
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
  const [staticPagesData, setStaticPagesData] = useState({});
  
  const { pathname } = useLocation();

  const { setValue } = useContext(Context);

  useEffect(() => {
    Promise.all([
      sendRequest({ method: "post", endpoint: "settings" }).then((res) => {
        // console.log({ res });
        if (res.status === "success") {
          console.log(res.data);
          setHomeData(res.data['home_page']);
          setAboutData(res.data['about_page']);
          setSkinCareData(res.data['skin_page']);
          setHairCareData(res.data['hair_page']);
          setMakeupData(res.data['makeup_page']);
          setRetailerData(res.data['retailer_page']);
          setHealthCareData(res.data['organic_page']);
          setBrandData(res.data['brand_page']);
          setBlogData(res.data['blog_page']);
          setContactData(res.data['contact_page']);
          setRegisterData(res.data['register_page']);
          setValue(res.data['general']);
          setStaticPagesData(res.data['static-pages']);
          document.getElementById("app-icon").href = `${import.meta.env.VITE_STORAGE_URL}/${res.data.general.settings.icon}`;
        }
      }),
    ]).then(() => {
      setLoading(false);
      if (pathname === "/") {
        setTimeout(() => {
          setShowPopup(true);
        }, 3000);
      }
    });
  }, []);
  return loading ? (
    <div
      className="min-w-[100vw] min-h-[100vh] absolute flex items-center justify-center
      top-0 z-50 bg-white bg-opacity-50"
    >
      <img alt="loading" src={logo} className="animate-breath w-36" />
    </div>
  ) : (
    <main className="grid grid-cols-1 gap-0 min-h-[100vh] overflow-x-hidden">
      <div className="self-start">
        <Navbar />
        <main>
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
            <Route path="/register" element={<Register registerData={registerData} />} />
            <Route path="/login" element={<Login loginData={registerData} />} />
            <Route path="/about" element={<About aboutData={aboutData} />} />
            <Route
              path="/skin_care"
              element={<SkinCare skinCareData={skinCareData} />}
            />
            <Route path="/blog" element={<Blog blogData={blogData} />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/brands" element={<Brands brandData={brandData} />} />
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
          </Routes>
        </main>
      </div>
      <div className="self-end">
        <Footer />
      </div>
    </main>
  );
};

export default App;
