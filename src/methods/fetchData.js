import axios from "axios";

const url = import.meta.env.VITE_API_URL;

const sendRequest = async ({ method, endpoint, body, params }) => {
  const config = {
    method,
    url: `${url}/${endpoint}`,
    data: body,
    params,
  };
  try {
    const response = await axios(config);
    const result = response.data;
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export default sendRequest;
