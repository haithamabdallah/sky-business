import axios from "axios";

const url = import.meta.env.VITE_API_URL;

const sendRequest = async ({ method, endpoint, body, params, token }) => {
  const config = {
    method,
    url: `${url}/${endpoint}`,
    data: body,
    params,
  };
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  try {
    const response = await axios(config);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export default sendRequest;
