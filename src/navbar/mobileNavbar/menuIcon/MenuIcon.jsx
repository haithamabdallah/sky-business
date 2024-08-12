const MenuIcon = ({ show, setShow }) => {
  return (
    <button
      className={`self-center z-40 ${
        show ? "w-[40px] flex justify-center items-center ml-1" : ""
      }`}
      onClick={() => {
        setShow(!show)
        document.querySelector('body').classList.toggle('overflow-hidden')
      }}
    >
      {show ? (
        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 1L1 21m20 0L1 1"
            stroke="#fff"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ) : (
        <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 1.474h19M2 10h19M2 18.526h19"
            stroke="#000"
            strokeWidth="2.16"
            fill="none"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default MenuIcon;
