import logo from './logo.svg';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { colors } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  leftScreen : {
    float: "left",
    width: "50%",
    height: "100px",
    borderRright: "1px solid #b8b8b8",
    marginRight: "-1px",
    overflowY: "scroll",
  },
  rightScreen : {
    float: "left",
    width:"49%",
    height: "100px",
    overflowY:"scroll",
  },
  middelScreen : {
    float: "left",
    width:"0.3%",
    height: "100px",
    backgroundColor: "#888888",
    // hover : {
    //   cursor : "pointer"
    // }
  },
}))
function App() {
 const classes = useStyles();
 let startpos=0;
 let diffpos=0;
 let range=50;
 let isEnable = false;

 const on_mouse_down = (event) => {
   console.log("mouse down Event!")
  startpos = event.clientX + diffpos;

  isEnable = true;
  console.log("mouse down Event startpos : ")
  console.log(startpos);
  return false;
 }

 const on_mouse_up= (event) => {
  console.log("mouse up Event")
  isEnable = false;

  return false;
 }

 const on_mouse_move = (event) => {
   console.log("mouse move Event!");
  if (isEnable) {

    let pos = event.clientX;
  
    console.log(pos);
  
  
    diffpos = startpos-pos;
  
    var width = window.innerWidth/2 - 10;
  
    if (diffpos > -(width-range) && diffpos < (width-range)) {
  
     document.getElementById("leftWindow").style.width = width - diffpos + "px";
  
     document.getElementById("rightWindow").style.width = width - 20 + diffpos + "px"; 
  
    }
  
   }
 }




  return (
    <div className="Screen" onMouseUp ={on_mouse_up} onMouseMove={on_mouse_move}>

      <div className={classes.leftScreen} id = "leftWindow">
      LEFT
      </div>
      <div class={classes.middelScreen} id="hr" onMouseDown = {on_mouse_down}  ></div>
      <div class={classes.rightScreen} id="rightWindow">RIGHT</div>
    </div>
  );
}

export default App;
