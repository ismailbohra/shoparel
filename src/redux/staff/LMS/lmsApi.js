import axiosInstance, { microServices } from "../../../network/apis";

export const LeaveApplyApi = async (payload) => {
  return await axiosInstance("post", "/leave", payload, {
    server: microServices.LEAVE,
    successMessage: "leave apply",
  });
};
export const LeaveGetApi = async (userData) => {
  const url = userData?.staffId
    ? `/leave?staffId=${userData.staffId}`
    : `/leave?staffId=0`;
  return await axiosInstance("get", url, userData, {
    server: microServices.LEAVE,
    successMessage: "leave get",
  });
};

export const LmsReportGetApi = async (userData) => {
  const url = userData?.staffId
    ? `?staffId=${userData.staffId}`
    : `/staffId?=0`;
  return await axiosInstance("get", url, userData, {
    server: microServices.LEAVE,
    successMessage: "lms get",
  });
};

export const FacultyAssignmentGetApi = async (userData) => {
  let url;
  if (userData?.staffId) {
    url = userData?.staffId ? `?assign_faculty_id=${userData.staffId}` : `/`;
  }
  if (userData?.applyId) {
    url = `?applyId=${userData.applyId}`;
  }
  return await axiosInstance("get", `facultyApproval${url}`, userData, {
    server: microServices.LEAVE,
    successMessage: "facultyAssignment get",
  });
};

export const FacultyAssignmentApproveApi = async (userData) => {
  return await axiosInstance("put", `facultyApproval`, userData, {
    server: microServices.LEAVE,
    successMessage: "facultyAssignment get",
  });
};

export const FacultyAssignmentUpdateApi = async (userData) => {
  return await axiosInstance("put", `newFacultyApproval`, userData, {
    server: microServices.LEAVE,
    successMessage: "facultyAssignment update",
  });
};

export const LeaveGetHodApprovalApi = async (userData) => {
  const url = userData?.department
    ? `/hodApproval?department=${userData.department}`
    : `/hodApproval?department=0`;
  return await axiosInstance(
    "get",
    url,
    {},
    {
      server: microServices.LEAVE,
      successMessage: "leave get",
    }
  );
};

export const LeaveUpdateHodApprovalApi = async (userData) => {
  const url = `/hodApproval`;
  return await axiosInstance("put", url, userData, {
    server: microServices.LEAVE,
    successMessage: "leave get",
  });
};



export const AddStudentApi = async (userData) => {
  const url = `/student`;
  return await axiosInstance("post" , url , userData , {
    server: microServices.TEST,
    successMessage: "Student Added Sussefully",
  })
}

export const GetCoursesApi = async ()=>{
  const url = `/master/courses`;
  return await axiosInstance("get" , url , {} ,{
    server: microServices.TEST,
    successMessage: "Courses fetched",
  })
}
export const academicSessionApi = async ()=>{
  const url = `/academicSession`;
  return await axiosInstance("get" , url , {} ,{
    server: microServices.TEST,
    successMessage: "Courses fetched",
  })
}
export const studentSessionApi = async ()=>{
  const url = `/studentSession`;
  return await axiosInstance("get" , url , {} ,{
    server: microServices.TEST,
    successMessage: "Courses fetched",
  })
}
export const DutyAssignmentApi = async (userData) => {
  const url = userData?.department
    ? `/staff?department=${userData.department}`
    : `/staff?department=0`;
  return await axiosInstance(
    "get",
    url,
    {},
    {
      server: microServices.STAFF,
      successMessage: "leave get",
    }
  );
};


export const dutyAssingedApi = async (payload) => {
  return await axiosInstance("post", "/admin/assignRole", payload, {
    server: microServices.TEST,
    successMessage: "success",
  });
};

export const staffByRolesApi = async (payload) => {
  return await axiosInstance("post", "/admin/getStaffByRole", payload, {
    server: microServices.Test,
    successMessage: "sucess",
  });
};

export const unassignRoleApi = async (payload) => {
  return await axiosInstance("post", "/admin/unassignRole", payload, {
    server: microServices.TEST,
    successMessage: "success",
  });
};
