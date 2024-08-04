import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/Register/register";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Beauty from "./components/beauty/Beauty";
import Blog from "./components/blog/Blog";
import Brands from "./components/brands/Brands";
import Retailers from "./components/retailers/Retailers";
import Contact from "./components/contact/Contact";
import OrganicFoods from "./components/organicFoods/OrganicFoods";
import Footer from "./footer/Footer";
import Article from "./components/blog/components/blogCards/components/article/Article";
import sendRequest from "./methods/fetchData";
const App = () => {
  const [loading, setLoading] = useState( true );
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [retailerData, setRetailerData] = useState({});

  useEffect(() => {
    Promise.all([
      sendRequest({ method: "post", endpoint: "home-page" }).then((res) => {
        // console.log({ res });
        if (res.status === "success") {
          setHomeData(res.data);
        }
      }),
      sendRequest({ method: "post", endpoint: "about-page" }).then((res) => {
        // console.log({ res });
        if (res.status === "success") {
            setAboutData(res.data);
        }
      }),
      sendRequest({ method: "post", endpoint: "retailer-page" }).then((res) => {
        // console.log({ res });
        if (res.status === "success") {
            setRetailerData(res.data);
        }
      }),
    ]).then(( ) => {
      setLoading( false );
    });
  }, []);
  if ( loading ) {
    return <div className="w-full h-screen flex justify-center items-center">loading...</div>;
  }
  return (
    <main className="grid grid-cols-1 gap-0 min-h-[100vh] overflow-x-hidden">
      <div className="self-start">
        <Navbar />
        <main className="mt-[54px] min-[1200px]:mt-[73px]">
          <Routes>
            <Route path="/" element={<Home homeData={homeData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About aboutData={aboutData} />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/retailers" element={<Retailers retailerData={retailerData} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/organic_foods" element={<OrganicFoods />} />
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
