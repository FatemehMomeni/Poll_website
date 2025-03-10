import React, {useState, useRef, useEffect} from "react";
import "./UserInfo.css";
import { Link } from "react-router";
import Button from "../Button/Button";
import {validateFirstName, validateLastName} from "../../utils/global";
import validator from "validator";


const UserInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);
    const inputRef = useRef(null);

    const handleFirstName = (event) => {        
        if (validateFirstName(event.target.value)){
            setFirstName(event.target.value);
            setErrors({ ...errors, firstName: null });            
        } else {
            setErrors({ ...errors, firstName: "نام باید کمتر از ۱۵ کاراکتر باشد" })
        }
    }

    const handleLastName = (event) => {        
        if (validateLastName(event.target.value)){
            setLastName(event.target.value);
            setErrors({ ...errors, lastName: null });            
        } else {
            setErrors({ ...errors, lastName: "نام خانوادگی باید کمتر از ۳۰ کاراکتر باشد" })
        }
    }
    
    const handelEmail = (event) => {                
        if (validator.isEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({ ...errors, email: null })            
        } else {
            setErrors({ ...errors, email: "ایمیل نامعتبر" })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
    }

    useEffect( () => {
        inputRef.current.focus();
    }, []);

    const saveInfo = () => {
        localStorage.setItem('first_name', firstName);
        localStorage.setItem('last_name', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('answers', '[]');
        localStorage.setItem('time_left', 120);
        localStorage.setItem('current_question', '-1');
    };

    return(
        <>
            <div className="header">
                <h3>ورود اطلاعات</h3>
            </div>
            <div className="UserInfo">                     
                <div className="UserInfo--form">
                    <span>لطفا اطلاعاتت رو وارد کن</span>
                    <form onSubmit={handleSubmit} className="form-group">
                        <label className="UserInfo--formLabel">                    
                            <input ref={inputRef} type="text" onChange={handleFirstName} className="form-control" required />                    
                            <span style={{color: 'red'}}>*</span>:نام
                        </label>
                        {errors.firstName && <span style={{fontSize: "12px", color: "red"}}>{errors.firstName}</span>}

                        <label className="UserInfo--formLabel">
                            <input type="text" onChange={handleLastName} className="form-control" required />
                            <span style={{color: 'red'}}>*</span>:نام خانوادگی
                        </label>
                        {errors.lastName && <span style={{fontSize: "12px", color: "red"}}>{errors.lastName}</span>}

                        <label className="UserInfo--formLabel">
                            <input type="email" onChange={handelEmail} className="form-control" required />            
                            <span style={{color: 'red'}}>*</span>:ایمیل
                        </label>
                        {errors.email && <span style={{fontSize: "12px", color: "red"}}>{errors.email}</span>}
                        
                        <Button type="submit" className="btn mt-2" handleClick={saveInfo}> ثبت </Button>                
                    </form>                    
                </div>
                {submit && 
                    <div className="UserInfo--submited">
                        <span>سوالات ما تستی، چندگزینه‌ای و تشریحی هستن. برای پاسخگویی به سوالات ۲ دقیقه زمان داری</span>                                
                        <div className="UserInfo--start">
                            <Link to={'/questions'} style={{color: 'black'}}>
                                <Button className="btn">شروع</Button>
                            </Link>
                            <span>!آماده‌ای؟! بزن بریم</span>
                        </div>
                    </div>
                }
            </div> 
        </>
    )   
}

export default UserInfo;
