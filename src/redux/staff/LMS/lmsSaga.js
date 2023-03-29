import * as ACTIONS from "./lmsAction";
import * as TYPES from "./lmsType";
import * as API from "./lmsApi";
import * as MSG from "./lmsMessage";
import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  dispatchToasterError,
  dispatchToasterSuccess,
} from "../../../utils/Shared";

export function* leaveApplySaga(action) {
  try {
    yield call(API.LeaveApplyApi, action.paylode);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    dispatchToasterSuccess(MSG.applyLeaveSuccess);
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message || MSG.applyLeaveFaild);
  }
}

export function* leaveGetSaga(action) {
  try {
    const response = yield call(API.LeaveGetApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield console.log(response);
    yield put(ACTIONS.leaveGetRes(response));
  } catch (err) {
    dispatchToasterError(err?.response?.data?.message);
  }
}

export function* leaveGetHodApprovalSaga(action) {
  try {
    const response = yield call(API.LeaveGetHodApprovalApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield put(ACTIONS.leaveGetHodApprovalRes(response));
  } catch (err) {
    console.log(err);
    dispatchToasterError(err?.response?.data?.message);
  }
}

export function* lmsReportSaga(action) {
  try {
    const response = yield call(API.LmsReportGetApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield put(ACTIONS.lmsReportGetRes(response));
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* facultyAssignmentSaga(action) {
  try {
    const response = yield call(API.FacultyAssignmentGetApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    yield put(ACTIONS.FacultyAssignmentGetRes(response));
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* facultyAssignmentApproveSaga(action) {
  try {
    const response = yield call(
      API.FacultyAssignmentApproveApi,
      action.payload
    );
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    if (action.payload.status == "APPROVED") {
      dispatchToasterSuccess(MSG.approved);
    }
    if (action.payload.status == "REJECTED") {
      dispatchToasterError(MSG.reject);
    }
    yield put(ACTIONS.FacultyAssignmentApprovalRes(action.payload));
  } catch (err) {
    console.log(err);
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* hodApproveSaga(action) {
  try {
    const response = yield call(API.LeaveUpdateHodApprovalApi, action.payload);
    if (action.successCallback) {
      yield call(action.successCallback);
    }
    if (action.payload.hod_approval == "APPROVED") {
      dispatchToasterSuccess(MSG.approved);
    }
    if (action.payload.hod_approval == "REJECTED") {
      dispatchToasterError(MSG.reject);
    }
    yield put(ACTIONS.hodApproveRes(action.payload));
  } catch (err) {
    console.log(err);
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* facultyAssignmentUpdateSaga(action) {
  try {
    yield call(API.FacultyAssignmentUpdateApi, action.payload);
    yield dispatchToasterSuccess(MSG.facultyUpdated);
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* DutyAssignmentSaga(action) {
  try {
    const response = yield call(API.DutyAssignmentApi, action.payload);
    console.log(response)
    yield put(ACTIONS.dutyRes(response));
    
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* dutyAssingedsaga(action) {
  try {
    const response = yield call(API.dutyAssingedApi, action.payload);
    yield put(ACTIONS.duty_Assinged_role_res(response));
    
  } catch (err) {
    dispatchToasterError(
      err?.response?.data?.message || MSG.internalServerError
    );
  }
}

export function* staffByRolessaga(action) {
  try{
    const response = yield call(API.staffByRolesApi, action.payload);
    yield put(ACTIONS.staff_by_roles_res(response));
  } catch(err) {
    dispatchToasterError(
      err?.response?.data.message || MSG.internalServerError
    );
  }
}

export function* unassignRolesaga(action) {
  try{
    const response = yield call(API.unassignRoleApi, action.payload);
    yield put(ACTIONS.unassign_role_res(response));
  } catch(err) {
    dispatchToasterError(
      err?.response?.data.message || MSG.internalServerError
    );
  }
}

export function* lmsSagas() {
  yield all([
    takeLatest(TYPES.LEAVE_APPLY_REQ, leaveApplySaga),
    takeLatest(TYPES.LMS_RREPORT_GET_REQ, lmsReportSaga),
    takeLatest(TYPES.LEAVE_GET_REQ, leaveGetSaga),
    takeLatest(TYPES.FACULTY_ASSIGNMENT_GET_REQ, facultyAssignmentSaga),
    takeLatest(TYPES.LEAVE_GET_HODAPPROVAL_REQ, leaveGetHodApprovalSaga),
    takeLatest(TYPES.LEAVE_UPDATE_HODAPPROVAL_REQ, hodApproveSaga),
    takeLatest(
      TYPES.FACULTY_ASSIGNMENT_UPDATE_REQ,
      facultyAssignmentUpdateSaga
    ),
    takeLatest(
      TYPES.FACULTY_ASSIGNMENT_APPROVE_REQ,
      facultyAssignmentApproveSaga
    ),
    takeLatest(TYPES.DUTY_ASSINGNMENT_REQ, DutyAssignmentSaga),
    takeLatest(TYPES.DUTY_ASSINGNED_REQ, dutyAssingedsaga),
    takeLatest(TYPES.STAFF_BY_ROLES_REQ , staffByRolessaga),
    takeLatest(TYPES.UNASSIGN_ROLE_REQ , unassignRolesaga),
  ]);
}
