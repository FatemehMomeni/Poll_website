import React, {useState} from "react";
import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router';
import "bootstrap/dist/css/bootstrap.css";
import Home from '../Home/Home';
import UserInfo from '../UserInfo/UserInfo';
import Questions from '../Questions/Questions';
import Timer from "../Timer/Timer";
import TimeContext from '../../contexts/Time';


const App = () => {
  const [showTime, setShowTime] = useState(true);

  return (
    <TimeContext.Provider value={{showTime, setShowTime}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route> 
              <Route path="/user-info" element={ <UserInfo /> }>
              </Route>
              <Route path="/questions" element={ <> <Questions /><Timer /> </> }>
              </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </TimeContext.Provider>
  );
};

export default App;
