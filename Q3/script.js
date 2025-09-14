
// 🔹 Bounce Box
function animateBox() {
 let box = document.getElementById("myBox");
 box.classList.remove("animate-box"); // reset if already animated
 void box.offsetWidth; // reflow trick to restart animation
 box.classList.add("animate-box");
}

// 🔹 Card Flip
function flipCard() {
 let card = document.getElementById("myCard");
 card.classList.toggle("flipped");
}

// 🔹 Loader Toggle
function toggleLoader() {
 let loader = document.getElementById("loader");
 loader.style.display = (loader.style.display === "block") ? "none" : "block";
}

// 🔹 Modal
function openModal() {
 let modal = document.getElementById("modal");
 modal.style.display = "flex";
}
function closeModal() {
 let modal = document.getElementById("modal");
 let content = modal.querySelector(".modal-content");
 content.style.animation = "fadeOut 0.5s forwards";
 setTimeout(() => {
  modal.style.display = "none";
  content.style.animation = "slideIn 0.5s forwards"; // reset
 }, 500);
}
  