import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div
      className="font-futura text-black m-2"
    >
      <p>
        © COPYRIGHT 2024 <Link className="text-[#0449ae] font-[600]" to="/"> SKY BUSINESS TARDE </Link> , ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Copyright;
