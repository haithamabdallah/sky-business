import PageCover from "../innerPages/components/pageCover/PageCover";
import Header from "./components/header/Header";
import Logos from "./components/logos/Logos";

const Retail = ({ retailerData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    retailerData.settings && (
      <>
        <PageCover
          title=""
          subtitle=""
          backgroundImage={`${url}/${retailerData.settings.cover}`}
        />
        <div className="max-w-[75rem] mx-auto">
          <div className="my-[6rem] px-[15px]">
            <Header retailerData={retailerData} />
            <Logos retailerData={retailerData} />
          </div>
        </div>
      </>
    )
  );
};

export default Retail;
