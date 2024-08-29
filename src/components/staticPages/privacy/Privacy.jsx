import parse from "html-react-parser";
import { Context } from "../../../ContextProvider";
import { useContext } from "react";
const Privacy = ({ staticPagesData }) => {
    const { state } = useContext(Context);
    const policy = state.staticPagesData.pages.filter( page => page.id == 2 ) [0] ;
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