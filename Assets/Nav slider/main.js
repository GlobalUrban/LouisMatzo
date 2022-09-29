'use strict'
const buttons = document.getElementsByClassName("button");
const first = document.getElementById("first");

buttons[0].addEventListener("click", () =>{

    console.log("Se presiono el home");
    first.style = "margin-left: 0%;";

});

buttons[1].addEventListener("click", () =>{

    console.log("Se presiono el about");
    first.style = "margin-left: -20%;";
});

buttons[2].addEventListener("click", () =>{

    console.log("Se presiono el about");
    first.style = "margin-left: -40%;";
});

buttons[3].addEventListener("click", () =>{

    console.log("Se presiono el about");
    first.style = "margin-left: -60%;";
});
