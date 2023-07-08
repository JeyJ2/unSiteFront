"use strict";

let menu = document.getElementById("burger");
let nav = document.getElementById("nav");
menu.addEventListener("click", () => {
    if(nav.style.display === "flex"){
        nav.style.display = "none";
    }else{
        nav.style.display = "flex";
    }
})