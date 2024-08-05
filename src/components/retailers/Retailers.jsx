import PageCover from '../innerPages/components/pageCover/PageCover';
import Header from './components/header/Header';
import Logos from './components/logos/Logos';

const Retail = ( { retailerData } ) =>{ 
    const url = import.meta.env.VITE_STORAGE_URL;
    return (     
    retailerData.settings && 
    <div className="max-w-[75rem] mx-auto">
        <PageCover
            title=""
            subtitle=""
            backgroundImage={`${url}/${retailerData.settings.cover}`}
        />
        <div className="max-w-[80vw] md:max-w-[70vw] mx-auto my-[6rem]">
            <Header retailerData={retailerData} />
            <Logos retailerData={retailerData} />
        </div>
    </div>
);}

export default Retail;