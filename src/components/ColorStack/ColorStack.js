import { Avatar, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";

const ColorStack = (props) => {
  const noOfColorDisplay=props.numbers
  const colorList = props.colorList;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tempcolor, setTempcolor] = useState([]);
  const initial = currentIndex >= noOfColorDisplay;
  const last = currentIndex + noOfColorDisplay <= colorList.length;

  const handlePrevious = () => {
    if (currentIndex >= noOfColorDisplay) {
      const newIndex = currentIndex - noOfColorDisplay;
      const temp = colorList.slice(newIndex, currentIndex);
      setTempcolor(temp);
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex + noOfColorDisplay < colorList.length) {
      const newIndex = currentIndex + noOfColorDisplay;
      const temp = colorList.slice(newIndex, newIndex + noOfColorDisplay);
      setTempcolor(temp);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const temp = colorList.slice(currentIndex, currentIndex + noOfColorDisplay);
    setTempcolor(temp);
  }, [currentIndex, colorList]);


  return (
    <>
      {initial && <MdOutlineArrowLeft onClick={handlePrevious} size={30} style={{ margin: noOfColorDisplay }} />}
      {tempcolor.map((element, index) => {
        return (
          <Tooltip title={element.colour_name} key={index}>
            <Avatar
              sx={{
                bgcolor: element.hex_value,
                margin: 0.5,
                border: index === props.selectedColor ? 3 : null,
                borderColor: index === props.selectedColor ? "black" : null,
                boxShadow: index === props.selectedColor ? 5 : null,
                width:30,
                height:30
              }}
              m={0.5}
              onClick={() => {
                props.handleSelectColor(index,element);
              }}
            >
              &nbsp;
            </Avatar>
          </Tooltip>
        );
      })}
      {last && <MdOutlineArrowRight onClick={handleNext} size={30} style={{ margin: 5 }} />}
    </>
  );
};

ColorStack.propTypes = {
  second: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ColorStack);
