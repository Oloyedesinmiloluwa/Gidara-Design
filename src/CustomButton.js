import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./customButton.scss";

const arrowMap = {
  left: <ArrowBackIcon fontSize="small" />,
  right: (
    <ArrowBackIcon style={{ transform: "rotate(180deg)" }} fontSize="small" />
  ),
  top: <ArrowUpwardIcon fontSize="small" />,
  bottom: <ArrowDownwardIcon fontSize="small" />,
};
const CustomButton = ({ style, point, dark }) => {
  return (
    <IconButton
      style={style}
      size="small"
      className={`circular ${dark ? "dark" : ""}`}
    >
      {arrowMap[point] || <ArrowDownwardIcon fontSize="small" />}
    </IconButton>
  );
};

export default CustomButton;
