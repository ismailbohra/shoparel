import axiosInstance, { microServices } from "../../../network/apis";

export const LeaveApplyApi = async (payload) => {
  return await axiosInstance("post", "/leave", payload, {
    server: microServices.LEAVE,
    successMessage: "leave apply",
  });
};
export const LeaveGetApi = async (userData) => {
  return await axiosInstance("get", "/leave", userData, {
    server: microServices.LEAVE,
    successMessage: "leave get",
  });
};

export const deleteLeaveApi = async (id) => {
  console.log("deleteLeaveApi", id);
  return await axiosInstance("delete", `/leave/?applyId=${id}`, id, {
    server: microServices.LEAVE,
    successMessage: "Hello",
  });
};

// export const updateLeaveApi = async (userData) => {
//   return await axiosInstance("put", "/leave", userData, {
//     server: microServices.TIKIT_TEST,
//     successMessage: "Hello",
//   });
// };
