import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const Button = ({children, handleClick = () => {}, type='button', className, ...props }) => (
    <div className="Button">
        <button onClick={handleClick} className={`${className}`} type={type} {...props}>  
            {children}
        </button>
    </div>
);

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.element,
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
};

export default Button;
