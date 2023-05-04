import {  Card, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import "./addStudent.scss";
import { addmission_rounds, courses, modes_of_addmission,  quotas_of_addmission } from './costansts';
import { useFormikContext } from 'formik';


export const basic_information_initial_values={
  userType:"STUDENT",
  password:"",
  quotaOfAdmission:"",
  mode_of_addmission:"",
  admissionRound:"",
  course:"",
  homeDept:"",
  studyDept:"",
  specialization:"",
  studentSession:"",
  academicSession:"",
}


function BasicInformation(props) {
  const formik = useFormikContext();
  
  
  const [input_option,set_input_option] = useState([
    {
      id : "quotaOfAdmission",
      required : true,
      label : "Quota of Addmission",
      options : ()=>quotas_of_addmission
    },
    {
      id : "mode_of_addmission",
      required : true,
      label : "Mode of Addmission",
      options : ()=>modes_of_addmission
    },
    {
      id : "admissionRound",
      required : true,
      label : "Addmission Round",
      options : ()=>addmission_rounds
    },
    {
      id : "course",
      required : true,
      label : "Course",
      options : ()=>{
        var options=[];
        props.coursesList.map(item=>{
          options.push({value : item.course_id , name : item.course_name});
        })
        return options;
      },
    },
    {
      id : "homeDept",
      required : true,
      label : "Home Department",
      options : ()=>{
        var options=[];
        props.departmentList.map(item=>{
          options.push({value : item.master_id , name : item.name});
        })
        return options;
      },
      onChange : e=>{ 
        formik.setFieldValue("studyDept", e.target.value);
        formik.setFieldValue("homeDept", e.target.value);
      }
    },
    {
      id : "studyDept",
      required : true,
      label : "Study Deparment",
      options : ()=>{
        var options=[];
        props.departmentList.map(item=>{
          options.push({value : item.master_id , name : item.name});
        })
        return options;
      },
      isDisabled:true
    },
    {
      id : "specialization",
      required : true,
      label : "Specialization",
      options : ()=>["","Yes","No"],
      isDisabled: true
    },
    {
      id : "studentSession",
      required : true,
      label : "Student Session",
      options : ()=>{
        var options=[];
        props.studentSessionList.map(item=>{
          options.push({value : item.student_session_id , name : item.name});
        })
        return options;
      },
    },
    {
      id : "academicSession",
      required : true,
      label : "Academic Session",
      options : ()=>{
        var options=[];
        props.academicSessionList.map(item=>{
          options.push({value : item.academic_session_id , name : item.academic_session});
        })
        return options;
      },
    },
    
  ]);

    useEffect(()=>{
      console.log(formik.values);

      if(["4","2"].includes(formik.values.course)){
        let temp_options = input_option;
        temp_options[6]= {...input_option[6] , isDisabled : false};
        set_input_option(temp_options);
      }else{
        let temp_options = input_option;
        temp_options[6]= {...input_option[6] , isDisabled : true};
        set_input_option(temp_options);
        formik.setFieldValue("specialization" , "");
      }
      
    }, [formik.values.course]);

    

  return (
    <Card variant='outlined' className="basic_information">
      <Typography variant='h5' color="primary">Student Basic Information</Typography>
      <div className="form_elements">
        {input_option.map((item, i) =>  (
          <FormControl fullWidth key={i} required error={Boolean(formik.touched[`${item.id}`]&&formik.errors[`${item.id}`])}>
            <InputLabel size="small" id={`${item.id}_label`}>{item.label}</InputLabel>
            <Select
              labelId={`${item.id}_label`}
              id={item.id}
              name={item.id}
              onBlur={formik.handleBlur}
              value={formik.values[`${item.id}`]}
              onChange={item.onChange?item.onChange:formik.handleChange}
              label={item.label}
              disabled={item.isDisabled}
              size="small"
            >
              {item.options().map((item, i) => (
                <MenuItem size="small" key={i} value={item.value?item.value:item}>
                  {item.name?item.name:item}
                </MenuItem>
              )
              )}
            </Select>
            <FormHelperText>{formik.touched[`${item.id}`]&&formik.errors[`${item.id}`]?formik.errors[`${item.id}`]:null}</FormHelperText>
          </FormControl>
        ))}
      </div>
    </Card>
  );
}

export default BasicInformation;