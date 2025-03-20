document.addEventListener("DOMContentLoaded", ()=>{
    console.log("The DOM has loaded");
    document.querySelector('p').textContent ="This is really cool!";
})
console.log(
    "This console.log() fires when index.js loads - brefore DOMContentLoaded is triggered"
);