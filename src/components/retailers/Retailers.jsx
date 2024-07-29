import PageCover from '../innerPages/components/pageCover/PageCover';
import Header from './components/header/Header';
import Logos from './components/logos/Logos';

const Retail = () => (
    <div className="">
        <PageCover
            title=""
            subtitle=""
            backgroundImage="https://images.unsplash.com/photo-1591375462469-62f189694738?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="max-w-[90vw] md:max-w-[70vw] mx-auto">
            <Header />
            <Logos />
        </div>
    </div>
);

export default Retail;