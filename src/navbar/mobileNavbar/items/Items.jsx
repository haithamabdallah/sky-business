import Cart from "./cart/Cart";
import FindStore from "./findStore/FindStore";
import Logout from "../../../logout/Logout";
import Search from "./search/Search";
import { Link } from "react-router-dom";
import LoginOrLogout from "./loginOrLogout/LoginOrLogout";
const Items = ({ scrollStatus }) => {
  const token = localStorage.getItem("token");
  return (
    <ul className="flex gap-x-[10px] items-center px-5 z-50">
      <LoginOrLogout />
      <li>
        <Search scrollStatus={scrollStatus} />
      </li>
    </ul>
  );
};

export default Items;
