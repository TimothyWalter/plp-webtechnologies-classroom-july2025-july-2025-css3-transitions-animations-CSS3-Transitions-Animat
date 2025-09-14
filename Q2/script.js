// 🌐 script.js

// 🌍 Global variable (accessible anywhere)
let globalMessage = "Hello from global scope!";

// Function with local vs global scope
function changeMessage(newMessage) {
    let localMessage = "This is local scope"; // only exists inside this function
    document.getElementById("output").innerText = newMessage 
     + " | " + globalMessage;
    console.log(localMessage); // visible here
}

// Function with parameters & return values
function addNumbers(a, b) {
    return a + b; // returns a value
}

// Function that uses return value
function showSum(x, y) {
   let result = addNumbers(x, y); // reuse addNumbers
    document.getElementById("output").innerText = `Sum = ${result}`;
}

// Function controlling DOM animation
function toggleAnimation() {
    let box = document.getElementById("myBox");
    box.classList.toggle("animate");
}