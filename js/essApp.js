

var menuActive = false
/**
 * Display menu and animate burger icon
 */
function openAndCloseBurgerMenu(){
    // Avoid multiples clicks
    if(!menuActive){
        menuActive=!menuActive
        // Toggle class to animate the burger menu button
        burgerTopLine.classList.toggle("line-top-rotation")
        burgerMiddleLine.classList.toggle("hidden-line")
        burgerBottomLine.classList.toggle("line-bottom-rotation")
        // Display menu
        sectionsContainer.classList.toggle("show-table-menu")
        // Wait to animation time
        setTimeout(() => {
            // Allow click again
            menuActive=!menuActive
        }, 300);
    }
}