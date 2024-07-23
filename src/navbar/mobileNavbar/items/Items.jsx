import Cart from "./cart/Cart";
import FindStore from "./findStore/FindStore";
import Search from "./search/Search";
const Items = () => {
  return (
    <ul className="flex gap-x-[10px] items-center px-5">
      <li>
        <Search />
      </li>
      <li>
        <FindStore />
      </li>
      <li>
        <Cart />
      </li>
    </ul>
  );
};

export default Items;