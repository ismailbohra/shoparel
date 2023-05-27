import axiosInstance, { microServices } from "../../network/apis";

export const getProductApi = async (payload) => {
  // Customize the query parameters as needed
  const productId = payload.productId ? `productId=${payload.productId}` : "";
  const url = `/getProduct?${productId}`;

  return await axiosInstance("get", url, payload, {
    server: microServices.PRODUCT,
    successMessage: "Hello",
  });
};
export const getProductByIds = async (payload) => {
  
    return await axiosInstance("post", 'getProductById', payload, {
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
