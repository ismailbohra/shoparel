import { Box, createTheme, Step, StepButton, Stepper, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {Button} from "@mui/material"
import BasicInformation, { basic_information_initial_values } from "./basicInformation";
import PersonalInformation, { personal_information_initial_values } from "./personalInformation";
import "./addStudent.scss"
import AcademicInfromation, { academic_information_initial_values } from "./academicInfromation";
import { Form, Formik } from "formik";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getDepartmentReq } from "../../../../redux/shared/department/action";
import { addStudentValidation } from "../../../../utils/validations";
import { academicSessionReq, addStudentReq, coursesReq, studentSessionReq } from "../../../../redux/staff/LMS/lmsAction";
import PropTypes from "prop-types";
import { dispatchToasterError } from "../../../../utils/Shared";
import { theme } from "../../../../App";




const initailValues = {...basic_information_initial_values ,
  ...personal_information_initial_values,
  ...academic_information_initial_values ,
};


const Home=props=>{

    const [activeStep , setActiveStep]= useState(0);
    const [completed , setCompleted] = useState({});
    
    
    
    const steps = ["Basic Information" , "Personal Information" , "Academic Information"];
    

    function allStepsCompleted(){
        return Object.keys(completed).length === steps.length;
    }
    
    function handleBack(){
        setActiveStep(activeStep-1);
    }
    
    function handleComplete(){
      const newCompleted = completed;
      newCompleted[activeStep]  = true;
      setCompleted(newCompleted);
      handleNext();
    }
    
    function handleStep(step){
      return  ()=>setActiveStep(step);
    }
    
    function handleNext(){
      const newActiveStep = (activeStep === steps.length-1 && !allStepsCompleted())?
      steps.findIndex((step, i)=>!(i in completed))
      : activeStep +1;
      setActiveStep(newActiveStep);
    }
    
    function onSubmit (values){
      console.log(values);
      props.addStudentReq(values);
    }
    
    
    const stepComponents = [
      <BasicInformation {...props} />,
      <PersonalInformation {...props} /> ,
      <AcademicInfromation {...props} />
    
    ];
    
    useEffect(()=>{
      props.departmentGetReq({}, console.log("deparments fetched"));
      props.coursesReq();
      props.academicSessionReq();
      props.studentSessionReq();
      console.log(props);
    }, [])
    
    
    return (
        <Card>
            <Card.Header>
            <div>
              <h3 style={{ color: theme.palette.status.danger }}>Counselling Information</h3>
            </div>
            </Card.Header>
            <Card.Body>
                <div className="formHolder">
                <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        { (
          <React.Fragment>
            <Formik initialValues={initailValues} onSubmit={onSubmit}
             validationSchema={addStudentValidation}
             validateOnChange={false}
             >

            {formikProps=>{
              console.log(formikProps);
              return(<Form>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                  {stepComponents[activeStep]}

              </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant = "contained" 
                >
                Previous
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              
                    {( Object.keys(completed).length === steps.length - 1 && activeStep == steps.length - 1)?
                  <Button onClick={e=>{
                    formikProps.validateForm().then(data=>{
                      
                      console.log(data)
                      var msg = "";

                      Object.keys(data).forEach(item=>{
                        msg = `${msg}\n${item} is invalid`;
                      })
                      
                      dispatchToasterError(msg);
                    });
                    formikProps.submitForm();
                  }}  variant = "contained" disabled = {completed[activeStep]?true:false} >Finish  </Button>:
                  <Button onClick={handleComplete} sx={{ mr: 1 }}  variant = "contained" >Next</Button>
                }
            </Box>
          </Form>)}}
          </Formik>
          </React.Fragment>
        )}
      </div>
    </Box>
    </div>
            </Card.Body>
        </Card>
    );
}

const mapDispatchToProps =dispatch=>({
  departmentGetReq: bindActionCreators(getDepartmentReq, dispatch),
  addStudentReq: bindActionCreators(addStudentReq , dispatch),
  coursesReq: bindActionCreators(coursesReq , dispatch),
  academicSessionReq : bindActionCreators(academicSessionReq , dispatch),
  studentSessionReq : bindActionCreators(studentSessionReq , dispatch),
});

const mapStateToProps= state=>({
  departmentList : state.Department.departmentList,
  coursesList : state.LMS.Courses,
  academicSessionList : state.LMS.AcademicSessionList,
  studentSessionList : state.LMS.StudentSessionList,
  
})

// Home.propTyes = {
//   departmentList : PropTypes.array;
// }


export default connect(mapStateToProps,mapDispatchToProps)(Home);


