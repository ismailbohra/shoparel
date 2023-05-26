import axiosInstance, { microServices } from "../../network/apis";

export const getOrderApi = async (payload) => {
  return await axiosInstance("get", "/getOrder", payload,
  {
    server: microServices.ORDER,
    successMessage: "Hello",
  }
  );
};

export const updateOrderApi = async (payload) => {
  return await axiosInstance("put", "/updateOrder", payload,
  {
    server: microServices.ORDER,
    successMessage: "Hello",
  });
};

export const createOrderApi = async (payload) => {
  return await axiosInstance("post", "/createOrder", payload,
  {
    server: microServices.ORDER,
    successMessage: "Hello",
  });
};

export const deleteOrderApi = async (payload) => {
  return await axiosInstance("delete", "/deleteOrder", payload,
  {
    server: microServices.ORDER,
    successMessage: "Hello",
  });
};


