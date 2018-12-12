isNavBarDropped = 0

function showNavBar() {
    if (isNavBarDropped) {
        document.getElementById("navdrop").classList.remove("nav-dropped");
        isNavBarDropped = 0;
    } else {
        document.getElementById("navdrop").classList.add("nav-dropped");
        isNavBarDropped = 1;
    }
}
