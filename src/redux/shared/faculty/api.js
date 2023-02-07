import axiosInstance, { microServices } from "../../../network/apis";

export const getFacultyApi = async (payload) => {
  const url = payload?.dept
    ? `/staff?department=${payload.dept}`
    : "/staff?department=0";
  return await axiosInstance("get", url, payload, {
    server: microServices.STAFF,
    successMessage: "get batch",
  });
};
