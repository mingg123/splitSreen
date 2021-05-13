import logo from './logo.svg';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { colors } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  leftScreen : {
    float: "left",
    width: "33%",
    height: "100px",
    borderRright: "1px solid #b8b8b8",
    marginRight: "-1px",
    overflowY: "scroll",
  },
  middelScreen : {
    float: "left",
    width:"33%",
    height: "100px",
    overflowY:"scroll",
  },
  rightScreen : {
    float: "left",
    width:"33%",
    height: "100px",
    overflowY:"scroll",
  },
  leftborder : {
    float: "left",
    width:"0.3%",
    height: "100px",
    backgroundColor: "#888888",
    cursor : "pointer"
  },
  rightborder : {
    float: "left",
    width:"0.3%",
    height: "100px",
    backgroundColor: "#888888",
    cursor : "wait"
  }
}))
function App() {
 const classes = useStyles();
 let leftStartpos = 0;
 let leftDiffpos= 0;
 let isLeftEnable = false;
 let range = 20;
 let rightStartpos = 0
 let rightDiffpos = 0;
 let isRightEnable = false;
 let Leftpos = 0;
 let Rightpos = 0;

 const onLeft_mouse_down = (event) => {
  leftStartpos = event.clientX + leftDiffpos;
  isLeftEnable = true;
  return false;
 }

 const on_mouse_up= (event) => {
  isLeftEnable = false;
  isRightEnable = false;

  return false;
 }

 const onRight_mouse_down = (event) => {
  rightStartpos = event.clientX + rightDiffpos;
  isRightEnable = true;
 return false;
}

 const on_mouse_move = (event) => {

  if (isLeftEnable) {
    Leftpos = event.clientX;
    leftDiffpos = leftStartpos-Leftpos;
  
    var width = (window.innerWidth - document.getElementById("rightWindow").offsetWidth)/2 - 5;
  
    if (leftDiffpos > -(width-range) && leftDiffpos < (width-range)) {
  
      document.getElementById("leftWindow").style.width = width - leftDiffpos + "px";
   
      document.getElementById("middleWindow").style.width = width - 5 + leftDiffpos + "px"; 
   
     }
   }
   else if (isRightEnable) {
    Rightpos = event.clientX;
    rightDiffpos = rightStartpos-Rightpos;
  
    var Rightwidth = (window.innerWidth - document.getElementById("leftWindow").offsetWidth)/2 - 5;

  
    if (rightDiffpos > -(Rightwidth-range) && rightDiffpos < (Rightwidth-range)) {
  
     document.getElementById("middleWindow").style.width = Rightwidth - rightDiffpos + "px";
  
     document.getElementById("rightWindow").style.width = Rightwidth - 5 + rightDiffpos + "px"; 
  
    }
   }
 }




  return (
    <div className="Screen" onMouseUp ={on_mouse_up} onMouseMove={on_mouse_move}>
      <div className={classes.leftScreen} id = "leftWindow">
      LEFT
      </div>
      <div class={classes.leftborder} id="hr" onMouseDown = {onLeft_mouse_down}  ></div>
      <div class={classes.middelScreen} id="middleWindow">MIDDLE</div>
      <div class={classes.rightborder} id="hr2" onMouseDown = {onRight_mouse_down}  ></div>
      <div class={classes.rightScreen} id="rightWindow">RIGHT</div>
    </div>
  );
}

export default App;
