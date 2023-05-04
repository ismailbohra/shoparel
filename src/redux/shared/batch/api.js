import axiosInstance, { microServices } from "../../../network/apis";

export const getBatchApi = async (payload) => {
  const url = payload?.dept
    ? `academics/batch?departmentId=${payload.dept}`
    : "academics/batch?departmentId=0";
  return await axiosInstance("get", url, payload, {
    server: microServices.TIKIT_TEST,
    successMessage: "get batch",
  });
};

export const getAllBatchApi = async () => {
  return await axiosInstance(
    "get",
    "academics/batch",
    {},
    {
      server: microServices.TIKIT_TEST,
      successMessage: "get batch",
    }
  );
};

export const getStateListApi = async () => {
  return await axiosInstance(
    "get",
    
  )
}
