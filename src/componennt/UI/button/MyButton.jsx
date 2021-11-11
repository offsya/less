import React from 'react';
import classes from "./MyButton.modul.css";


const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="myBtn">
            {children}
        </button>
    );
};

export default MyButton;