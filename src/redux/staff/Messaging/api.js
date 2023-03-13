import axiosInstance, { microServices } from "../../../network/apis";

export const messagePostApi = async (payload) => {
  return await axiosInstance("post", `/`, payload, {
    server: microServices.MESSAGE,
    successMessage: "MESSAGING req",
  });
};
