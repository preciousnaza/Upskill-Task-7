// 🧠 WD Task 7 - Personal Mood Dashboard
// Answer: .innerHTML returns HTML tags + text; .innerText returns only visible text (no HTML tags).

// Get elements
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");
const showSecretBtn = document.getElementById("showSecretBtn");
const secretMessage = document.getElementById("secretMessage");
const body = document.body;

// 1️⃣ Name Greeting
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name) {
    greeting.innerText = `Hello, ${name}!`;
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  } else {
    greeting.innerText = "Hello, friend!";
    greeting.style.color = "black";
  }
});

// 2️⃣ Mood Box - Grow & Shrink
let size = 150;
growBtn.addEventListener("click", () => {
  size += 20;
  moodBox.style.width = `${size}px`;
  moodBox.style.height = `${size}px`;
});

shrinkBtn.addEventListener("click", () => {
  if (size > 50) {
    size -= 20;
    moodBox.style.width = `${size}px`;
    moodBox.style.height = `${size}px`;
  }
});

// 3️⃣ Toggle Day/Night Mode
let isNight = false;
toggleModeBtn.addEventListener("click", () => {
  if (!isNight) {
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
  isNight = !isNight;
});

// 4️⃣ Secret Message Toggle
showSecretBtn.addEventListener("click", () => {
  if (secretMessage.style.display === "none") {
    secretMessage.style.display = "block";
    showSecretBtn.innerText = "Hide Secret";
  } else {
    secretMessage.style.display = "none";
    showSecretBtn.innerText = "Show Secret";
  }
});
