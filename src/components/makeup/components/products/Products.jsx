import { useContext } from "react";
import { Context } from "../../../../ContextProvider";
import ProductList from "./components/productList/ProductList";
import parse from "html-react-parser";
const Products = () => {
  const { state } = useContext(Context);
  const header = state.makeupData.settings.header;
  const text = state.makeupData.settings.text;

  return (
    <section className="flex flex-col items-center px-4">
      <h2
        className="text-center text-2xl min-[562px]:text-5xl mb-[30px] font-bold leading-[48px]
    uppercase [letter-spacing:_0]"
      >
        {header}
      </h2>
      <div
        className="[&_*]:min-[562px]:[font-size:18px_!important] [&_*]:[font-size:16px_!important]
        leading-[26px] text-[#393839] text-center mb-[72px]
        [letter-spacing:_1.8px] [word-wrap:_break-word] font-sans font-thin"
      >
        {parse(text)}
      </div>
      <ProductList />
    </section>
  );
};

export default Products;
