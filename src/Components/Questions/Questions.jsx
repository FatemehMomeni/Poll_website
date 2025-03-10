import React, {useState, useEffect, useContext} from "react";
import "./Questions.css";
import questionBank from "../../utils/questionsBack";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Test from "./Test";
import MultipleChoice from "./MultipleChoice";
import Annotation from "./Annotation";
import TimeContext from "../../contexts/Time";
import { answerLog } from "../../utils/global";


const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(JSON.parse(localStorage.getItem('current_question')) + 1);
    const [selectedOption, setSelectedOption] = useState('');
    const [end, setEnd] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [header, setHeader] = useState('سوالا تستی');
    const showTime = useContext(TimeContext);
    
    const onOptionChange = (event) => {         
        setSelectedOption([event.target.value]);        
    };

    const onOptionSelect = (event) => {
        const {value, checked} = event.target;
        if(checked) setSelectedOption([...selectedOption, value]);
        else setSelectedOption(selectedOption.filter((e) => e !== value));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveAnswers();
        handleNextQuestion();
    };

    const saveAnswers = () => {
        if(questionBank[currentQuestion].type === 'annotation') 
            setSelectedOption(selectedOption[0]);          
        let answers = localStorage.getItem('answers');               
        answers = JSON.parse(answers);
        let index = answers.findIndex((item) => item.id === questionBank[currentQuestion].id);
        if(index !== -1) answers[index].option = selectedOption;
        else 
            answers.push({id: questionBank[currentQuestion].id, type: questionBank[currentQuestion].type, option: [selectedOption]});
        localStorage.setItem('answers', JSON.stringify(answers));        
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questionBank.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption('');
            localStorage.setItem('current_question', JSON.stringify(currentQuestion));
        } else {
            setEnd(true);
            setOpenModal(true);
            setHeader('');
            showTime.setShowTime(false);
        }
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
        localStorage.setItem('current_question', JSON.stringify(currentQuestion));
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        if(currentQuestion < questionBank.length - 1)
            switch(questionBank[currentQuestion].type){                
                case "test":
                    setHeader("سوالات تستی");
                    break;
                case "multipleChoice":
                    setHeader("سوالات چندگزینه‌ای");
                    break;
                default:
                    setHeader("سوالات تشریحی");
                    break;
            }
    }, [currentQuestion]);

    return(
        <div className="Questions">
            {header &&
            <div className="header">
                <h3>{header}</h3>
            </div>
            }
            {!end ? (
                <div className="Questions--container">
                    <div className="Questions--form">
                        <h6 className="mt-2">{questionBank[currentQuestion].question}</h6>
                        <form onSubmit={handleFormSubmit} className="mt-2 mb-2">          
                            {questionBank[currentQuestion].type === "test" && 
                                <Test question={questionBank[currentQuestion]} selectedOption={selectedOption} onOptionChange={onOptionChange} />
                            }
                            {questionBank[currentQuestion].type === "multipleChoice" &&
                                <MultipleChoice question={questionBank[currentQuestion]} onOptionSelect={onOptionSelect} />
                            }
                            {questionBank[currentQuestion].type === "annotation" &&                            
                                <Annotation onEnterInput={onOptionChange} question={questionBank[currentQuestion]} />
                            }                        
                            <div className="Questions--buttons">                              
                                {currentQuestion !== 0 &&                            
                                    <Button className="btn mt-2 custom" handleClick={handlePreviousQuestion}> سوال قبلی </Button>
                                }
                                <Button type="submit" className="btn mt-2"> ثبت </Button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (        
                <>
                    {answerLog()}
                    {localStorage.removeItem('time_left')}                   
                    {localStorage.removeItem('current_question')}
                    <Modal isOpen={openModal} onClose={handleCloseModal}>
                        <h4>.سوالات تموم شد</h4><br/>
                        <h4>ممنون که در نظرسنجی شرکت کردی</h4>
                    </Modal>
                </>
            )}
        </div>  
    )
};

export default Question;
