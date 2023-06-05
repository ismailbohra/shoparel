import {
  GET_USER_LIST_RESP,
  USER_LOGIN_EMAIL_RESP
} from "./UserType";

const INITIAL_STATE = {
  userList:[],
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
    ...state,
    userProfile: userProfile,
  };
};
const setUserList = (state, action) => {
  console.log('user reducer ')
return {
  ...state,
  userList:action.payload.data
}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_EMAIL_RESP:
      return setUser(state, action);
    case GET_USER_LIST_RESP:
      return setUserList(state, action);
    default:
      return state;
  }
};
