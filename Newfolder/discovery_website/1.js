let nav = document.querySelector("nav");
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        nav.style.backgroundColor="rgb(27, 182, 161)";
    }
    else{
         nav.style.backgroundColor="transparent";
    }
})

let about  = document.querySelector("#about");
window.addEventListener("scroll",()=>{
    if(window.scrollY>1100 && window.scrollY<1700){
        about.style.backgroundColor="rgb(180, 23, 177)";

    }
    else{
         about.style.backgroundColor="transparent";
    }
})
let exp  = document.querySelector("#expp");
window.addEventListener("scroll",()=>{
    if(window.scrollY>1710 && window.scrollY<10000){
        exp.style.backgroundColor="rgb(180, 23, 177)";
    }
    else{
         exp.style.backgroundColor="transparent";
    }
})

