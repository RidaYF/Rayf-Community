document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => { 
     
        document.getElementById("preloader").remove();
        const content = document.getElementById("main-content");
        content.style.visibility = 'visible';
        content.style.opacity = 1;

        const content_1 = document.getElementById("main-content-1");
        content_1.style.visibility = 'visible';
        content_1.style.opacity = 1;

        const content_2 = document.getElementById("main-content-2");
        content_2.style.visibility = 'visible';
        content_2.style.opacity = 1;
    }, 4000);
});