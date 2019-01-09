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

function hoverOn(whichHand) {
    if (whichHand == 1) {
        handsHovered1 = 1;
    }
    else {
        handsHovered2 = 1;
    }
}

function hoverOff(whichHand) {
    if (whichHand == 1) {
        handsHovered1 = 0;
    }
    else {
        handsHovered2 = 0;
    }
}

function hoverUpdate1() {
    if (handsHovered1 == 1) {
        document.getElementById("overlay1").classList.remove("overlay");
        document.getElementById("overlay1").classList.add("overlayhandhover");
    }
    else if (handsHovered1 == 0) {
        document.getElementById("overlay1").classList.remove("overlayhandhover");
        document.getElementById("overlay1").classList.add("overlay");
    }
}

function hoverUpdate(handHovered) {
    if (handsHovered1 == 1) {
        document.getElementById(`overlay${handHovered}`).classList.remove("overlay");
        document.getElementById(`overlay${handHovered}`).classList.add("overlayhandhover");
    }
    else if (handsHovered1 == 0) {
        document.getElementById(`overlay${handHovered}`).classList.remove("overlayhandhover");
        document.getElementById(`overlay${handHovered}`).classList.add("overlay");
    }
}
