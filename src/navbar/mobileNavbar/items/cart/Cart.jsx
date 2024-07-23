import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="#">
      <svg
        width="35"
        height="35"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-x-[0.5142857142857143] scale-y-[0.5571428571428571]"
      >
        <g fill="none" fillRule="evenodd" stroke="#000" strokeWidth="1.8">
          <path
            d="M21.79 17.56v-6.788C21.79 8.692 20.09 7 18 7s-3.79 1.691-3.79 3.772v6.788"
            strokeLinejoin="round"
          />
          <path d="M10 13.16h16V29H10z" />
        </g>
      </svg>
    </Link>
  );
};

export default Cart;
