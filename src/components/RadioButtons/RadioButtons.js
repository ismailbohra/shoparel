import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

export default function RowRadioButtonsGroup(props) {
  

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={props.defaultValue}
        onChange={props.handleAction}
      >
        {props.radioList.map((element) => {
          return (
            <FormControlLabel
              key={element.value}
              value={element.value}
              disabled={element.disabled}
              control={<Radio />}
              label={element.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
