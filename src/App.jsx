import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

const App = () => {
  return (
    <main className="flex flex-col gap-y-2">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </main>
  );
};

export default App;
