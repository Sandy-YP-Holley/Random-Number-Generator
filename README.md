# 🎲 Random Number Generator

A simple web-based random number generator built using **HTML, CSS, and JavaScript**.

This app generates a random number between a defined minimum and maximum value when the user clicks a button.

---

## ✨ Features
- 🎲 Generates a random number between 1 and 100  
- 🖱️ Button-triggered generation  
- ⚡ Instant display update  
- 🎨 Styled with hover and active button effects  

---

## 🧠 What I Learned
- Using `Math.random()` for randomness  
- Applying `Math.floor()` to control number ranges  
- Understanding inclusive ranges using `(max - min + 1)`  
- Handling user interactions with `onclick`  
- Updating the DOM dynamically with `textContent`  

---

## 🛠️ Tech Stack
- HTML  
- CSS  
- JavaScript  

---

## 🚀 How It Works
```js
Math.floor(Math.random() * (max - min + 1)) + min;
