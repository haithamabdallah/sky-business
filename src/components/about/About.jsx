import PageCover from '../innerPages/components/pageCover/PageCover';
import { data } from './data.js';
import parse from 'html-react-parser';

const About = () => (
    <div className="">
        <PageCover
            title=""
            subtitle=""
            backgroundImage="https://www.vichy.ca/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-vichy-ca-Library/default/dwc9d9b476/expert-tips/our-brand/v-hero-btm-about_en.jpg?sw=2000&sh=495&sm=cut&q=70"
        />
        <div className="max-w-[1170px] mx-auto px-[15px] my-[3rem]">
            {/* section 1 large screen */}
            <div className="hidden lg:grid place-items-center  lg:grid-cols-2  gap-y-[3rem] my-[3rem]">
                <img src={`${data.images[0]}`} alt="" />
                <div className="text-gray-500 max-w-[455px] ml-auto p-5" >
                    {parse(data.text[0])}
                </div>
                <div className="text-gray-500 max-w-[455px] mr-auto p-5" >
                    {parse(data.text[1])}
                </div>
                <img src={`${data.images[1]}`} alt="" />
                <img src={`${data.images[1]}`} alt="" />
                <div className="text-gray-500 max-w-[455px] ml-auto p-5" >
                    {parse(data.text[2])}
                </div>
            </div>
            {/* section 1  */}
            <div className="grid place-items-center grid-cols-1 lg:hidden gap-y-[3rem] my-[3rem]">
                <img src={`${data.images[0]}`} alt="" />
                <div className="text-gray-500 max-w-[455px] mx-auto p-5" >
                    {parse(data.text[0])}
                </div>
                <img src={`${data.images[1]}`} alt="" />
                <div className="text-gray-500 max-w-[455px] mx-auto p-5" >
                    {parse(data.text[1])}
                </div>
                <img src={`${data.images[1]}`} alt="" />
                <div className="text-gray-500 max-w-[455px] mx-auto p-5" >
                    {parse(data.text[2])}
                </div>
            </div>
            {/* section 2 */}
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 my-[3rem]">
                <img src={`${data.images[3]}`} alt="image3" />
                <div className="p-5 text-center font-[600]">
                    {parse(data.text[3])}
                </div>
                <img src={`${data.images[4]}`} alt="image4" />
                <div className="p-5 text-center font-[600]">
                    {parse(data.text[4])}
                </div>
                <img src={`${data.images[5]}`} alt="image5" />
                <div className="p-5 text-center font-[600]">
                    {parse(data.text[5])}
                </div>
            </div>
        </div>
    </div>



);

export default About;