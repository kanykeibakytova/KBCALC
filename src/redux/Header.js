import React from 'react';
import { BiAdjust } from "react-icons/bi";
// import uniqid from "uniqid";
// import { useState }from "react"

const Header = ({dark,setDark}) => {

    const allDark = localStorage.getItem("key") ==="false";
     setDark(!allDark)
 
     const allDarkMode=()=>{
       const darkList = !dark
       setDark(darkList);
       localStorage.setItem("key", darkList);
     }
    return (
        <div id='header'>
            <div className="container">
                <div className="header">
                <BiAdjust onClick={allDarkMode}
                //  setDark(!dark)
                
                //  }}
                 style={{width:"30px", height:"30px"}}/>
                </div>
            </div>
            
        </div>
    );
};

export default Header;