"use strict";
document.addEventListener("DOMCOntentLoaded",() => {
    const button = document.querySelector("btn");
    button == nul || button === void ? void 0 : button.addEventListener("click", () => {
        const r = Math.floor(Math.random() * 64);
        const g = Math.floor(Math.random() * 64);
        const b = Math.floor(Math.random() * 64);
        document.body.style.backgroundColor = 'rgb(${r}, ${g}, ${b})';
        });
});