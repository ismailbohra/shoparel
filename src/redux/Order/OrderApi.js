import axiosInstance, { microServices } from "../../network/apis";

export const getOrderApi = async (payload) => {
  const orderId=(payload.orderId)?`orderId=${payload.orderId}`:''
  const userId=(payload.userId)?`userId=${payload.userId}`:''
  const url=`/getOrder?${orderId}&${userId}`
  return await axiosInstance("get", url, payload,
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


