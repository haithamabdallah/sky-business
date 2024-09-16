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
                                className="appearance-none bg-white border border-black shadow-sm
                           text-black block w-full px-[0.25rem] py-[0.75rem] text-sm
                           focus:outline-none"
                                type="email"
                                name="email"
                                required
                                onFocus={() => setFocus(true)}
                                onBlur={(e) => !e.target.value && setFocus(false)}
                            />
                            <label
                                className={`absolute left-2 top-2 transition-all duration-200 
                           ${focus ? "text-xs -top-3" : "text-sm"}`}
                            >
                                Email address *
                            </label>
                        </div>
                    </div>
                    <div className="flex items-start mx-[-0.625rem] flex-wrap">
                        <div className="mx-[0.625rem] mb-5 relative w-full">
                            <input
                                className="hidden"
                                type="checkbox"
                                name="checkbox"
                                ref={checkbox}
                            />
                            <label
                                className={`relative cursor-pointer pl-8 before:absolute before:content-[''] 
                            before:w-5 before:h-5 before:left-0 before:top-0 before:bg-white 
                            before:border before:border-gray-400 before:rounded ${
                                    checked
                                        ? "before:bg-[url('/path/to/correct.svg')]"
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
