import PageCover from '../innerPages/components/pageCover/PageCover';
import BrandCategories from './components/brandCategories/BrandCategories';
import parse from 'html-react-parser';


const Brands = ( { brandData } ) => {
    const url = import.meta.env.VITE_STORAGE_URL;
    return (
        brandData.settings &&
        <>
            <PageCover
                title="Our Brands"
                subtitle="Explore our exclusive brands"
                backgroundImage={`${url}/${brandData.settings.cover}`}
            />
            <section className='max-w-[75rem] mx-auto mt-16 px-5'>
                <BrandCategories categories={brandData.categories} />
            </section>
        </>
    );
};

export default Brands;