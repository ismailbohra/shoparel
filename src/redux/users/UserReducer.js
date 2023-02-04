import { STUDENT_LOGIN_EMAIL_RESP, STAFF_LOGIN_EMAIL_RESP } from "./UserType";

const INITIAL_STATE = {
  userProfile: {
    userType: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    data: {},
  },
};

const setUser = (state, action) => {
  const userProfile = {
    userType: action.payload.data.userType || "",
    firstName: action.payload.data.firstName || "",
    middleName: action.payload.data.middleName || "",
    lastName: action.payload.data.lastName || "",
    email: action.payload.data.email || "",
    data: action.payload.data,
  };
  return {
    userProfile: userProfile,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_EMAIL_RESP:
      return setUser(state, action);
    case STAFF_LOGIN_EMAIL_RESP:
      return setUser(state, action);
    default:
      return state;
  }
};
