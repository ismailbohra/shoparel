import axiosInstance, { microServices } from "../../../network/apis";

export const getLeaveTypeApi = async () => {
  return await axiosInstance(
    "get",
    "/leaveType",
    {},
    {
      server: microServices.MASTER,
      successMessage: "get leaveType",
    }
  );
};
