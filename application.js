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

function toggleOverlay(overlayNumber) {
    if (document.getElementById(`overlay${overlayNumber}`).overlaystatus == 1) {
        hideOverlay(overlayNumber)
    }
    else {
        showOverlay(overlayNumber)
    }
}

function showOverlay(overlayNumber) {
    document.getElementById(`overlay${overlayNumber}`).style.display = "block";
    document.getElementById(`overlay${overlayNumber}`).previousSibling.previousSibling.style.filter = "brightness(50%)";
    document.getElementById(`overlay${overlayNumber}`).overlaystatus = 1;
}

function hideOverlay(overlayNumber) {
    document.getElementById(`overlay${overlayNumber}`).style.display = "none";
    document.getElementById(`overlay${overlayNumber}`).previousSibling.previousSibling.style.filter = "brightness(100%)";
    document.getElementById(`overlay${overlayNumber}`).overlaystatus = 0;
}
