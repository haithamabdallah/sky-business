import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div
      className="font-futura text-black"
    >
      <p className="text-[0.75rem]">
        © COPYRIGHT 2024 <Link className="font-[600]" to="/"> SKY BUSINESS TARDE </Link> , ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default Copyright;
