import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/register/register";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Beauty from "./components/beauty/Beauty";
import Blog from "./components/blog/Blog";
import Brands from "./components/brands/Brands";
import Contact from "./components/contact/Contact";
import OrganicFoods from "./components/organicFoods/OrganicFoods";
const App = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <main className="mt-0 md:mt-[44px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/organic_foods" element={<OrganicFoods />} />
        </Routes>
      </main>
    </main>
  );
};

export default App;
