var prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}

navbar.addEventListener("mouseover", function () {
    navbar.style.top = "0";
});

navbar.addEventListener("mouseout", function () {
    if (window.pageYOffset !== 0) {
        navbar.style.top = "-60px";
    }
});