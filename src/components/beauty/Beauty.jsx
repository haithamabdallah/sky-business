import PageCover from '../innerPages/components/pageCover/PageCover';
import Products from './components/products/Products';

const Beauty = () => (
    <>
    <PageCover
        title="SUN CARE"
        subtitle="Discover Vichy's advanced sun care and sun protection solutions. Protect your skin from harmful UV rays while enhancing its natural beauty with our innovative formulas."
        backgroundImage="https://www.vichy.ca/on/demandware.static/-/Sites-vichy-ca-Library/default/dw63fc244e/images/banners-2024/VICHY-CLP-BANW-Desktop-2340x440_CAPITAL%20SOLEIL_EN.jpg"
    />
    <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
      <Products />
    </div>
    </>
);

export default Beauty;
