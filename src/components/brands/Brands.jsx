import PageCover from '../innerPages/components/pageCover/PageCover';
import BrandCategories from './components/brandCategories/BrandCategories';
import FilterBrands from './components/filterBrands/FilterBrands';

const Brands = () => {
    return (
        <>
            <PageCover
                title="Our Brands"
                subtitle="Explore our exclusive brands"
                backgroundImage="https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <section className='flex min-[902px]:flex-row flex-col max-w-[75rem] mx-auto relative mt-5'>
                <FilterBrands />
                <BrandCategories />
            </section>
        </>
    );
};

export default Brands;