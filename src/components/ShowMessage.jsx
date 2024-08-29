import { useState } from "react";

const ShowMessage = ({ message, classes }) => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <div className="relative py-5">
        <button
          className="absolute right-0 top-[-20px]"
          onClick={() => {
            setOpen(false);
          }}
        >
          <svg
            className="scale-[0.7]"
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1L1 21m20 0L1 1"
              stroke="#000"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>
        <small className={classes}>{message}</small>
      </div>
    )
  );
};

export default ShowMessage;
