import * as LazyComponent from "../../utils/LazyLoaded";

export const miscRoutes = [
    

    {
        path : 'addStudents',
        component : LazyComponent.Misc_AddStudent,
        index : true,
    },
    {
        path : 'dutyAssignment',
        component : LazyComponent.Misc_DutyAssignement,
        index : true,
    },
    {
        path : 'refferdStudent',
        component : LazyComponent.Misc_RefferedStudent,
        index : true,
    },
    {
        path : 'viewStudents',
        component : LazyComponent.Misc_ViewStudent,
        index : true,
    },
    {
        path : 'verifyStudents',
        component : LazyComponent.Misc_VerifyStudent,
        index : true,
    },
    {
        path : 'rejectedStudents',
        component : LazyComponent.Misc_RejectedStudent,
        index : true,
    },


]