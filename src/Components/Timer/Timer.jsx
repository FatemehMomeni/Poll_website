import React, {useState, useContext} from "react";
import "./Timer.css";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Modal from "../Modal/Modal";
import TimeContext from "../../contexts/Time";
import { answerLog } from "../../utils/global";


const Timer = () => {        
    const showTime = useContext(TimeContext);
    const timeLeft = localStorage.getItem('time_left');
    const [openModal, setOpenModal] = useState(false);

    const convertToPersianNum = (number) => {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶' , '۷', '۸' , '۹'];
        return String(number).split('').map(char => persianNumbers[Number(char)]).join('');
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return(
        <>
            {showTime.showTime && (
                <div className="Timer">
                    <CountdownCircleTimer
                        isPlaying
                        duration={timeLeft}
                        colors={['#FFC312', '#F79F1F', '#EE5A24','#eb2f06']}
                        colorsTime={[120, 80, 40, 0]}
                        strokeWidth='3'
                        size='65'
                        onUpdate={timeLeft}
                    >
                        {({remainingTime}) => (
                        <>
                            {remainingTime < 0 ? (
                                <div className="Timer--timeUp">
                                    {localStorage.removeItem('time_left')}
                                    {setOpenModal(true)}
                                    {answerLog()}
                                    <Modal isOpen={openModal} onClose={handleCloseModal}>
                                        <h4>!زمانت تموم شد</h4>
                                    </Modal>
                                </div>
                            ):(
                                <>
                                    {`${convertToPersianNum(Math.floor(remainingTime / 60)).padStart(2, '۰')} :
                                    ${convertToPersianNum(remainingTime % 60).padStart(2, '۰')}`}
                                    {localStorage.setItem('time_left', remainingTime)}
                                </>
                            )}
                        </>
                        )}                
                    </CountdownCircleTimer>
                </div>
            )}
        </>
    )
};

export default Timer;
