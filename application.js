isNavBarDropped = 1

function showNavBar() {
    if (isNavBarDropped) {
        document.getElementById("navdrop").classList.remove("nav-dropped");
        isNavBarDropped = 0;
    } else {
        document.getElementById("navdrop").classList.add("nav-dropped");
        isNavBarDropped = 1;
    }
}

function brightenImage(imageNumber) {
    if (window.innerWidth >= 1024/*Disable function on mobile and tablets*/) {
        document.getElementsByClassName(`img${imageNumber}`)[0].parentNode.style.filter = "brightness(100%)"
    }
}

function dimImage(imageNumber) {
    if (window.innerWidth >= 1024/*Disable function on mobile and tablets*/) {
        document.getElementsByClassName(`img${imageNumber}`)[0].parentNode.style.filter = ""
    }
}
