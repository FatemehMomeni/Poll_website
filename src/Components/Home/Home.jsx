import React from "react";
import "./Home.css";
import Button from "../Button/Button";
import { Link } from "react-router";
import reactLogo from "./reactLogo.png";


const Home = () => { 
    return(
        <div className="Home">            
            <h3>مقدماتی React<img src={reactLogo} alt="React Logo" className="Home--image" /> نظرسنجی دوره</h3>
            <br/>
            <span>!سلام دوست خوبم</span><br/><br/>
            <span>ممنونیم که دوره‌های ما رو برای آموزش انتخاب کردی تا در مسیر یادگیری همراهت باشیم</span>
            <span>. حالا که به انتهای دوره رسیدی، لطفا با جواب دادن به سوالات این نظرسنجی ما رو از نظرات و انتقاداتت بهره‌مند کن. نظرات ارزشمند تو در بهبود این دوره تاثیرگذاره</span>
            <br/><br/><br/>
            <div className="Home--startPoll">            
                <Link to={'/user-info'} style={{color: 'black'}}>
                    <Button className="btn">ورود به نظرسنجی</Button>
                </Link>            
                <span>!ممنون که وقت میگذاری</span>
            </div>
        </div>
    )
};

export default Home;
