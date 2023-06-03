import axiosInstance, { microServices } from "../../network/apis";

export const postUserApi = async (payload) => {
  return await axiosInstance("post", "/registerUser", payload, {
    server: microServices.USER,
    successMessage: "Hello",
  });
};

//student login
export const loginUserEmailApi = async (payload) => {
  return await axiosInstance("post", "/login", payload, {
    server: microServices.USER,
    successMessage: "Hello",
  });
};

// update password student
export const changeStudentPassword = async (payload) => {
  return await axiosInstance("put", "student/changePassword", payload, {
    server: microServices.USER,
  });
};

// update password staff
export const changeStaffPassword = async (payload) => {
  return await axiosInstance("put", "staff/changePassword", payload, {
    server: microServices.USER,
  });
};
// export const getUserApi = async (config) => {
//   return await axios
//     .get('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => {
//       return resp.data;
//     });
// };

export const getNewUserApi = async (userData) => {
  // console.log(userData);
  return await axiosInstance("post", "/users", userData, {
    server: microServices.USER,
    successMessage: "Hello",
  });
};
// export const getNewUserApi = async (config) => {
//   return await axios
//     .put('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => {
//       return resp.data;
//     });
// };

export const deleteUserApi = async (id) => {
  console.log("deleteUserApi", id);
  return await axiosInstance("delete", `/users/${id}`, id, {
    server: microServices.USER,
    successMessage: "Hello",
  });
};

// export const deleteUserApi = async (id) => {
//   console.log(id);
//   return await axios
//     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((resp) => {
//       return resp.data;
//     });
// };

export const updateUserApi = async (userData) => {
  return await axiosInstance("put", "/users", userData, {
    server: microServices.USER,
    successMessage: "Hello",
  });
};
