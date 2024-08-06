import PageCover from "../innerPages/components/pageCover/PageCover";
import Products from "./components/products/Products";

const Makeup = ({ makeupData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const coverData = makeupData.settings
  const products = makeupData["beauty products"]
  return (
    <>
      <PageCover
        title={coverData.header}
        subtitle={coverData.text}
        backgroundImage={`${url}/${coverData.cover}`}
      />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
        <Products products={products}/>
      </div>
    </>
  );
};

export default Makeup;
