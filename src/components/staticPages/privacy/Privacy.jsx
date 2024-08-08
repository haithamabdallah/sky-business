import parse from "html-react-parser";
const Privacy = ({ staticPagesData }) => {
    const policy = staticPagesData.pages.filter( page => page.id == 2 ) [0] ;
    return (
        <div className="">
            <div className="bg-black w-[100vw] h-[20vw] grid place-items-center"> 
                <p className="text-white text-3xl font-future"> 
                    { policy.name.toUpperCase() }
                </p>    
            </div>
            <div className="max-w-[75rem] p-5 mx-auto font-future" >
                <div className="p-2 font-future">
                    {parse(`${policy.content}`)}
                </div>
            </div>
        </div>
    );
};

export default Privacy;