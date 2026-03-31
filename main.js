
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", () => {

            const r = Math.floor(Math.random() * 64);
            const g = Math.floor(Math.random() * 64);
            const b = Math.floor(Math.random() * 64);

            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        });
    }

});
