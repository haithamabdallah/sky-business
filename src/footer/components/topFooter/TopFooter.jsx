import { useContext } from "react";
import ProsList from "./components/prosList/ProsList";
import { Context } from "../../../ContextProvider";

const TopFooter = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="w-full mx-auto">
          <ProsList />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
