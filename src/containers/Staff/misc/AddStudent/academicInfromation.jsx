import { Card, FormControl, FormControlLabel, FormHelperText, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react'
import { board10Name, board12Name, otherCourse, universityList } from './costansts';
import { useFormikContext } from 'formik';
import dayjs from 'dayjs';

export const academic_information_initial_values = {
migrationNo:"",
board12Name:"",
board12Year:"",
board12Physics:"",
board12Chemistry:"",
board12Maths:"",
board12total:"",
board12Maxmarks:"",
board10Name:"",
board10Year:"",
board10Physics:"",
board10Chemistry:"",
board10Maths:"",
board10total:"",
board10Maxmarks:"",
board10Cgpa:"",
otherCourse:"",
otherYear:"",
otherUni:"",
otherCgpa:"",
Jee_rollNo:"",
Jee_marks:"",
Jee_rank:"",
gate_rollNo:"",
gate_marks:"",
gate_percentile:"",
gate_rank:"",
counselling_staff : JSON.parse(localStorage.userData).staffId,
};





function AcademicInfromation() {
  const formik = useFormikContext();
  const [qualified , set_qualified] = useState({qulified_12th:true ,other_course: true , jee : true , gate : true})
  useEffect(()=>{console.log(formik.values)}, [formik]);

  useEffect(()=>{
    if (!qualified.qulified_12th){
      formik.setFieldValue("board12Name" , "");
      formik.setFieldValue("board12Year" , "");
      formik.setFieldValue("board12Physics" , "");
      formik.setFieldValue("board12Chemistry" , "");
      formik.setFieldValue("board12Maths" , "");
      formik.setFieldValue("board12total" , "");
      formik.setFieldValue("board12Maxmarks" , "");
    }
    if (!qualified.other_course){
      formik.setFieldValue("otherCourse" , "");
      formik.setFieldValue("otherYear" , "");
      formik.setFieldValue("otherUni" , "");
      formik.setFieldValue("otherCgpa" , "");
    }
    if (!qualified.jee){
      formik.setFieldValue("Jee_rollNo" , "");
      formik.setFieldValue("Jee_marks" , "");
      formik.setFieldValue("Jee_rank" , "");
    }
    if (!qualified.gate){
      formik.setFieldValue("gate_rollNo" , "");
      formik.setFieldValue("gate_marks" , "");
      formik.setFieldValue("gate_percentile" , "");
      formik.setFieldValue("gate_rank" , "");
    }
  } , [qualified])

  return (
    <Card variant='outlined' className="academic_information">
      <Typography variant='h5' color="primary">Student Academic Information</Typography>
      <div className="form_elements">



        <TextField
            label="Migration Certificate Number"
            id="migrationNo"
            name="migrationNo"
            value={formik.values.migrationNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.migrationNo&&formik.errors.migrationNo)}
            helperText={formik.errors.migrationNo}
            size="small"
            sx = {{flexBasis:"calc(90% + 20px)!important"}}
            // type="number"
            required
          />
      </div>
    {/* ------------------------------------------------------------------------------------------ */}

    <Card variant='outlined' className="academics">
    <Typography variant='h6' color="primary">12<sup>th</sup> Class Information</Typography>
      <div className="form_elements">

        <FormControl
            sx={{ display: "flex", flexDirection: "coulumn" , flexBasis:"calc( 100% - 40px )!important" }}
          >
            <FormLabel size="small">    Did the Student completed 12<sup>th</sup>?</FormLabel>
            <RadioGroup row 
            value={qualified.qulified_12th}
            onChange={e=>set_qualified({...qualified , qulified_12th: eval(e.target.value)})}>
              <FormControlLabel
                value={true}
                size="small"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                value={false}
                size="small"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
          {/* ------------------------------------------------------------------------------------------ */}
        <FormControl fullWidth error={Boolean(formik.touched.board12Name && formik.errors.board12Name)} disabled={!qualified.qulified_12th}>
          <InputLabel size="small" id="board12Name_label" required>
            12<sup>th</sup> Board Name
          </InputLabel>
          <Select
            labelId="board12Name_label"
            id="board12Name"
            name="board12Name"
            value={formik.values.board12Name}
            onChange={formik.handleChange}
            label="12th board Name"
            size="small"
          >
            {board12Name.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{formik.touched.board12Name&&formik.errors.board12Name?formik.errors.board12Name:null}</FormHelperText>
        </FormControl>

        {/* ------------------------------------------------------------------------------------------ */}
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            id="board12Year"
            name="board12Year"
            value={formik.values.board12Year?dayjs(formik.values.board12Year):null}
            onChange={value=>formik.setFieldValue( "board12Year", parseInt(value.$y.toString()) )}
            label = "12th Passing Year"
            slotProps={{textField:{ size:"small" }}}
            views={["year"]}
            disabled={!qualified.qulified_12th}
            />
        </LocalizationProvider>


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Physics Marks"
            id="board12Physics"
            name="board12Physics"
            value={formik.values.board12Physics}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board12Physics&&formik.errors.board12Physics)}
            helperText={formik.errors.board12Physics}
            size="small"
            type="number"
            disabled={!qualified.qulified_12th}
          />


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Chemistry Marks"
            id="board12Chemistry"
            name="board12Chemistry"
            value={formik.values.board12Chemistry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board12Chemistry&&formik.errors.board12Chemistry)}
            helperText={formik.errors.board12Chemistry}
            size="small"
            type="number"
            disabled={!qualified.qulified_12th}
          />


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Maths Marks"
            id="board12Maths"
            name="board12Maths"
            value={formik.values.board12Maths}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board12Maths&&formik.errors.board12Maths)}
            helperText={formik.errors.board12Maths}
            size="small"
            type="number"
            disabled={!qualified.qulified_12th}
          />

        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Total Marks in 12th"
            id="board12total"
            name="board12total"
            value={formik.values.board12total}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board12total&&formik.errors.board12total)}
            helperText={formik.errors.board12total}
            size="small"
            type="number"
            disabled={!qualified.qulified_12th}
          />

        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Maximum Marks"
            id="board12Maxmarks"
            name="board12Maxmarks"
            value={formik.values.board12Maxmarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board12Maxmarks&&formik.errors.board12Maxmarks)}
            helperText={formik.errors.board12Maxmarks}
            size="small"
            type="number"
            disabled={!qualified.qulified_12th}
          />

        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Percentage"
            value={(formik.values.board12total/formik.values.board12Maxmarks)*100}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            size="small"
            type="number"
            disabled
          />

        {/* ------------------------------------------------------------------------------------------ */}
      </div>
      </Card>
    {/* ------------------------------------------------------------------------------------------ */}

    <Card variant='outlined' className="academics">
    <Typography variant='h6' color="primary">10<sup>th</sup> Class Information</Typography>
      <div className="form_elements">

        <FormControl fullWidth required error={Boolean(formik.touched.board10Name && formik.errors.board10Name)} >
          <InputLabel size="small" id="board10Name_label">
            10<sup>th</sup> Board Name
          </InputLabel>
          <Select
            labelId="board10Name_label"
            id="board10Name"
            name="board10Name"
            value={formik.values.board10Name}
            onChange={formik.handleChange}
            label="10th board Name"
            size="small"
          >
            {board10Name.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{formik.touched.board10Name&&formik.errors.board10Name?formik.errors.board10Name:null}</FormHelperText>
        </FormControl>

        {/* ------------------------------------------------------------------------------------------ */}
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            id="board10Year"
            name="board10Year"
            value={formik.values.board10Year?dayjs(formik.values.board10Year):null}
            onChange={value=>formik.setFieldValue( "board10Year", parseInt(value.$y.toString()) )}
            label = "10th Passing Year"
            slotProps={{textField:{ size:"small" }}}
            views={["year"]}
            />
        </LocalizationProvider>


        {/* ------------------------------------------------------------------------------------------ */}


        <TextField
            label="Physics Marks"
            id="board10Physics"
            name="board10Physics"
            value={formik.values.board10Physics}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10Physics&&formik.errors.board10Physics)}
            helperText={formik.errors.board10Physics}
            size="small"
            type="number"
          />


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Chemistry Marks"
            id="board10Chemistry"
            name="board10Chemistry"
            value={formik.values.board10Chemistry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10Chemistry&&formik.errors.board10Chemistry)}
            helperText={formik.errors.board10Chemistry}
            size="small"
            type="number"
          />


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Maths Marks"
            id="board10Maths"
            name="board10Maths"
            value={formik.values.board10Maths}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10Maths&&formik.errors.board10Maths)}
            helperText={formik.errors.board10Maths}
            size="small"
            type="number"
          />

        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Total Marks in 10th"
            id="board10total"
            name="board10total"
            value={formik.values.board10total}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10total&&formik.errors.board10total)}
            helperText={formik.errors.board10total}
            size="small"
            type="number"
          />

        {/* ------------------------------------------------------------------------------------------ */}


        <TextField
            label="Maximum Marks"
            id="board10Maxmarks"
            name="board10Maxmarks"
            value={formik.values.board10Maxmarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10Maxmarks&&formik.errors.board10Maxmarks)}
            helperText={formik.errors.board10Maxmarks}
            size="small"
            type="number"
          />


        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Total CGPA"
            id="board10Cgpa"
            name="board10Cgpa"
            value={formik.values.board10Cgpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.board10Cgpa&&formik.errors.board10Cgpa)}
            helperText={formik.errors.board10Cgpa}
            size="small"
            type="number"
            />

            </div>
          </Card>

        {/* ------------------------------------------------------------------------------------------ */}

        <Card variant='outlined' className="academics">
        <Typography variant='h6' color="primary">Other Courses Information</Typography>
      <div className="form_elements">
      <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" , flexBasis:"calc( 100% - 40px )!important" }}
          required
        >
          <FormLabel size="small">    Did the Student completed any other course?</FormLabel>
          <RadioGroup row 
          value={qualified.other_course}
          onChange={e=>set_qualified({...qualified , other_course: eval(e.target.value)})}>
            <FormControlLabel
              value={true}
              size="small"
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              size="small"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        {/* ------------------------------------------------------------------------------------------ */}

            
        <FormControl fullWidth error={Boolean(formik.touched.otherCourse && formik.errors.otherCourse)} disabled={!qualified.other_course}>
          <InputLabel size="small" id="otherCourse_label">
            Other Course Completed
          </InputLabel>
          <Select
            labelId="otherCourse_label"
            id="otherCourse"
            name="otherCourse"
            value={formik.values.otherCourse}
            onChange={formik.handleChange}
            label="Other Course Completed"
            size="small"
          >
            {otherCourse.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{formik.touched.otherCourse&&formik.errors.otherCourse?formik.errors.otherCourse:null}</FormHelperText>
        </FormControl>

        {/* ------------------------------------------------------------------------------------------ */}
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            id="otherYear"
            name="otherYear"
            value={formik.values.otherYear?dayjs(formik.values.otherYear):null}
            onChange={value=>formik.setFieldValue("otherYear" , parseInt(value.$y.toString()))}
            label = "Other Course Passing Year"
            slotProps={{textField:{ size:"small" }}}
            views={["year"]}
            disabled={!qualified.other_course}
            />
        </LocalizationProvider>


        {/* ------------------------------------------------------------------------------------------ */}

        <FormControl fullWidth error={Boolean(formik.touched.otherUni && formik.errors.otherUni)} disabled={!qualified.other_course}>
          <InputLabel size="small" id="otherUni_label">
            University
          </InputLabel>
          <Select
            labelId="otherUni_label"
            id="otherUni"
            name="otherUni"
            value={formik.values.otherUni}
            onChange={formik.handleChange}
            label="University"
            size="small"
          >
            {universityList.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{formik.touched.otherUni&&formik.errors.otherUni?formik.errors.otherUni:null}</FormHelperText>
        </FormControl>
        {/* ------------------------------------------------------------------------------------------ */}

        <TextField
            label="Total CGPA"
            id="otherCgpa"
            name="otherCgpa"
            value={formik.values.otherCgpa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.otherCgpa&&formik.errors.otherCgpa)}
            helperText={formik.errors.otherCgpa}
            size="small"
            type="number"
            disabled={!qualified.other_course}
            />
        </div>  
        </Card>


        {/* ------------------------------------------------------------------------------------------ */}
        {/* ------------------------------------------------------------------------------------------ */}
        <Card variant='outlined' className="academics">
        <Typography variant='h6' color="primary">JEE Information</Typography>
      <div className="form_elements">


        
      <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" , flexBasis:"calc( 100% - 40px )!important" }}
          required
        >
          <FormLabel size="small">    Does the Student has JEE marks?</FormLabel>
          <RadioGroup row 
          value={qualified.jee}
          onChange={e=>set_qualified({...qualified , jee: eval(e.target.value)})}>
            <FormControlLabel
              value={true}
              size="small"
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              size="small"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        {/* ------------------------------------------------------------------------------------------ */}


      <TextField
            label="JEE Roll Number"
            id="Jee_rollNo"
            name="Jee_rollNo"
            value={formik.values.Jee_rollNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.Jee_rollNo&&formik.errors.Jee_rollNo)}
            helperText={formik.errors.Jee_rollNo}
            size="small"
            type="number"
            disabled={!qualified.jee}
            />
            
            {/* ------------------------------------------------------------------------------------------ */}
      <TextField
            label="JEE Marks"
            id="Jee_marks"
            name="Jee_marks"
            value={formik.values.Jee_marks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.Jee_marks&&formik.errors.Jee_marks)}
            helperText={formik.errors.Jee_marks}
            size="small"
            type="number"
            disabled={!qualified.jee}
            />

      {/* ------------------------------------------------------------------------------------------ */}


      <TextField
            label="JEE Rank"
            id="Jee_rank"
            name="Jee_rank"
            value={formik.values.Jee_rank}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.Jee_rank&&formik.errors.Jee_rank)}
            helperText={formik.errors.Jee_rank}
            size="small"
            type="number"
            disabled={!qualified.jee}
            />


      </div>
      </Card>

      {/* ------------------------------------------------------------------------------------------ */}

      <Card variant='outlined' className="academics">
      <Typography variant='h6' color="primary">GATE Information</Typography>
      <div className="form_elements">

      <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" , flexBasis:"calc( 100% - 40px )!important" }}
          required
        >
          <FormLabel size="small">    Does the Student has GATE marks?</FormLabel>
          <RadioGroup row 
          value={qualified.gate}
          onChange={e=>set_qualified({...qualified , gate: eval(e.target.value)})}>
            <FormControlLabel
              value={true}
              size="small"
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value={false}
              size="small"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        {/* ------------------------------------------------------------------------------------------ */}


      <TextField
            label="GATE Roll Number"
            id="gate_rollNo"
            name="gate_rollNo"
            value={formik.values.gate_rollNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.gate_rollNo&&formik.errors.gate_rollNo)}
            helperText={formik.errors.gate_rollNo}
            size="small"
            type="number"
            disabled={!qualified.gate}
            />
            
            {/* ------------------------------------------------------------------------------------------ */}
      <TextField
            label="GATE Marks"
            id="gate_marks"
            name="gate_marks"
            value={formik.values.gate_marks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.gate_marks&&formik.errors.gate_marks)}
            helperText={formik.errors.gate_marks}
            size="small"
            type="number"
            disabled={!qualified.gate}
            />

      {/* ------------------------------------------------------------------------------------------ */}


      <TextField
            label="GATE Percentile"
            id="gate_percentile"
            name="gate_percentile"
            value={formik.values.gate_percentile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.gate_percentile&&formik.errors.gate_percentile)}
            helperText={formik.errors.gate_percentile}
            size="small"
            type="number"
            disabled={!qualified.gate}
            />

      {/* ------------------------------------------------------------------------------------------ */}


      <TextField
            label="GATE Rank"
            id="gate_rank"
            name="gate_rank"
            value={formik.values.gate_rank}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.touched.gate_rank&&formik.errors.gate_rank)}
            helperText={formik.errors.gate_rank}
            size="small"
            type="number"
            disabled={!qualified.gate}
            />


        {/* ------------------------------------------------------------------------------------------ */}

      </div>

      </Card>

    </Card>
  )
}

export default AcademicInfromation;