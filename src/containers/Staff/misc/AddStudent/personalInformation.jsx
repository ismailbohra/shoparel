import { Box, Card, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect } from 'react';
import { bloodGroup, category, fatherOccupation, guardianOccupation, motherOccupation, religion, states } from './costansts';
import { ErrorMessage, useFormikContext } from 'formik';
import dayjs from 'dayjs';


export const personal_information_initial_values = {
firstName:"",
middleName:"",
lastName:"",
aadhar:"",
email:"",
mobileNo:"",
gender:"",
dateOfBirth:"",
bloodGroup:"",
jk_migrant:"",
category:"",
caste:"",
religion:"",
minority:"",
handicap:"",
hostel:"",
hobbies:"",
domecileState:"",
addressPermanent:{
  street1:"",
  street2:"",
  city:"",
  district:"",
  pincode:"",
  state:"",
},
addressLocal:{
  street1:"",
  street2:"",
  city:"",
  district:"",
  pincode:"",
  state:"",
},
fatherName:"",
fatherMobileNo:"",
fatherMail:"",
fatherOccupation:"",
fatherOccDescription:"",
motherName:"",
motherMobileNo:"",
motherMail:"",
motherOccupation:"",
motherOccDescription:"",
guardianName:"",
guardianMobileNo:"",
guardianAddress:{
  street1:"",
  street2:"",
  city:"",
  district:"",
  pincode:"",
  state:"",
},
guardianMail:"",
guardianRelation:"",
guardianOccupation:"",
guardianOccDescription:"",
password:"",
is_refered:"1",
counselling_staff:JSON.parse(localStorage.userData).staffId,
};

function PersonalInformation() {
  const formik = useFormikContext();
  useEffect(()=>{console.log(formik.values)}, [formik]);
  return (
    <Card variant='outlined' className="personal_information">
      <Typography variant='h5' color="primary">Student Personal Information</Typography>
      <div className="form_elements">
        <TextField
          label="First Name"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.firstName && formik.errors.firstName
          )}
          helperText={<ErrorMessage name="firstName" />}
          size="small"
          required
        />
        {/* ----------------------------------------------------------------------- */}
        
        <TextField
          label="Middle Name"
          id="middleName"
          name="middleName"
          value={formik.values.middleName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.middleName && formik.errors.middleName
          )}
          helperText={<ErrorMessage name="middleName" />}
          size="small"
        />
        {/* ----------------------------------------------------------------------- */}
        <TextField
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.lastName && formik.errors.lastName
          )}
          helperText={<ErrorMessage name="lastName" />}
          size="small"
          required
        />
        {/* ----------------------------------------------------------------------- */}

        <TextField
          label="Aadhar Number"
          id="aadhar"
          name="aadhar"
          value={formik.values.aadhar}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.aadhar && formik.errors.aadhar
          )}
          helperText={<ErrorMessage name="aadhar" />}
          size="small"
          type="number"
          required
        />
        
        <TextField
          label="Email Id"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={<ErrorMessage name="email" />}
          size="small"
          type="email"
          required
        />
        {/* ------------------------------------------------------------- */}
        <TextField
          label="Mobile Number"
          id="mobileNo"
          name="mobileNo"
          value={formik.values.mobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.mobileNo && formik.errors.mobileNo
          )}
          helperText={<ErrorMessage name="mobileNo" />}
          size="small"
          type="number"
          required
        />
        {/* ----------------------------------------------------------------------------- */}
        <FormControl sx={{ display: "flex", flexDirection: "column" }} required>
          <FormLabel size="small">Gender</FormLabel>
          <RadioGroup
            row
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="FEMALE"
              size="small"
              control={<Radio size="small" />}
              label="Female"
            />
            <FormControlLabel
              value="MALE"
              size="small"
              control={<Radio size="small" />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              size="small"
              control={<Radio size="small" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        {/* ------------------------------------------------------------------- */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            size="small"
            label="Date of Birth"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formik.values.dateOfBirth?dayjs(formik.values.dateOfBirth):null}
            onChange={(value) =>{
              formik.setFieldValue("dateOfBirth", value.format("DD-MM-YYYY"));
              formik.setFieldValue("password", value.format("DD-MM-YYYY"));
            }}
            slotProps={{textField:{ size:"small" }}}
            shouldDisableDate={(date) => date > Date.now()}
          />
        </LocalizationProvider>
        {/* --------------------------------------------------------------- */}
        <FormControl
          fullWidth
          required
          error={Boolean(formik.touched.bloodGroup && formik.errors.bloodGroup)}
        >
          <InputLabel size="small" id="bloodGroup_label">
            Blood Group
          </InputLabel>
          <Select
            labelId="bloodGroup_label"
            id="bloodGroup"
            name="bloodGroup"
            onBlur={formik.handleBlur}
            value={formik.values.bloodGroup}
            onChange={formik.handleChange}
            label="Blood Group"
            size="small"
          >
            {bloodGroup.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.bloodGroup && formik.errors.bloodGroup
              ? formik.errors.bloodGroup
              : null}
          </FormHelperText>
        </FormControl>
        {/* ------------------------------------------------------------ */}
        <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" }}
          required
        >
          <FormLabel size="small">Migrant of J & K</FormLabel>
          <RadioGroup
            row
            id="jk_migrant"
            name="jk_migrant"
            value={formik.values.jk_migrant}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="YES"
              size="small"
              control={<Radio size="small" />}
              label="YES"
            />
            <FormControlLabel
              value="NO"
              size="small"
              control={<Radio size="small" />}
              label="NO"
            />
          </RadioGroup>
        </FormControl>
        {/* --------------------------------------------------------------------- */}
        <FormControl fullWidth required 
        error={Boolean(formik.touched.category && formik.errors.category)}>
          <InputLabel size="small" id="category_label">
            Category
          </InputLabel>
          <Select
            labelId="category_label"
            id="category"
            name="category"
            onBlur={formik.handleBlur}
            value={formik.values.category}
            onChange={formik.handleChange}
            label="Category"
            size="small"
          >
            {category.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.category && formik.errors.category
              ? formik.errors.category
              : null}
          </FormHelperText>
        </FormControl>
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Caste"
          id="caste"
          name="caste"
          value={formik.values.caste}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.caste && formik.errors.caste)}
          helperText={<ErrorMessage name="caste" />}
          size="small"
          required
        />
        {/* --------------------------------------------------------------------- */}
        <FormControl fullWidth required 
        error={Boolean(formik.touched.religion && formik.errors.religion)}>
          <InputLabel size="small" id="religion_label">
            Religion
          </InputLabel>
          <Select
            labelId="religion_label"
            id="religion"
            name="religion"
            onBlur={formik.handleBlur}
            value={formik.values.religion}
            onChange={e=>{
              formik.setFieldValue("religion"  , e.target.value )
              e.target.value === "Hindu"?formik.setFieldValue("minority","NO"):formik.setFieldValue("minority","YES")
            }}
            label="Religion"
            size="small"
          >
            {religion.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.religion && formik.errors.religion
              ? formik.errors.religion
              : null}
          </FormHelperText>
        </FormControl>
        {/* --------------------------------------------------------------------- */}
        <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" }}
          required
        >
          <FormLabel size="small">Minority</FormLabel>
          <RadioGroup
            row
            id="minority"
            name="minority"
            value={formik.values.minority}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="YES"
              size="small"
              control={<Radio size="small" />}
              label="YES"
            />
            <FormControlLabel
              value="NO"
              size="small"
              control={<Radio size="small" />}
              label="NO"
            />
          </RadioGroup>
        </FormControl>
        {/* --------------------------------------------------------------------- */}
        <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" }}
          required
        >
          <FormLabel size="small">Handicap</FormLabel>
          <RadioGroup
            row
            id="handicap"
            name="handicap"
            value={formik.values.handicap}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="YES"
              size="small"
              control={<Radio size="small" />}
              label="YES"
            />
            <FormControlLabel
              value="NO"
              size="small"
              control={<Radio size="small" />}
              label="NO"
            />
          </RadioGroup>
        </FormControl>
        {/* --------------------------------------------------------------------- */}
        <FormControl
          sx={{ display: "flex", flexDirection: "coulumn" }}
          required
        >
          <FormLabel size="small">Hostel Required</FormLabel>
          <RadioGroup
            row
            id="hostel"
            name="hostel"
            value={formik.values.hostel}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value="YES"
              size="small"
              control={<Radio size="small" />}
              label="YES"
            />
            <FormControlLabel
              value="NO"
              size="small"
              control={<Radio size="small" />}
              label="NO"
            />
          </RadioGroup>
        </FormControl>
        {/* --------------------------------------------------------------------- */}
        <TextField
          label="Hobbies"
          id="hobbies"
          name="hobbies"
          value={formik.values.hobbies}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.hobbies && formik.errors.hobbies)}
          helperText={<ErrorMessage name="hobbies" />}
          size="small"
        />
        {/* --------------------------------------------------------------------- */}
        <FormControl
          fullWidth
          required
          error={Boolean(formik.touched.domecileState && formik.errors.domecileState)}
        >
          <InputLabel size="small" id="domecileState_label">
            Domecile State
          </InputLabel>
          <Select
            labelId="domecileState_label"
            id="domecileState"
            name="domecileState"
            onBlur={formik.handleBlur}
            value={formik.values.domecileState}
            onChange={formik.handleChange}
            label="Domecile States"
            size="small"
          >
            {states.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.domecileState && formik.errors.domecileState
              ? formik.errors.domecileState
              : null}
          </FormHelperText>
        </FormControl>

        {/* --------------------------------------------------------------------- */}
        <Card variant='outlined' className="address_field">
        <Typography variant='h6' color="primary">Permanent Address</Typography>
          <div className="address_inputs">
            <TextField
              label="House Number"
              id="permanent_house_no"
              name="addressPermanent"
              value={formik.values.addressPermanent.street1}
              onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent , street1:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressPermanent" , {...formik.touched.addressPermanent , street1:true })}
              error={Boolean(
                formik.touched.addressPermanent?.street1 &&
                  formik.errors.addressPermanent?.street1
              )}
              helperText={<ErrorMessage name="addressPermanent">{`${formik.errors.addressPermanent?.street1}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="Street Name"
              id="permanent_street_name"
              name="addressPermanent"
              value={formik.values.addressPermanent.street2}
              onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent , street2:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressPermanent" , {...formik.touched.addressPermanent , street2:true })}
              error={Boolean(
                formik.touched.addressPermanent?.street2 &&
                  formik.errors.addressPermanent?.street2
              )}
              helperText={<ErrorMessage name="addressPermanent">{`${formik.errors.addressPermanent?.street2}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="City"
              id="permanent_city"
              name="addressPermanent"
              value={formik.values.addressPermanent.city}
              onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent , city:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressPermanent" , {...formik.touched.addressPermanent , city:true })}
              error={Boolean(
                formik.touched.addressPermanent?.city &&
                  formik.errors.addressPermanent?.city
              )}
              helperText={<ErrorMessage name="addressPermanent">{`${formik.errors.addressPermanent?.city}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="District"
              id="permanent_district"
              name="addressPermanent"
              value={formik.values.addressPermanent.district}
              onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent , district:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressPermanent" , {...formik.touched.addressPermanent , district:true })}
              error={Boolean(
                formik.touched.addressPermanent?.district &&
                  formik.errors.addressPermanent?.district
              )}
              helperText={<ErrorMessage name="addressPermanent">{`${formik.errors.addressPermanent?.district}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="Pincode"
              id="permanent_pincode"
              name="addressPermanent"
              value={formik.values.addressPermanent.pincode}
              onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent , pincode:parseInt(e.target.value)})}
              onBlur={e=>formik.setFieldTouched("addressPermanent" , {...formik.touched.addressPermanent , pincode:true })}
              error={Boolean(
                formik.touched.addressPermanent?.pincode &&
                  formik.errors.addressPermanent?.pincode
              )}
              helperText={<ErrorMessage name="addressPermanent">{`${formik.errors.addressPermanent?.pincode}`}</ErrorMessage>}
              size="small"
              type="number"
              required
            />

            <FormControl
              fullWidth
              required
              error={Boolean(formik.touched.addressPermanent?.state && formik.errors.addressPermanent?.state)}
            >
              <InputLabel size="small" id="permanent_state_label">
                Permanent State
              </InputLabel>
              <Select
                labelId="permanent_state_label"
                id="permanent_state"
                name="addressPermanent"
                onBlur={()=>formik.setFieldTouched("addressPermanent",{...formik.touched.addressPermanent ,state:true})}
                value={formik.values.addressPermanent?.state}
                onChange={e=>formik.setFieldValue("addressPermanent",{...formik.values.addressPermanent ,state:e.target.value})}
                label="Permanent State"
                size="small"
              >
                {states.map((item, i) => (
                  <MenuItem size="small" key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.addressPermanent?.state && formik.errors.addressPermanent?.state
                  ? formik.errors.addressPermanent?.state
                  : null}
              </FormHelperText>
            </FormControl>
          </div>
        </Card>
        {/* --------------------------------------------------------------------- */}

        <FormGroup className='checkAddress' sx={{ flexBasis: "100%!important" , maxWidth:'100%!important' }}>
          <FormControlLabel
            control={<Checkbox />}
            label="Check if Local Address and Permanent Address are same"
            onChange={(event) => {
              if (event.target.checked) {
                console.log(event.target.checked);
                formik.setFieldValue("addressLocal" , {...formik.values.addressPermanent});
                console.log(formik.values);
              }
            }}
          />
        </FormGroup>

        {/* --------------------------------------------------------------------- */}
        <Card variant='outlined' className="address_field">
        <Typography variant='h6' color="primary">Local Address</Typography>
          <div className="address_inputs">
            <TextField
              label="House Number"
              id="local_house_no"
              name="addressLocal"
              value={formik.values.addressLocal.street1}
              onChange={e=>formik.setFieldValue("addressLocal", {...formik.values.addressLocal , street1:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressLocal" , {...formik.touched.addressLocal , street1:true })}
              error={Boolean(
                formik.touched.addressLocal?.street1 && formik.errors.addressLocal?.street1
              )}
              helperText={<ErrorMessage name="addressLocal">{`${formik.errors.addressLocal?.street1}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="Street Name"
              id="local_street_name"
              name="addressLocal"
              value={formik.values.addressLocal.street2}
              onChange={e=>formik.setFieldValue("addressLocal", {...formik.values.addressLocal , street2:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressLocal" , {...formik.touched.addressLocal , street2:true })}
              error={Boolean(
                formik.touched.addressLocal?.street2 &&
                  formik.errors.addressLocal?.street2
              )}
              helperText={<ErrorMessage name="addressLocal">{`${formik.errors.addressLocal?.street2}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="City"
              id="local_city"
              name="addressLocal"
              value={formik.values.addressLocal.city}
              onChange={e=>formik.setFieldValue("addressLocal", {...formik.values.addressLocal , city:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressLocal" , {...formik.touched.addressLocal , city:true })}
              error={Boolean(
                formik.touched.addressLocal?.city &&
                  formik.errors.addressLocal?.city
              )}
              helperText={<ErrorMessage name="addressLocal">{`${formik.errors.addressLocal?.city}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="District"
              id="local_district"
              name="addressLocal"
              value={formik.values.addressLocal.district}
              onChange={e=>formik.setFieldValue("addressLocal", {...formik.values.addressLocal , district:e.target.value})}
              onBlur={e=>formik.setFieldTouched("addressLocal" , {...formik.touched.addressLocal , district:true })}
              error={Boolean(
                formik.touched.addressLocal?.district && formik.errors.addressLocal?.district
              )}
              helperText={<ErrorMessage name="addressLocal">{`${formik.errors.addressLocal?.district}`}</ErrorMessage>}
              size="small"
              required
            />
            <TextField
              label="Pincode"
              id="local_pincode"
              name="addressLocal"
              value={formik.values.addressLocal.pincode}
              onChange={e=>formik.setFieldValue("addressLocal", {...formik.values.addressLocal , pincode:parseInt(e.target.value)})}
              onBlur={e=>formik.setFieldTouched("addressLocal" , {...formik.touched.addressLocal , pincode:true })}
              error={Boolean(
                formik.touched.addressLocal?.pincode && formik.errors.addressLocal?.pincode
              )}
              helperText={<ErrorMessage name="addressLocal">{`${formik.errors.addressLocal?.pincode}`}</ErrorMessage>}
              size="small"
              type="number"
              required
            />

            <FormControl
              fullWidth
              required
              error={Boolean(formik.touched.addressLocal?.state && formik.errors.addressLocal?.state)}
            >
              <InputLabel size="small" id="local_state_label">
                Local State
              </InputLabel>
              <Select
                labelId="local_state_label"
                id="local_state"
                name="addressLocal"
                onBlur={()=>formik.setFieldTouched("addressLocal",{...formik.touched.addressLocal ,state:true})}
                value={formik.values.addressLocal?.state}
                onChange={e=>formik.setFieldValue("addressLocal",{...formik.values.addressLocal ,state:e.target.value})}
                label="Local State"
                size="small"
              >
                {states.map((item, i) => (
                  <MenuItem size="small" key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.addressLocal?.state && formik.errors.addressLocal?.state
                  ? formik.errors.addressLocal?.state
                  : null}
              </FormHelperText>
            </FormControl>
          </div>
        </Card>
      </div>

      <Typography variant='h5' color="primary">Parent's Information</Typography>

      <div className="form_elements">
        <TextField
          label="Father's Name"
          id="fatherName"
          name="fatherName"
          value={formik.values.fatherName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.fatherName && formik.errors.fatherName
          )}
          helperText={<ErrorMessage name="fatherName" />}
          size="small"
          required
        />
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Father's Mobile Number"
          id="fatherMobileNo"
          name="fatherMobileNo"
          value={formik.values.fatherMobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.fatherMobileNo &&
              formik.errors.fatherMobileNo
          )}
          helperText={<ErrorMessage name="fatherMobileNo" />}
          size="small"
          type="number"
          required
        />
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Father's Email"
          id="fatherMail"
          name="fatherMail"
          value={formik.values.fatherMail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.fatherMail && formik.errors.fatherMail
          )}
          helperText={<ErrorMessage name="fatherMail" />}
          size="small"
          type="email"
        />
        {/* --------------------------------------------------------------------- */}

        <FormControl
          fullWidth
          sx={{ maxWidth: "500px" }}
          required
          error={Boolean(formik.touched.fatherOccupation && formik.errors.fatherOccupation)}
        >
          <InputLabel size="small" id="fatherOccupation_label">
            Father's Occupation
          </InputLabel>
          <Select
            labelId="fatherOccupation_label"
            id="fatherOccupation"
            name="fatherOccupation"
            onBlur={formik.handleBlur}
            value={formik.values.fatherOccupation}
            onChange={formik.handleChange}
            label="Father's Occupation"
            size="small"
          >
            {fatherOccupation.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.fatherOccupation && formik.errors.fatherOccupation
              ? formik.errors.fatherOccupation
              : null}
          </FormHelperText>
        </FormControl>

        {/* --------------------------------------------------------------------- */}
        <TextField
          label="Father's Occupation Description"
          id="fatherOccDescription"
          name="fatherOccDescription"
          value={formik.values.fatherOccDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.fatherOccDescription &&
              formik.errors.fatherOccDescription
          )}
          helperText={<ErrorMessage name="fatherOccDescription" />}
          size="small"
          type="email"
          multiline
          required
        />

        {/* --------------------------------------------------------------------- */}
        <Divider className='divider'></Divider>
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Mother's Name"
          id="motherName"
          name="motherName"
          value={formik.values.motherName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.motherName && formik.errors.motherName
          )}
          helperText={<ErrorMessage name="motherName" />}
          size="small"
          required
        />
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Mother's Mobile Number"
          id="motherMobileNo"
          name="motherMobileNo"
          value={formik.values.motherMobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.motherMobileNo &&
              formik.errors.motherMobileNo
          )}
          helperText={<ErrorMessage name="motherMobileNo" />}
          size="small"
          type="number"
          required
        />
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Mother's Email"
          id="motherMail"
          name="motherMail"
          value={formik.values.motherMail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.motherMail && formik.errors.motherMail
          )}
          helperText={<ErrorMessage name="motherMail" />}
          size="small"
          type="email"
        />
        {/* --------------------------------------------------------------------- */}

        <FormControl
          fullWidth
          sx={{ maxWidth: "500px" }}
          required
          error={Boolean(formik.touched.motherOccupation && formik.errors.motherOccupation)}
        >
          <InputLabel size="small" id="motherOccupation_label">
            Mother's Occupation
          </InputLabel>
          <Select
            labelId="motherOccupation_label"
            id="motherOccupation"
            name="motherOccupation"
            onBlur={formik.handleBlur}
            value={formik.values.motherOccupation}
            onChange={formik.handleChange}
            label="Mother's Occupation"
            size="small"
          >
            {motherOccupation.map((item, i) => (
              <MenuItem size="small" key={i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched.motherOccupation && formik.errors.motherOccupation
              ? formik.errors.motherOccupation
              : null}
          </FormHelperText>
        </FormControl>

        {/* --------------------------------------------------------------------- */}
        <TextField
          label="Mother's Occupation Description"
          id="motherOccDescription"
          name="motherOccDescription"
          value={formik.values.motherOccDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.motherOccDescription &&
              formik.errors.motherOccDescription
          )}
          helperText={<ErrorMessage name="motherOccDescription" />}
          size="small"
          type="email"
          multiline
          required
        />

        {/* --------------------------------------------------------------------- */}
        <Divider className='divider'></Divider>
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Guardian's Name"
          id="guardianName"
          name="guardianName"
          value={formik.values.guardianName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.guardianName && formik.errors.guardianName
          )}
          helperText={<ErrorMessage name="guardianName" />}
          size="small"
        />
        {/* --------------------------------------------------------------------- */}

        <TextField
          label="Guardian's Mobile Number"
          id="guardianMobileNo"
          name="guardianMobileNo"
          value={formik.values.guardianMobileNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(
            formik.touched.guardianMobileNo &&
              formik.errors.guardianMobileNo
          )}
          helperText={<ErrorMessage name="guardianMobileNo" />}
          size="small"
        />
        {/* --------------------------------------------------------------------- */}


            <TextField
              label="Guardian's Email"
              id="guardianMail"
              name="guardianMail"
              value={formik.values.guardianMail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(
                formik.touched.guardianMail && formik.errors.guardianMail
              )}
              helperText={<ErrorMessage name="guardianMail" />}
              size="small"
              type="email"
            />
    
            {/* --------------------------------------------------------------------- */}
    
            <TextField
              label="Relation with Guardian"
              id="guardianRelation"
              name="guardianRelation"
              value={formik.values.guardianRelation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(
                formik.touched.guardianRelation && formik.errors.guardianRelation
              )}
              helperText={<ErrorMessage name="guardianRelation" />}
              size="small"
            />
    
            {/* --------------------------------------------------------------------- */}
    
            <FormControl
              fullWidth
              sx={{ maxWidth: "500px" }}
              error={Boolean(formik.touched.guardianOccupation && formik.errors.guardianOccupation)}
            >
              <InputLabel size="small" id="guardianOccupation_label">
                Guardian's Occupation
              </InputLabel>
              <Select
                labelId="guardianOccupation_label"
                id="guardianOccupation"
                name="guardianOccupation"
                onBlur={formik.handleBlur}
                value={formik.values.guardianOccupation}
                onChange={formik.handleChange}
                label="Guardian's Occupation"
                size="small"
              >
                {guardianOccupation.map((item, i) => (
                  <MenuItem size="small" key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.guardianOccupation &&
                formik.errors.guardianOccupation
                  ? formik.errors.guardianOccupation
                  : null}
              </FormHelperText>
            </FormControl>
    
            {/* --------------------------------------------------------------------- */}
            <TextField
              label="Guardian's Occupation Description"
              id="guardianOccDescription"
              name="guardianOccDescription"
              value={formik.values.guardianOccDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(
                formik.touched.guardianOccDescription && formik.errors.guardianOccDescription
              )}
              helperText={<ErrorMessage name="guardianOccDescription" />}
              size="small"
              type="email"
              multiline
            />



        {/* --------------------------------------------------------------------- */}
        <Card variant='outlined' className="address_field">
        <Typography variant='h6' color="primary">Guardian Address</Typography>
          <div className="address_inputs">
            <TextField
              label="House Number"
              id="guardian_house_no"
              name="guardianAddress"
              value={formik.values.guardianAddress.street1}
              onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress , street1:e.target.value})}
              onBlur={e=>formik.setFieldTouched("guardianAddress" , {...formik.touched.guardianAddress , street1:true })}
              error={Boolean(
                formik.touched.guardianAddress?.street1 && formik.errors.guardianAddress?.street1
              )}
              helperText={<ErrorMessage name="guardianAddress">{`${formik.errors.guardianAddress?.street1}`}</ErrorMessage>}
              size="small"
            />
            <TextField
              label="Street Name"
              id="guardian_street_name"
              name="guardianAddress"
              value={formik.values.guardianAddress.street2}
              onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress , street2:e.target.value})}
              onBlur={e=>formik.setFieldTouched("guardianAddress" , {...formik.touched.guardianAddress , street2:true })}
              error={Boolean(
                formik.touched.guardianAddress?.street2 &&
                  formik.errors.guardianAddress?.street2
              )}
              helperText={<ErrorMessage name="guardianAddress">{`${formik.errors.guardianAddress?.street2}`}</ErrorMessage>}
              size="small"
            />
            <TextField
              label="City"
              id="guardian_city"
              name="guardianAddress"
              value={formik.values.guardianAddress.city}
              onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress , city:e.target.value})}
              onBlur={e=>formik.setFieldTouched("guardianAddress" , {...formik.touched.guardianAddress , city:true })}
              error={Boolean(
                formik.touched.guardianAddress?.city &&
                  formik.errors.guardianAddress?.city
              )}
              helperText={<ErrorMessage name="guardianAddress">{`${formik.errors.guardianAddress?.city}`}</ErrorMessage>}
              size="small"
            />
            <TextField
              label="District"
              id="guardian_district"
              name="guardianAddress"
              value={formik.values.guardianAddress.district}
              onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress , district:e.target.value})}
              onBlur={e=>formik.setFieldTouched("guardianAddress" , {...formik.touched.guardianAddress , district:true })}
              error={Boolean(
                formik.touched.guardianAddress?.district &&
                 formik.errors.guardianAddress?.district
              )}
              helperText={<ErrorMessage name="guardianAddress">{`${formik.errors.guardianAddress?.district}`}</ErrorMessage>}
              size="small"
            />
            <TextField
              label="Pincode"
              id="guardian_pincode"
              name="guardianAddress"
              value={formik.values.guardianAddress.pincode}
              onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress , pincode:e.target.value})}
              onBlur={e=>formik.setFieldTouched("guardianAddress" , {...formik.touched.guardianAddress , pincode:true })}
              error={Boolean(
                formik.touched.guardianAddress?.pincode &&
                 formik.errors.guardianAddress?.pincode
              )}
              helperText={<ErrorMessage name="guardianAddress">{`${formik.errors.guardianAddress?.pincode}`}</ErrorMessage>}
              size="small"
              type="number"
            />

            <FormControl
              fullWidth
              error={Boolean(formik.touched.guardianAddress?.state &&
                 formik.errors.guardianAddress?.state)}
            >
              <InputLabel size="small" id="guardian_state_label">
                Guardian State
              </InputLabel>
              <Select
                labelId="guardian_state_label"
                id="guardian_state"
                name="guardianAddress"
                onBlur={()=>formik.setFieldTouched("guardianAddress",{...formik.touched.guardianAddress ,state:true})}
                value={formik.values.guardianAddress?.state}
                onChange={e=>formik.setFieldValue("guardianAddress",{...formik.values.guardianAddress ,state:e.target.value})}
                label="Guardian State"
                size="small"
              >
                {states.map((item, i) => (
                  <MenuItem size="small" key={i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {formik.touched.guardianAddress?.state && formik.errors.guardianAddress?.state
                  ? formik.errors.guardianAddress?.state
                  : null}
              </FormHelperText>
            </FormControl>
          </div>
        </Card>
        {/* --------------------------------------------------------------------- */}

      </div>
    </Card>
  );
}

export default PersonalInformation;