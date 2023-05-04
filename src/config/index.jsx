export default {
  apiGateway: {
    TEST: "http://localhost:5000/v1",
    LEAVE: "http://localhost:5000/v1/lms",
    MASTERS: "http://localhost:5000/v1/master",
    STAFF: "http://localhost:5000/v1",
    STUDENT: "http://localhost:5000/v1/student",
    STATE: "https://api.countrystatecity.in/v1/",
  },
  waste_url: {
    ADMIN: process.env.REACT_APP_WASTENOTGLOBAL_API,
  },
};
