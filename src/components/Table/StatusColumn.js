import Chip from "@mui/material/Chip";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiInformationLine } from 'react-icons/ri';

export const StatusColumn = (cellValues) => {
  const color = {
    Pending: "#808080",
    Accepted: "blue",
    Dispatched: "#00FF00",
    reject: "red",
  };
  const icons = {
    Pending: <AiOutlineClockCircle style={{color:color["Pending"]}}/>,
    Accepted: <RiInformationLine style={{color:color["Accepted"]} }/>,
    Dispatched: <BsCheck2 style={{color:color["Dispatched"]}}/>,
    reject: <MdReportProblem style={{color:color["reject"]}}/>,
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
