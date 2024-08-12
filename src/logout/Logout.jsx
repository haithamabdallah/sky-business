import { useNavigate } from "react-router-dom";
import logoutHandler from "./logoutHandler";

const Logout = ({ type, setShow }) => {
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
        onClick={() => {
          logoutHandler(navigate, setShow);
        }}
      >
        <span className={`flex flex-row gap-2 place-items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="13"
            width="13"
            viewBox="0 0 512 512"
          >
            <path
              className="min-[1200px]:fill-white fill-black"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
            />
          </svg>
          {type !== "mobileNav" && `LOGOUT`}
        </span>
      </button>
    </li>
  );
};

export default Logout;
