import Cart from "./cart/Cart";
import FindStore from "./findStore/FindStore";
import Logout from "../../../logout/Logout";
import Search from "./search/Search";
import { Link } from "react-router-dom";
import LoginOrLogout from "./loginOrLogout/LoginOrLogout";
const Items = ({ scrollStatus, show, setShow, term, setTerm }) => {
  const token = localStorage.getItem("token");
  return (
    <ul className="flex gap-x-[10px] items-center px-5 z-50">
      <LoginOrLogout setShow={setShow} setTerm={setTerm} />
      <li>
        <Search
          scrollStatus={scrollStatus}
          show={show}
          setShow={setShow}
          term={term}
          setTerm={setTerm}
        />
      </li>
    </ul>
  );
};

export default Items;
