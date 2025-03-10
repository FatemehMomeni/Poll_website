import React from "react";
import PropTypes from "prop-types";


const Annotation = ({onEnterInput, question}) => {
    return(        
        <>
            {question.options.map((index) => (
                <div className="Annotation" key={index}>
                    <textarea className="form-control" rows="5" onChange={onEnterInput} required 
                    style={{borderColor: "var(--primary)"}}/>
                </div>
            ))}
        </>           
    )
};

Annotation.propTypes = {
    onEnterInput: PropTypes.func.isRequired,
    question: PropTypes.array.isRequired
};

export default Annotation;
