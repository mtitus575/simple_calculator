//Arrays:
const allBtnInputs = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
  "=",
];
const rightSymbols = ["/", "X", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

//DOM Elements:
const display = document.getElementById("display");

//How the calculator works:
// A+B, A-B, A*B, A/B
let A = 0;
let B = null;
let operator = null;

function clearAll() {
  A = 0;
  B = null;
  operator = null;
}

//Array Method:
allBtnInputs.forEach((element) => {
  //Creating buttons for each element with the element as the text
  const button = document.createElement("button");
  button.innerText = element;

  //append the buttons to the btn-ctn
  const btnArea = document.getElementById("btn-ctn");
  // btnArea.appendChild(button);

  //changing colours of the special buttons:
  if (rightSymbols.includes(element)) {
    button.style.backgroundColor = "orange";
  } else if (topSymbols.includes(element)) {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  }

  //Making `=` span 2 columns from grid-line 3.
  if (element === "=") {
    button.style.gridColumn = "3 / span 2";
    button.style.width = "5rem";
  }

  //button click logic for all btns
  button.addEventListener("click", () => {
    if (topSymbols.includes(element)) {
      //top buttons
      if (element === "AC") {
        clearAll();
        display.value = "";
      } else if (element === "+/-") {
        display.value = -display.value;
      } else if (element === "%") {
        display.value = display.value / 100;
      }
    } else if (rightSymbols.includes(element)) {
      //right-side buttons
      if (element === "=") {
        if (A !== null) {
          B = display.value;
          let numA = Number(A);
          let numB = Number(B);

          if (operator === "/") {
            display.value = numA / numB;
          } else if (operator === "X") {
            display.value = numA * numB;
          } else if (operator === "-") {
            display.value = numA - numB;
          } else if (operator === "+") {
            display.value = numA + numB;
          }
          clearAll();
        }
      } else {
        operator = element;
        A = display.value;
        display.value = "";
        console.log(A, B, operator);
      }
    } else {
      //numbers and .
      if (element === ".") {
        //Adding a zeror before the point if is it 1st
        if (!display.value.includes(".")) {
          display.value += display.value === "" ? "0." : ".";
        }
      } else if (display.value === "0") {
        //replaces the zero with zero. Stops more than one zero if zero is 1st
        display.value = element;
      } else {
        //the numbers/digits specifically
        display.value += element;
      }
    }
  });
  btnArea.appendChild(button);
});
