import { useLocation } from "react-router-dom";

const ThankYou = () => {
    const location = useLocation();

    // Safely retrieve the message from location.state
    const message = location.state?.message || "Thank you for your submission!";

    return (
        <div className="w-screen flex flex-col justify-center items-center font-futura py-[30px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-[120px] min-[992px]:w-[160px] aspect-square mb-5 min-[992px]:mb-[37px]"
            >
                <path
                    fill="#004aad"
                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                />
            </svg>
            <p className="text-[40px] leading-[40px] md:text-[30px] md:leading-[30px] mb-5">
                THANK YOU!
            </p>
            <p className="text-[14px] text-[#393839] leading-none text-center px-5">
                {message}
            </p>
        </div>
    );
};

export default ThankYou;
