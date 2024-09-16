import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import sendRequest from "../../../../../../../methods/fetchData";
import Loading from "../../../../../../../components/Loading";
import ShowMessage from "../../../../../../../components/ShowMessage";

const Newsletter = () => {
    const checkbox = useRef(null);
    const [focus, setFocus] = useState(false);
    const [checked, setChecked] = useState(false);
    const [form, setForm] = useState({});
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (status.length > 0) setFocus(false);
    }, [status]);

    return (
        <div className="bg-transparent pt-0 lg:pt-0 font-futura">
            <div className="text-[#626566]">
                <h2 className="text-[#000] block lg:hidden mb-[.9375rem] font-bold">
                    CONNECT WITH US
                </h2>
                <form
                    onChange={(e) => {
                        const key = e.target.name;
                        const value = e.target.value;
                        setForm({ ...form, [key]: value });
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();

                        if (!checked) {
                            setMessage("You must agree to sign up for emails.");
                            setStatus("error");
                            return; // Prevent form submission if the checkbox is not checked
                        }

                        setLoading(true);
                        setMessage("");
                        setStatus("");

                        sendRequest({
                            method: "get",
                            endpoint: "subscribe",
                            params: { ...form },
                        })
                            .then((data) => {
                                setLoading(false);
                                setForm({});
                                setChecked(false);

                                if (data.status === "success") {
                                    navigate("/thank-you", { state: { message: data.message } }); // Pass success message
                                } else {
                                    setMessage(data.message);
                                    setStatus(data.status);
                                }
                            })
                            .catch((error) => {
                                setLoading(false);
                                setMessage("An error occurred, please try again.");
                                console.error("Error:", error);
                            });
                    }}
                >
                    <p className="text-[0.75rem] lg:leading-[3rem] leading-[3rem] mb-2">
                        Sign Up To Receive The Latest News And Special Offers
                    </p>
                    <div className="flex items-start mx-[-0.625rem] text-[#626566] mb-[0.625rem]">
                        <div className="mx-[0.625rem] mb-5 relative w-full">
                            <input
                                className="appearance-none bg-white border-none rounded-none
                shadow-[0_0.0625rem_0_0_#000] box-border text-black block font-semibold
                text-[0.875rem] leading-normal h-[3.125rem] px-[0.25rem] pl-[0.3125rem]
                [transition:_box-shadow_.2s,_border-color_.2s_ease-in-out] w-full
                focus:border-none focus:[box-shadow:_0_.0625rem_0_0_#000] outline-none
                focus:[transition:_box-shadow_.2s,_border-color_.2s_ease-in-out]"
                                type="email"
                                name="email"
                                required
                                onFocus={() => setFocus(true)}
                                onBlur={(e) => !e.target.value && setFocus(false)}
                            />
                            <label
                                htmlFor="email"
                                className={`text-black left-0 max-w-full overflow-hidden pointer-events-none
                absolute text-left truncate top-0 [transform:_translateZ(0)]
                [transition:_transform_.2s,_font-size_.2s,_left_.2s] duration-200 whitespace-nowrap
                w-auto z-10 cursor-pointer block
                 ${
                                    focus
                                        ? "h-auto top-[-16px] text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light"
                                        : `[transform:translateZ(0)] top-0 h-[3.125rem] text-[12px] font-normal`
                                }`}
                            >
                                Email address
                                <span className="text-[0.875rem] text-[#000] leading-[3.125rem] font-futura">
                  *
                </span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-start mx-[-0.625rem] flex-wrap">
                        <div className="mx-[0.625rem] mb-5 relative w-full">
                            <input
                                className="hidden"
                                type="checkbox"
                                name="checkbox"
                                onClick={(e) => {
                                    setChecked(!checked);
                                    checkbox.current.checked = !checked;
                                }}
                                ref={checkbox}
                            />
                            <label
                                className={`text-[#000] pl-[1.875rem] inline-block text-[0.75rem] leading-[1.25rem]
                [outline-width:0] w-auto cursor-pointer m-0 relative
                before:content-[''] before:bg-white before:border before:border-[#525252]
                before:absolute before:w-[1.25rem] before:h-[1.25rem] before:left-0
                before:top-0 [transition:_box-shadow_.2s,_border-color_.2s_ease-in-out]
                before:inline-block before:align-top ${
                                    checked
                                        ? `before:bg-[url('./components/contact/components/contactForm/correct.svg')]
                    before:bg-[50%] before:bg-no-repeat before:[background-size:111.11111%]
                    before:border before:border-[#000] font-semibold`
                                        : ""
                                }`}
                                onClick={() => setChecked(!checked)}
                            >
                                Yes, sign me up for <strong>Emails*</strong>
                            </label>
                        </div>
                    </div>
                    <div className="mb-5">
                        {status !== "success" && message && (
                            <ShowMessage
                                message={message}
                                classes={`py-5 text-[1rem] ${
                                    status === "success" ? "text-green-700" : "text-red-700"
                                }`}
                            />
                        )}
                        <Loading loading={loading} />
                        <button
                            className="bg-black text-white py-3 px-6 rounded-full w-full mt-3"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
            <hr className="mb-5" />
        </div>
    );
};

export default Newsletter;
