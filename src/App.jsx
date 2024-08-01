import { Route, Routes , Navigate  } from "react-router-dom";
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
const App = () => {
  return (
    <main className="grid grid-cols-1 gap-0 min-h-[100vh] overflow-x-hidden">
      <div className="self-start">
        <Navbar />
        <main className="mt-[54px] min-[1200px]:mt-[73px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Article />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/retailers" element={<Retailers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/organic_foods" element={<OrganicFoods />} />
            <Route path="*" element={<Navigate to="/" replace />} />
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
