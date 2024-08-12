import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sendRequest from "../../methods/fetchData";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendRequest({
      method: "post",
      endpoint: "forgot-password",
      body: { email },
    });
    setLoading(false);
    setMessage(response.message);
    setStatus(response.status);
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      if (status === "success") {
        navigate("/");
      }
    }, 2000);
  }, [message]);

  return (
    <>
      <div
        className="flex justify-center items-center w-full min-h-[148.75px] px-[15px] font-futura
      text-[36px] bg-black text-white"
      >
        Forgot Password
      </div>
      <section
        className="font-futura max-w-[75rem] mx-auto flex flex-col justify-center items-center
      my-12"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-4 w-[90%] min-[400px]:w-[300px]"
        >
          <label className="mb-2" htmlFor="email">
            Enter your email address
          </label>
          <input
            className="outline-none w-full px-3 py-2 border border-black mb-4"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required
          />
          {loading && (
            <div
              className="flex items-center text-yellow-600  justify-center min-h-20
              animate-breath"
            >
              Loading
            </div>
          )}
          {message.length > 0 && status === "success" && (
            <small className="w-full py-5 text-center text-green-700 text-[1rem]">
              {message}
            </small>
          )}
          {message.length > 0 && status === "error" && (
            <small className="w-full text-center py-5 text-red-700 text-[1rem]">
              {message}
            </small>
          )}
          <button
            className="text-center w-fit self-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  text-xl leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black flex justify-center
                  items-center gap-x-1"
            type="submit"
          >
            Send Reset Email
          </button>
        </form>
      </section>
    </>
  );
};

export default ForgetPassword;
