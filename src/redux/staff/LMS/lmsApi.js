import axiosInstance, { microServices } from "../../../network/apis";

export const LeaveApplyApi = async (payload) => {
  return await axiosInstance("post", "/leave", payload, {
    server: microServices.LEAVE,
    successMessage: "leave apply",
  });
};
export const LeaveGetApi = async (userData) => {
  const url = userData?.staffId
    ? `/leave?staffId=${userData.staffId}`
    : `/leave`;
  return await axiosInstance("get", url, userData, {
    server: microServices.LEAVE,
    successMessage: "leave get",
  });
};

export const LmsReportGetApi = async (userData) => {
  const url = userData?.staffId ? `?staffId=${userData.staffId}` : `/`;
  return await axiosInstance("get", url, userData, {
    server: microServices.LEAVE,
    successMessage: "lms get",
  });
};
