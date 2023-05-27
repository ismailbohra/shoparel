import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./Type";

const INITIAL_STATE = {
  orderId: "",
  productList: [],
  payment: {
    mode: "",
    amount: 0,
    status: "",
  },
  DeliveryInformation: {
    name: "",
    mobile: "",
    email: "",
    city: "",
    zipcode: "",
    state: "",
    address: "",
  },
};

const clearCart = (state, action) => {
  return {
    productList: [],
    ...state,
  };
};
const removeCart = (state, action) => {
  const productList = state.productList.filter(
    (item) => item.productId != action.payload.productId
  );
  return {
    productList: productList,
    ...state,
  };
};
const updateCart = (state, action) => {
  const existingIndex = state.productList.findIndex(
    (product) => product.productId === action.payload.productId
  );

  if (!action.payload.color) {
    // Object has no color property
    if (existingIndex !== -1) {
      // Product with the same ID exists in the cart, increase the quantity
      const updatedProductList = state.productList.map((product, index) => {
        if (index === existingIndex) {
          return {
            ...product,
            quantity: parseInt(product.quantity) + parseInt(action.payload.quantity),
          };
        }
        return product;
      });

      return {
        ...state,
        productList: updatedProductList,
      };
    } else {
      // Product with the same ID doesn't exist in the cart, add the product
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    }
  } else {
    // Object has a color property
    if (existingIndex !== -1) {
      // Product with the same ID exists in the cart
      const existingColorIndex = state.productList.findIndex(
        (product) =>
          product.productId === action.payload.productId &&
          product.color === action.payload.color
      );

      if (existingColorIndex !== -1) {
        // Color exists for the same product ID, increase the quantity of the existing product
        const updatedProductList = state.productList.map((product, index) => {
          if (index === existingColorIndex) {
            return {
              ...product,
              quantity: parseInt(product.quantity) + parseInt(action.payload.quantity),
            };
          }
          return product;
        });

        return {
          ...state,
          productList: updatedProductList,
        };
      } else {
        // Color is different, add a new object to the product list
        return {
          ...state,
          productList: [...state.productList, action.payload],
        };
      }
    } else {
      // Product with the same ID doesn't exist in the cart, add the product
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    }
  }
};




export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return updateCart(state, action);
    case REMOVE_FROM_CART:
      return removeCart(state, action);
    case CLEAR_CART:
      return INITIAL_STATE;
    default:
      return state;
  }
};
