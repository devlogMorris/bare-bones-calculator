"use strict";

/// first we need the elements to manipulate in the dom
const display = document.querySelector(".calculator__display");
const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator__keys");

///functions


const delegation = function(e) {
  if (e.target.matches("button")) {
    /// all my elements
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    
   
    /// if their is clicked on a number this below will happen
    if (!action) {
      if (displayedNum == "0")  {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum.concat(keyContent);
      }
    }
    /// if the add operator is clicked this will happen
    if (action === "add") {
      if (displayedNum.includes("+")) {
        return;
      }
      display.textContent = displayedNum.concat("+");
    }

    /// if the subtract operator is clicked this will happen
    if (action === "subtract") {
      if (displayedNum.includes("-")) {
        return;
      }
      display.textContent = displayedNum.concat("-");
    }
   /// IF THE TIMES OPERATOR IS CLICKED THIS WILL HAPPEN
   if (action === "multiply") {
     if (displayedNum.includes("x")) {
       return;
     }
     display.textContent = displayedNum.concat("x");
   }
   /// IF THE DIVIDE OPERATOR IS CLICKED THIS WILL HAPPEN
   if (action === "divide") {
     if (displayedNum.includes("/")) {
       return;
     }
     display.textContent = displayedNum.concat("/");
   }


    ///IF THE DECIMAL BTN IS CLICKED THIS WILL HAPPEN
    if (action === "decimal") {
        
      if (displayedNum.includes(".")) {
          return;
      }
      display.textContent = displayedNum.concat(".");
    }
    ///WHEN THE ALLCLEAR OPERAOTR IS CLICKED THIS WILL HAPPEN
    if(action === "clear") {
        return display.textContent = "0";
    }
    if (action === "calculate") {
       return calculate(displayedNum);
    }
  }
}


/// eventlisteners
keys.addEventListener("click", delegation);