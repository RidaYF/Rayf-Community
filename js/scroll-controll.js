const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}
function addAnimation(){
    scrollers.forEach((scroller)=>{
        scroller.setAttribute("data-animated",true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);
        const scrollerInner2 = scroller.querySelector(".scroller_inner_2");
        const scrollerContent2 = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden",true);
            scrollerInner.appendChild(duplicatedItem);
        });
        scrollerContent2.forEach((item) => {
            const duplicatedItem2 = item.cloneNode(true);
            duplicatedItem2.setAttribute("aria-hidden",true);
            scrollerInner2.appendChild(duplicatedItem2);
        });
    });

}


/* FOOTER SCROLLING INFINITE */

const scrollersFooter = document.querySelectorAll('.footer-scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimations();
}
function addAnimations(){
    scrollersFooter.forEach((scroller)=>{
        scroller.setAttribute("data-animated",true);

        const scrollerInnerFooter = scroller.querySelector(".footer-scroller_inner");                      
        const scrollerContentFooter = Array.from(scrollerInnerFooter.children);

        scrollerContentFooter.forEach((item) => {
            const duplicatedItemFooter = item.cloneNode(true);
            duplicatedItemFooter.setAttribute("aria-hidden",true);
            scrollerInnerFooter.appendChild(duplicatedItemFooter);
        });
    });
}

/* SOCIAL MEDIA ICONS  */

window.addEventListener("scroll", function () {
    let socialIcons = document.querySelector(".social-icons");
    let footer = document.querySelector(".footer");
    let footerTop = footer.getBoundingClientRect().top;
    
    if (footerTop < window.innerHeight) {
        // Move the icons up as the footer appears
        let offset = window.innerHeight - footerTop;
        socialIcons.style.bottom = `${20 + offset}px`;
    } else {
        // Keep them fixed in place
        socialIcons.style.bottom = "20px";
    }
});
