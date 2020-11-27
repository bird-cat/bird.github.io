var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('a').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImg = document.querySelector('img');

myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/firefox.png')
        myImg.setAttribute('src', 'images/ie.jpg');
    else
        myImg.setAttribute('src', 'images/firefox.png');
}

var myBotton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myBotton.onclick = function() {
    setUserName();
}