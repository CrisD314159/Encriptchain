import { valueButton } from "./script.js";



let buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", (button)=>{
   
        valueButton(button.target, event);
    })
});
