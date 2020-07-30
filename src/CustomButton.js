import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './customButton.scss';

const arrowMap = {
    'left': <ArrowBackIcon fontSize="small" />,
    'right': <ArrowBackIcon style={{ transform: 'rotate(180deg)'}} fontSize="small" />,
    'top': <ArrowUpwardIcon fontSize="small" />,
    'bottom': <ArrowDownwardIcon fontSize="small" />
}
const CustomButton = ({ style, point, dark }) => {
    const darkStyle = dark ? {backgroundColor: 'black', color: 'white !important', border: 'black !important'}: {}
    return (
            <IconButton style={style} size="small" className={`circular ${dark ? 'dark': ''}`}>
                
                {arrowMap[point] || <ArrowDownwardIcon fontSize="small" />}
            </IconButton>
    )
}

export default CustomButton
