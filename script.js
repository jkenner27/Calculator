let firstvalue = 0.0;
let secondvalue = 0.0;
let thirdvalue = 0.0;
let forthvalue = 0.0;
let fifthvalue = 0.0;

function clearScreen() {
  document.getElementById('display').innerText = "0";
  answerValue = 0.0;
}

function numberKey(element) {
  let display = document.getElementById('display');
  let displayText = display.innerText;

  if(displayText === '0') {
    displayText = element.innerText;
  } else {
    displayText += element.innerText;
  }

  display.innerText = displayText;
}

function addValue() {
  let firststring = "";
  firststring = display.innerText;
  firstvalue += parseFloat(firststring);
  clearScreen();
}

function subValue() {
  let secondstring = "";
  secondstring = display.innerText;
  secondvalue = parseFloat(secondstring);
  clearScreen();
}

function divValue() {
  let thirdstring = "";
  thirdstring = display.innerText;
  thirdvalue = parseFloat(thirdstring);
  clearScreen();
}

function multValue() {
  let forthstring = "";
  forthstring = display.innerText;
  forthvalue = parseFloat(forthstring);
  clearScreen();
}

function sqrt1() {
  firstvalue = parseFloat(document.getElementById('display').innerText);
  firstvalue = Math.sqrt(firstvalue);
  document.getElementById('display').innerText = firstvalue;
}

function equalSign() {
  let answerValue = 0;
  if(firstvalue != 0) {
    answerValue = firstvalue + parseInt(display.innerText);
  }
  if(secondvalue != 0) {
    answerValue = secondvalue - parseInt(display.innerText);
  }
  if(thirdvalue != 0) {
    answerValue = thirdvalue / parseInt(display.innerText);
  }
  if(forthvalue != 0) {
    answerValue = forthvalue * parseInt(display.innerText);
  }
  display.innerText = answerValue;
  firstvalue = 0.0;
  secondvalue = 0.0;
  thirdvalue = 0.0;
  forthvalue = 0.0;
}