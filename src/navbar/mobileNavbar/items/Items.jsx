import Cart from "./cart/Cart";
import FindStore from "./findStore/FindStore";
import Search from "./search/Search";
const Items = ({ scrollStatus }) => {
  return (
    <ul className="flex gap-x-[10px] items-center px-5 z-50">
      <li>
        <Search scrollStatus={scrollStatus} />
      </li>
    </ul>
  );
};

export default Items;
