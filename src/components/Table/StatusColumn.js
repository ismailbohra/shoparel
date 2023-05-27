import Chip from "@mui/material/Chip";
import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiInformationLine } from 'react-icons/ri';

export const StatusColumn = (cellValues) => {
  const color = {
    PENDING: "#008080",
    ACCEPTED: "blue",
    DISPATCHED: "#00FF00",
    REJECTED: "red",
  };
  const icons = {
    PENDING: <AiOutlineClockCircle style={{color:color["PENDING"]}}/>,
    ACCEPTED: <RiInformationLine style={{color:color["ACCEPTED"]} }/>,
    DISPATCHED: <BsCheck2 style={{color:color["DISPATCHED"]}}/>,
    REJECTED: <MdReportProblem style={{color:color["REJECTED"]}}/>,
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
