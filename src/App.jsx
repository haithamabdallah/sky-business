import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/register/register";


const App = () => {
  return (
    <main className="flex flex-col gap-y-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};

export default App;
