let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } 
    else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Ooo sa krşm, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} 
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ooo sa krşm, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
  
