const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#000000",
"#242424", "#434343", "#656565", "#898989", "#afafaf", "#d6d6d6", "#ffffff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

/* Learn More controll */

const learnMore = document.querySelector(".learn-more");
const underline = document.querySelector(".underline");

// When hovering, snap the underline back to its original position
learnMore.addEventListener("mouseenter", () => {
    underline.style.width = "80px"; // Ensure it's back to original size
});

// When the mouse moves, make the underline follow the cursor in all directions
learnMore.addEventListener("mousemove", (e) => {
    const rect = learnMore.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;

    // Move underline smoothly with cursor (magnet effect in both directions)
    underline.style.transform = `translate(${offsetX - underline.offsetWidth / 2}px, ${offsetY - underline.offsetHeight / 2}px)`;
});

// When the mouse leaves, keep the underline in its original position
learnMore.addEventListener("mouseleave", () => {
    underline.style.width = "92px"; // Ensure it's back to original width
    underline.style.transform = "translateX(0)"; // Snap back to center horizontally
});





const learnMore1 = document.querySelector(".learn-more_1");
const underline1 = document.querySelector(".underline_1");

// When hovering, snap the underline1 back to its original position
learnMore1.addEventListener("mouseenter", () => {
    underline1.style.width = "80px"; // Ensure it's back to original size
});

// When the mouse moves, make the underline1 follow the cursor in all directions
learnMore1.addEventListener("mousemove", (e) => {
    const rect = learnMore1.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;

    // Move underline1 smoothly with cursor (magnet effect in both directions)
    underline1.style.transform = `translate(${offsetX - underline1.offsetWidth / 2}px, ${offsetY - underline1.offsetHeight / 2}px)`;
});

// When the mouse leaves, keep the underline1 in its original position
learnMore1.addEventListener("mouseleave", () => {
    underline1.style.width = "92px"; // Ensure it's back to original width
    underline1.style.transform = "translateX(0)"; // Snap back to center horizontally
});





const learnMore2 = document.querySelector(".learn-more_2");
const underline2 = document.querySelector(".underline_2");

// When hovering, snap the underline2 back to its original position
learnMore2.addEventListener("mouseenter", () => {
    underline2.style.width = "92px"; // Ensure it's back to original size
});

// When the mouse moves, make the underline2 follow the cursor in all directions
learnMore2.addEventListener("mousemove", (e) => {
    const rect = learnMore2.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;

    // Move underline2 smoothly with cursor (magnet effect in both directions)
    underline2.style.transform = `translate(${offsetX - underline2.offsetWidth / 2}px, ${offsetY - underline2.offsetHeight / 2}px)`;
});

// When the mouse leaves, keep the underline2 in its original position
learnMore2.addEventListener("mouseleave", () => {
    underline2.style.width = "92px"; // Ensure it's back to original width
    underline2.style.transform = "translateX(0)"; // Snap back to center horizontally
});


