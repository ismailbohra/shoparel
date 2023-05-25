export default {
  apiGateway: {
    TEST: "http://localhost:5000/v1",
    USER: "http://localhost:5000/v1/user",
    PRODUCT:"http://localhost:5000/v1/product",
    ORDER:"http://localhost:5000/v1/order",
    ADMIN:"http://localhost:5000/v1/admin",
  },
  waste_url: {
    ADMIN: process.env.REACT_APP_WASTENOTGLOBAL_API,
  },
};
