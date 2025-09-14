
 /*
* 📚✨ Part 2: JavaScript Functions — Scope, Parameters & Return Values
 * This section demonstrates how functions can be used to handle logic and calculations.
 */
 // Global variable
let animationState = 'initial';

 // Function with parameters and a return value
function calculateNewPosition(currentX, currentY, offset) {
// Local variable, only accessible inside this function
let newX = currentX + offset;
let newY = currentY + offset;
            
console.log("Local scope variable 'newX' is accessible here:", newX);
            
 // The function returns an object with the new coordinates
return { x: newX, y: newY };
}
        
 // This variable is in the global scope
let currentX = 100;

// Function that demonstrates global vs. local scope
function showScope() {
     let localVariable = 'I am local.';
       console.log(localVariable); // This works
       console.log(animationState); // This works because it's global
 // console.log(newX); // This would cause an error because newX is local to calculateNewPosition
}
        
// Calling the functions to demonstrate
    let newCoords = calculateNewPosition(currentX, 200, 50);
    console.log("Returned new coordinates:", newCoords);
    showScope();


/*
* 🎨🎬 Part 3: Combining CSS Animations with JavaScript
* This section links JavaScript logic to CSS effects.
*/

// Get the DOM elements
const triggerButton = document.getElementById('triggerButton');
const targetBox = document.getElementById('targetBox');
const loadingSpinner = document.getElementById('loadingSpinner');
const returnMessage = document.getElementById('returnMessage');

// This function adds a CSS class to trigger a transition
    function triggerAnimation() {
// Use the global variable to toggle the animation
    if (animationState === 'initial') {
    targetBox.classList.add('transformed');
    animationState = 'transformed';
    triggerButton.textContent = 'Reset';
    return 'Animation is now active.';
    } else {
         targetBox.classList.remove('transformed');
         animationState = 'initial';
        triggerButton.textContent = 'Click to Animate';
        return 'Animation has been reset.';
    }
}

// Add an event listener to the button
triggerButton.addEventListener('click', () => {
 // Show a loading spinner as an example of a JS-triggered effect
 loadingSpinner.style.display = 'block';
 triggerButton.disabled = true;

 // Use a setTimeout to simulate a task and show the spinner for a moment
setTimeout(() => {
    loadingSpinner.style.display = 'none';
    triggerButton.disabled = false;
                
 // Call the function to trigger the CSS animation and capture the return value
    const message = triggerAnimation();
    returnMessage.textContent = message;
    console.log(message);
    }, 1000);
});
        