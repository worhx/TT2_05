import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ type, size, variant, placeholder, onClick }) => {
    return (
        <Button size={size} type={type} variant={variant} onClick={onClick}>
            {placeholder}
        </Button>
    );
};

export default CustomButton;
