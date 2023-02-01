// Store a reference of "img" in variable myImage
const myImage = document.querySelector("img");


/* Set the onclick event handler property of the variable
 to this anonymous function */
myImage.onclick = () => {
    // retrieve the value of the "src" attribute
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    // We prompt the user to enter a string
    // and save it to the variable called myName
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName()
    }
    // We use localStorage API's setItem function
    // to create and store a data item called "name"
    // setting its value to myName
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
};


// Initialization block
// Structures the app when it loads
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    // If it does exist, do the following:
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
};


myButton.onclick = () => {
    setUserName();
};
