import axiosInstance, { microServices } from "../../../network/apis";

export const getTimeSlotApi = async () => {
  return await axiosInstance(
    "get",
    "/timeSlots",
    {},
    {
      server: microServices.MASTER,
      successMessage: "get TimeSlot",
    }
  );
};
