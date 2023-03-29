import { Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function Home() {

  const [BatchName, setBatchName] = React.useState([]);
  const [Event, setEvent] = React.useState([]);
  const [SemesterId, setSemesterId] =React.useState([]);
  const [Tools, setTools] =React.useState([]);
  const [ViewEvent, setViewEvent] =React.useState([]);


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBatchName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeEvent = (event) => {
    const {
      target: { value },
    } = event;
    setEvent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChangeSemesterId = (event) => {
    const {
      target: { value },
    } = event;
    setSemesterId(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChangeTools = (event) => {
    const {
      target: { value },
    } = event;
    setTools(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChangeViewEvent = (event) => {
    const {
      target: { value },
    } = event;
    setViewEvent(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  
  return( <div style={{display:"flex", flexDirection:"column", gap:"30px"}} >
  <Card >
    <h2 className="card-header" style={{color: "red"}}>Event Creation</h2>
    <div style={{display: "flex"}}>
    
      <FormControl sx={{ m: 1, width: "100%" }} >
        <InputLabel size="small" id="demo-multiple-chip-label">
          Batch Name 
          <span style={{color: "red"}}>*</span>
        </InputLabel>
        <Select
          
          id="demo-multiple-chip"
          size="small"
          value={BatchName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Batch Name*" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name,I) => (
            <MenuItem
              key={I}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
      <div style={{display: "flex"}}>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel size="small" id="demo-multiple-chip-label">
      Event
      <span style={{color: "red"}}>*</span>
      
      </InputLabel>
        <Select
          
          id="demo-multiple-chip"
          size="small"
          value={Event}
          onChange={handleChangeEvent}
          input={<OutlinedInput id="select-multiple-chip" label="Event*" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name,I) => (
            <MenuItem
              key={I}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <Button variant="contained" style={{width: 100 , display:"flex", justifyContent: "center", margin:"10px"}}>Submit</Button>
    </Card>


    <Card>
    <h2 className="card-header" style={{color: "red"}}>Event</h2>
    <div style={{display: "flex"}}>
    
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel size="small" id="demo-multiple-chip-label">
          Semester ID - Subject 
          <span style={{color: "red"}}>*</span>
        </InputLabel>
        <Select
          
          id="demo-multiple-chip"
          size = "small"
          value={SemesterId}
          onChange={handleChangeSemesterId}
          input={<OutlinedInput id="select-multiple-chip" label="Semester ID - Subject*" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name,I) => (
            <MenuItem
              key={I}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
      <div style={{display: "flex"}}>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel size="small" id="demo-multiple-chip-label">
      Tools
      <span style={{color: "red"}}>*</span>
      
      </InputLabel>
        <Select
          
          id="demo-multiple-chip"
          size="small"
          value={Tools}
          onChange={handleChangeTools}
          input={<OutlinedInput id="select-multiple-chip" label="Tools*" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name,I) => (
            <MenuItem
              key={I}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>


      <div style={{display: "flex"}}>
    
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel size="small" id="demo-multiple-chip-label">
          Event
          <span style={{color: "red"}}>*</span>
        </InputLabel>
        <Select
          
          id="demo-multiple-chip"
          size="small"
          value={ViewEvent}
          onChange={handleChangeViewEvent}
          input={<OutlinedInput id="select-multiple-chip" label="Event *" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name,I) => (
            <MenuItem
              key={I}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>


    <Button variant="contained" style={{width: 100 , display:"flex", justifyContent: "center", margin:"10px"}}>Submit</Button>
    </Card>

  </div>
  );
}

export default Home;
