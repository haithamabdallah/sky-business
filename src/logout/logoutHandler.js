import sendRequest from "../methods/fetchData";

const logoutHandler = (
  navigate,
  setShow = null,
  setTerm = null,
  setShowSearch = null
) => {
  sendRequest({
    method: "post",
    endpoint: "logout",
    token: localStorage.getItem("token"),
  }).then((res) => {
    if (res.status === "success") {
      document.querySelector("body").classList.remove("overflow-hidden");
      if (setShow) setShow(false);
      if (setTerm) setTerm("");
      if (setShowSearch) setShowSearch(false);
      localStorage.removeItem("token");
      navigate("/");
    }
  });
};

export default logoutHandler;
