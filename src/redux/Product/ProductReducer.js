import * as types from "./ProductType";

const initialState = {
  products: [],
  loading: false,
  error: null,
  allProducts: null,
  singleProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_RESP:
      return handleGetProductResponse(state, action);
    case types.UPDATE_PRODUCT_RESP:
      return handleUpdateProductResponse(state, action);
    case types.CREATE_PRODUCT_RESP:
      return handleCreateProductResponse(state, action);
    case types.DELETE_PRODUCT_RESP:
      return handleDeleteProductResponse(state, action);
    case types.GET_PRODUCT_BYID_RESP:
      return handleGetProductByIdProductResponse(state, action);
    default:
      return state;
  }
};

const handleGetProductResponse = (state, action) => {
  let products = [];
  let allProducts = [];
  action.payload.data.forEach((product) => {
    // Customize the mapping logic based on your product structure
    const temp = {
      // Map the properties from the product object
      // Example: name: product.name
    };
    products.push(temp);
    allProducts.push(product);
  });
  return {
    ...state,
    products: products,
    allProducts: allProducts,
  };
};

const handleUpdateProductResponse = (state, action) => {
  // Handle the logic for UPDATE_PRODUCT_RESP case
  return state;
};

const handleCreateProductResponse = (state, action) => {
  // Handle the logic for CREATE_PRODUCT_RESP case
  return state;
};

const handleDeleteProductResponse = (state, action) => {
  // Handle the logic for DELETE_PRODUCT_RESP case
  return state;
};
const handleGetProductByIdProductResponse = (state, action) => {
  const temp=[...action.payload.data]
  return {
    ...state,
    products:temp
  };
};

export default reducer;
