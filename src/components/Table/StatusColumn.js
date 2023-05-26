import Chip from "@mui/material/Chip";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiInformationLine } from 'react-icons/ri';

export const StatusColumn = (cellValues) => {
  const color = {
    PENDING: "#808080",
    ACCEPTED: "blue",
    DISPATCHED: "#00FF00",
    REJECT: "red",
  };
  const icons = {
    Pending: <AiOutlineClockCircle style={{color:color["PENDING"]}}/>,
    Accepted: <RiInformationLine style={{color:color["ACCEPTED"]} }/>,
    Dispatched: <BsCheck2 style={{color:color["DISPATCHED"]}}/>,
    reject: <MdReportProblem style={{color:color["REJECT"]}}/>,
  };

  return (
    <Chip
      label={cellValues.value}
      sx={{
        borderColor: color[cellValues.value],
        color: color[cellValues.value],
      }}
      variant="outlined"
      icon={icons[cellValues.value]}
    />
  );
};
