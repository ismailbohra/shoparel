import axiosInstance, { microServices } from "../../../network/apis";

export const getFacultyApi = async (payload) => {
  const url = payload.id ? `/${payload.id}` : "/";

  return await axiosInstance("get", url, payload, {
    server: microServices.STAFF,
    successMessage: "get batch",
  });
};
