import React from "react";
import PropTypes from "prop-types";


const MultipleChoice = ({question, onOptionSelect}) => {
    let inputs = document.querySelectorAll('[name="checkbox-option"]')
    let radioForCheckboxes = document.getElementById('radio-for-checkboxes')
    const checkCheckboxes = () => {
        let isAtLeastOneCheckboxSelected = false;
        for(let i = inputs.length - 1; i >= 0; --i)
            if(inputs[i].checked) isAtLeastOneCheckboxSelected = true;
        radioForCheckboxes.checked = isAtLeastOneCheckboxSelected
    };
    for(let i = inputs.length - 1; i >= 0; --i)
        inputs[i].addEventListener('change', checkCheckboxes)

    return(
        <>
            {question.options.map((option, index) => (
                <label key={index} 
                className={`form-check-label${index === question.options.length-1 ? ' myLabel' : ''}`}>
                    <div className="options" key={question.id}>
                        {option}                            
                    </div>
                    <input id="radio-for-checkboxes" type="radio" name="radio-for-required-checkboxes" required
                        style={{WebkitAppearance: "none", pointerEvents: "none", border: "none", background: "none"}} />
                    <input
                        className = "form-check-input"
                        type = "checkbox"
                        value={option}
                        name="checkbox-option"
                        onChange={onOptionSelect}
                    />
                </label>                    
            ))}
        </>
    )
};

MultipleChoice.propTypes = {
    question: PropTypes.object.isRequired,
    onOptionSelect: PropTypes.func.isRequired
};

export default MultipleChoice;
