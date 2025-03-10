import React from "react";
import PropTypes from "prop-types";


const Test = ({question, selectedOption, onOptionChange}) => {
    return(
        <>
            {question.options.map((option, index) => (
                <label key={index}
                className={`form-check-label${index === question.options.length-1 ? ' myLabel' : ''}`}>
                    <div className="options" key={question.id}>
                        {option}                            
                    </div>
                    <input
                        className="form-check-input"
                        type="radio"                                
                        value={option}
                        checked={selectedOption[0] === option}
                        onChange={onOptionChange}
                        name="option"
                        required
                    />
                </label>                    
            ))}
        </>
    )
};

Test.propTypes = {
    question: PropTypes.object.isRequired,
    selectedOption: PropTypes.array.isRequired,
    onOptionChange: PropTypes.func.isRequired
};

export default Test;
