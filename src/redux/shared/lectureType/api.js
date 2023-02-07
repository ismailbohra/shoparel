import axiosInstance, { microServices } from "../../../network/apis";

export const getLectureTypeApi = async () => {
  return await axiosInstance(
    "get",
    "/lectureType",
    {},
    {
      server: microServices.MASTER,
      successMessage: "get batch",
    }
  );
};
