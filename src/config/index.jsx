export default {
  apiGateway: {
    TEST: "https://shoparel-production.up.railway.app/v1",
    USER: "https://shoparel-production.up.railway.app/v1/user",
    PRODUCT:"https://shoparel-production.up.railway.app/v1/product",
    ORDER:"https://shoparel-production.up.railway.app/v1/order",
    ADMIN:"https://shoparel-production.up.railway.app/v1/admin",
  },
  waste_url: {
    ADMIN: process.env.REACT_APP_WASTENOTGLOBAL_API,
  },
};
