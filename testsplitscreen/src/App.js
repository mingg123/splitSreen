import logo from './logo.svg';
import './App.css';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  leftScreen : {
    float: "left",
    width: "33%",
    height: "100px",
    borderRight: "1px solid #b8b8b8",
    marginRight: "-1px",
  },
  middelScreen : {
    float: "left",
    width: "33%",
    height: "100px",

  },
  rightScreen : {
    float: "left",
    width: "33%",
    height: "100px",
  },
  leftborder : {
    width:"0.5%",
    height: "100px",
    backgroundColor: "#888888",
    cursor : "pointer"
  },
  rightborder : {    
    width:"0.5%",
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
 let rightStartpos = 0
 let rightDiffpos = 0;
 let isRightEnable = false;
 let leftpos = 0;
 let rightpos = 0;

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
    leftpos = event.clientX;
    leftDiffpos = leftStartpos-leftpos;
   
    var totalWidthForLeftAndMiddle = window.innerWidth - document.getElementById("rightWindow").offsetWidth - document.getElementById("rightborder").offsetWidth

    let resolutionPercentage = 0.0001;
    let resolution = window.innerWidth * resolutionPercentage;

    if (leftDiffpos > -(totalWidthForLeftAndMiddle-resolution) && leftDiffpos < (totalWidthForLeftAndMiddle-resolution)) {

      const leftDiffPoint = leftDiffpos / window.innerWidth;
      // const leftWidthPoint = totalWidthForLeftAndMiddle / resolution / 2 * 0.0001
      const leftWidthPoint = totalWidthForLeftAndMiddle / window.innerWidth  / 2 ;

      if((leftWidthPoint - leftDiffPoint) < 0.1) { // 왼쪽 퍼센트 제한 
        return;
      }

      if((leftWidthPoint + leftDiffPoint) < 0.3) { // 미들 퍼센트 제한 
        return;
      }

      document.getElementById("leftWindow").style.width = ((leftWidthPoint - leftDiffPoint)*100) + "%";
      document.getElementById("middleWindow").style.width = ((leftWidthPoint + leftDiffPoint)*100) + "%"; 
  
    }
  }
   else if (isRightEnable) {

    rightpos = event.clientX;
    rightDiffpos = rightStartpos-rightpos;

    var totalWidthForRightAndMiddle = window.innerWidth - document.getElementById("leftWindow").offsetWidth - document.getElementById("leftborder").offsetWidth

    let resolutionPercentage = 0.0001;
    let resolution = window.innerWidth * resolutionPercentage;

    if (rightDiffpos > -(totalWidthForRightAndMiddle-resolution) && rightDiffpos < (totalWidthForRightAndMiddle-resolution)) {

      const rightDiffPoint = rightDiffpos / window.innerWidth;
      const rightWidthPoint = totalWidthForRightAndMiddle / window.innerWidth  / 2 ;


      if((rightWidthPoint - rightDiffPoint) < 0.3) { // 미들 퍼센트 제한 
        return;
      }

      if((rightWidthPoint + rightDiffPoint) < 0.1) { // 오른쪽 퍼센트 제한 
        return;
      }

      document.getElementById("middleWindow").style.width = ((rightWidthPoint - rightDiffPoint)*100) + "%";
      document.getElementById("rightWindow").style.width = ((rightWidthPoint + rightDiffPoint)*100) + "%"; 
  
    }
   }
 }




  return (
    <div className="Screen" onMouseUp ={on_mouse_up} onMouseMove={on_mouse_move} style={{ display: "flex", flexDirection: "row" }}>
      <div className={classes.leftScreen} id = "leftWindow">
      LEFT
      </div>
      <div class={classes.leftborder} id="leftborder" onMouseDown = {onLeft_mouse_down}  ></div>
      <div class={classes.middelScreen} id="middleWindow">MIDDLE</div>
      <div class={classes.rightborder} id="rightborder" onMouseDown = {onRight_mouse_down}  ></div>
      <div class={classes.rightScreen} id="rightWindow">RIGHT</div>
    </div>
  );
}

export default App;
