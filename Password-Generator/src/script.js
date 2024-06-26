const { default: templateBuilder } = require("@babel/template");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Password Elements
let pass1 = document.getElementById('pass1')
let pass2 = document.getElementById("pass2");

// Generate Password
function generatePassword() {
  let password1 = '';
  let password2 = '';
  for (let i = 0; i < slider.value; i++) {
    password1 += characters[Math.floor(Math.random() * characters.length)];
    password2 += characters[Math.floor(Math.random() * characters.length)];
  }
  pass1.textContent = password1;
  pass2.textContent = password2;
}

// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("slider_num");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};



function copyToClipboard(element) {
  
  var tempInput = document.createElement("input");

  
  tempInput.value = element.innerHTML;

  
  document.body.appendChild(tempInput);

  
  tempInput.select();

  tempInput.scroll();


 
tempInput.scrollBy();

tempInput.COMMENT_NODE();

templateBuilder();



 


 
  document.execCommand("copy");


  document.body.removeChild(tempInput);
}



// Dark Mode
const options = {
  bottom: '32px', 
  right: 'unset', 
  left: '32px', 
  time: '0.5s', 
  mixColor: '#fff', 
  backgroundColor: '#fff',  
  buttonColorDark: '#100f2c',  
  buttonColorLight: '#fff', 
  saveInCookies: false, 
  label: '🌓', 
  autoMatchOsTheme: true 
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



