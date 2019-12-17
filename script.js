function stop1() {
  clearInterval(run1);
}

function stop2() {
  clearInterval(run2);
}

function stop3() {
  clearInterval(run3);
}

function stopAll() {
  clearInterval(run1);
  clearInterval(run2);
  clearInterval(run3);
}

function resetAll() {
  clearInterval(run1);
  clearInterval(run2);
  clearInterval(run3);
  run1 = setInterval(random1, 50);
  run2 = setInterval(random2, 50);
  run3 = setInterval(random3, 50);
}

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");

function random1() {
  var num1Random = Math.floor(Math.random() * 1000);
  var num1String = num1Random.toString();
  if(num1Random < 10) {
    num1String = "00" + num1String;
  } else if(num1Random < 100) {
    num1String = "0" + num1String;
  }
  num1.innerHTML = num1String;
}

function random2() {
  var num2Random = Math.floor(Math.random() * 1000);
  var num2String = num2Random.toString();
  if(num2Random < 10) {
    num2String = "00" + num2String;
  } else if(num2Random < 100) {
    num2String = "0" + num2String;
  }
  num2.innerHTML = num2String;
}

function random3() {
  var num3Random = Math.floor(Math.random() * 10000);
  var num3String = num3Random.toString();
  if(num3Random < 10) {
    num3String = "000" + num3String;
  } else if(num3Random < 100) {
    num3String = "00" + num3String;
  } else if(num3Random < 1000) {
    num3String = "0" + num3String;
  }
  num3.innerHTML = num3String;
}

var run1 = setInterval(random1, 50);
var run2 = setInterval(random2, 50);
var run3 = setInterval(random3, 50);