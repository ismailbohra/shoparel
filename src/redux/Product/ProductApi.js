import axiosInstance, { microServices } from "../../network/apis";

export const getProductApi = async (payload) => {
  let url = "/getProduct";

  if (payload?.productId) {
    url += `?productId=${payload.productId}`;
  } else if (payload?.name) {
    url += `?name=${payload.name}`;
  } else if (payload?.price) {
    url += `?price=${payload.price}`;
  }

  if (payload?.order) {
    url += `&order=${payload.order}`;
  }

  if (payload?.sortBy) {
    url += `&sortBy=${payload.sortBy}`;
  }

  return await axiosInstance("get", url, payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};

export const getProductByIds = async (payload) => {
  return await axiosInstance("post", "getProductById", payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};

export const updateProductApi = async (payload) => {
  return await axiosInstance("put", "/updateProduct", payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};

export const createProductApi = async (payload) => {
  return await axiosInstance("post", "/createProduct", payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};

export const deleteProductApi = async (payload) => {
  return await axiosInstance("delete", "/deleteProduct", payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};
