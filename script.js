const myBtn = document.getElementById("myBtn");
const myLbl = document.getElementById("myLbl");
const min = 1;
const max = 100;
let randomNum;

myBtn.onclick = function(){
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  myLbl.textContent = randomNum;
}