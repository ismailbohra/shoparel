import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {props.radioList.map((element)=>{
            return(
                <FormControlLabel
          value={element.value}
          disabled={element.disabled}
          control={<Radio />}
          label={element.label}
        />
            )
        })}
      </RadioGroup>
    </FormControl>
  );
}