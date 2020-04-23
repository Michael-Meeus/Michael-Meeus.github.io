var prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
        if (isMobileDevice()){
            navbar.style.backgroundColor = "green";
        }if (this.isMobileDevice()){
            navbar.style.backgroundColor = "red";
        }
    } else {
        if (isMobileDevice()) {
            navbar.style.top = "-52px";
        } else {
            navbar.style.top = "-60px";
        }
    }
    prevScrollpos = currentScrollPos;
}

navbar.addEventListener("mouseover", function () {
    navbar.style.top = "0";
});

navbar.addEventListener("mouseout", function () {
    if (window.pageYOffset !== 0) {
        if (isMobileDevice()) {
            navbar.style.top = "-52px";
        } else {
            navbar.style.top = "-60px";
        }
    }
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};