import sendRequest from "../methods/fetchData";

const logoutHandler = (navigate) => {
  sendRequest({
    method: "post",
    endpoint: "logout",
    token: localStorage.getItem("token"),
  }).then((res) => {
    if (res.status === "success") {
      localStorage.removeItem("token");
      navigate("/");
    }
  });
};

export default logoutHandler;
