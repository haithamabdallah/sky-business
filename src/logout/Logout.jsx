import { useNavigate } from "react-router-dom";
import logoutHandler from "./logoutHandler";


const Logout = ({ type }) => {
    const navigate = useNavigate();
  return type === "footer" ? (
    <li>
      <button
        onClick={() => logoutHandler(navigate)}
        className={`inline-block text-black text-[0.8rem]
                 leading-[1rem] font-futura py-[0.3125rem] lg:py-0
                 lg:font-normal lg:text-[0.8rem] lg:leading-[1rem] hover:opacity-80 hover:font-[600]`}
      >
        Logout
      </button>
    </li>
  ) : (
    <li
      className={`text-xs py-3 leading-5 min-[1200px]:text-[.75rem] min-[1200px]:text-white
        min-[1200px]:leading-5 min-[1200px]:font-medium min-[1200px]:py-[.875rem]
        min-[1200px]:px-[1rem]`}
    >
      <button
        className="py-1 rounded-full flex flex-row gap-2 place-items-center
        min-[1200px]:py-0  min-[1200px]:rounded-none min-[1200px]:block"
        onClick={() => logoutHandler(navigate)}
      >
        <span className={`flex flex-row gap-2 place-items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="12"
            width="10"
            viewBox="0 0 448 512"
          >
            <path
              className="min-[1200px]:fill-white fill-black"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            />
          </svg>
          LOGOUT
        </span>
      </button>
    </li>
  );
};

export default Logout;
