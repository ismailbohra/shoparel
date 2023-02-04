import axiosInstance, { microServices } from "../../../network/apis";

export const getDepartmentApi = async (payload) => {
  return await axiosInstance("get", `/departments`, payload, {
    server: microServices.MASTER,
    successMessage: "get batch",
  });
};
