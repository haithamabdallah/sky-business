import ProductList from "./components/productList/ProductList";
import parse from "html-react-parser";
const Products = ({ productsData }) => {
  return (
    <section className="flex flex-col items-center">
      <h2
        className="text-center text-5xl mb-[30px] font-bold leading-[48px]
    uppercase [letter-spacing:_0]"
      >
        {productsData.header}
      </h2>
      <div
        className="text-[18px] leading-[26px] text-[#393839] text-center mb-[72px]
        [letter-spacing:_1.8px] [word-wrap:_break-word] font-sans font-thin"
      >
        {parse(productsData.text)}
      </div>
      <ProductList products={productsData.products} />
    </section>
  );
};

export default Products;
