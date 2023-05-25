import axios from "axios";
import config from "../../config";
import Auth from "../../utils/Auth";
import { errorHandler, requestHandler, successHandler } from "../interceptors";

const axiosClient = (baseUrl, config) =>
  axios.create({
    baseURL: baseUrl,
    ...config,
  });

const microServicesURLs = {
  TIKIT_TEST: `${config.apiGateway.TEST}`,
  USER: `${config.apiGateway.USER}`,
  PRODUCT: `${config.apiGateway.PRODUCT}`,
  ORDER: `${config.apiGateway.ORDER}`,
  ADMIN: `${config.apiGateway.ADMIN}`,
};

const clients = {};
const microServices = {};

for (const key in microServicesURLs) {
  const axiosInstance = axiosClient(microServicesURLs[key], {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken.authToken,
    },
  });
  microServices[key] = key;
  clients[key] = axiosInstance;

  axiosInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
  );
}

export default (method, uri, data = {}, configs = {}) => {
  const {
    successMessage = null,
    // server = microServices.GLOBAL_ADMIN_URL,
    server = microServices.STAFF,
    headers = {},
    params = {},
    responseType = "json",
    handlerEnabled = true,
  } = configs;

  const axiosConfig = {
    headers,
    params,
    handlerEnabled,
  };

  if (responseType) {
    axiosConfig.responseType = responseType;
  }

  if (successMessage) {
    axiosConfig.successMessage = successMessage;
  }

  return clients[server][method](
    uri,
    method === "delete" ? axiosConfig : data,
    axiosConfig
  );
};

export { microServices };
