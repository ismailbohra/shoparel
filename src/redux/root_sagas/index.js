import { all } from "redux-saga/effects";
import { UserSagas } from "../users/UserSaga";
import { DepartmentSagas } from "../shared/department/saga";
import { FacultySagas } from "../shared/faculty/saga";
import { BatchSagas } from "../shared/batch/saga";
import { LeaveTypeSagas } from "../shared/leaveType/saga";
import { LectureTypeSagas } from "../shared/lectureType/saga";
import { TimeSlotSagas } from "../shared/timeSlot/saga";
import { lmsSagas } from "../staff/LMS/lmsSaga";
import { MessageSaga } from "../staff/Messaging/saga";

export function* watchSagas() {
  yield all([
    UserSagas(),
    DepartmentSagas(),
    FacultySagas(),
    BatchSagas(),
    LeaveTypeSagas(),
    LectureTypeSagas(),
    TimeSlotSagas(),
    lmsSagas(),
    MessageSaga(),
  ]);
}
