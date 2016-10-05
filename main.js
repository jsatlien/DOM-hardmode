var cButton = document.getElementById("c")
  var cClick= function (event) {
    calcdisplay.value = ""
  }
var displayBox = document.getElementById("calcdisplay")

cButton.addEventListener ("click", cClick)

var sevenButton = document.getElementById('7')
  var sevenClick = function (event) {
    calcdisplay.value = calcdisplay.value + "7"
  }
var eightButton = document.getElementById('8')
  var eightClick = function (event) {
    calcdisplay.value = calcdisplay.value + "8"
  }
var nineButton = document.getElementById('9')
  var nineClick = function (event) {
    calcdisplay.value = calcdisplay.value + "9"
  }
var divideButton = document.getElementById('/')
  var divideClick = function (event) {
    calcdisplay.value = calcdisplay.value + "/"
  }

sevenButton.addEventListener ("click", sevenClick)
eightButton.addEventListener ("click", eightClick)
nineButton.addEventListener ("click", nineClick)
divideButton.addEventListener ("click", divideClick)


var fourButton = document.getElementById('4')
  var fourClick = function (event) {
    calcdisplay.value = calcdisplay.value + "4"
  }
var fiveButton = document.getElementById('5')
  var fiveClick = function (event) {
    calcdisplay.value = calcdisplay.value + "5"
  }
var sixButton = document.getElementById('6')
  var sixClick = function (event) {
    calcdisplay.value = calcdisplay.value + "6"
  }
var multiplyButton = document.getElementById('x')
  var multiplyClick = function (event) {
    calcdisplay.value = calcdisplay.value + "x"
  }

  fourButton.addEventListener ("click", fourClick)
  fiveButton.addEventListener ("click", fiveClick)
  sixButton.addEventListener ("click", sixClick)
  multiplyButton.addEventListener ("click", multiplyClick)

var oneButton = document.getElementById('1')
  var oneClick = function (event) {
    calcdisplay.value = calcdisplay.value + "1"
  }
var twoButton = document.getElementById('2')
  var twoClick = function (event) {
    calcdisplay.value = calcdisplay.value + "2"
  }
var threeButton = document.getElementById('3')
  var threeClick = function (event) {
    calcdisplay.value = calcdisplay.value + "3"
  }
var subtractButton = document.getElementById('-')
  var subtractClick = function (event) {
    calcdisplay.value = calcdisplay.value + "-"
  }

  oneButton.addEventListener ("click", oneClick)
  twoButton.addEventListener ("click", twoClick)
  threeButton.addEventListener ("click", threeClick)
  subtractButton.addEventListener ("click", subtractClick)


var zeroButton = document.getElementById('0')
  var zeroClick = function (event) {
    calcdisplay.value = calcdisplay.value + "0"
}
var decimalButton = document.getElementById('.')
  var decimalClick = function (event) {
    calcdisplay.value = calcdisplay.value + "."
};
var addButton = document.getElementById('+');
  var addClick = function (event) {
    calcdisplay.value = calcdisplay.value + "+";
};

var equalsButton = document.getElementById('=');
  var equalsClick = function (event) {
  calcdisplay.value = calcdisplay.value + "=";
};

// ^^needs to involve letsCalculate function!!
// or letsCalculate should just exist inside this function^^


zeroButton.addEventListener ("click", zeroClick);
decimalButton.addEventListener ("click", decimalClick);
addButton.addEventListener ("click", addClick);
equalsButton.addEventListener ( "click", equalsClick);

// var letsCalculate = function (displayBox) {
//     if (displayBox.include("/")) {
//       var divArray =  [displayBox.split("/")];
//       calcdisplay.value = Number(divArray [0]) / Number(divArray [1]);
//
//     }
// }

// doesnt work yet^^^^^^^^^^^^^^^^
