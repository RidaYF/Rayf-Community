const btn = document.getElementById("m-btn");
const closee = document.getElementById("m-btn-close");
const menu = document.getElementById("menu");

btn.addEventListener('click',()=>{
    if(menu.style.display==='none'){
        menu.style.display='block';
        closee.style.display='block';
        btn.style.display='none';
    }else{
        menu.style.display='none';
        closee.style.display='none';
     
    }
});

closee.addEventListener('click',()=>{
    if(menu.style.display==='block'){
        menu.style.display='none';
        closee.style.display='none';
        btn.style.display='block';
    }
});


const mediaQuery = window.matchMedia("(min-width: 778px)");

function handleMediaQueryChange(e) {
    if (e.matches) {
        menu.style.display='none';
        closee.style.display='none';
        btn.style.display='none';
   
    } else {
        menu.style.display='none';
        closee.style.display='none';
        btn.style.display='block';
    }
}


handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQueryChange);

/* HEADER CONTROLL */

let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling Down: Hide Header
        header.style.top = "-100px"; 
    } else {
        // Scrolling Up: Show Header
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});

