var menuActive = false
var modalOpen = false

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

/**
 * open modal and set open animation
 */

function openModal(){
    // Display modal
    modal.style.display = "flex"
    // Set modal transition 
    setTimeout(() => {
        modal.classList.add("modal-transition")
    }, 10);
        
}


/**
 * close modal and set close animation
 */

 function closeModal(){
    // Remove modal transition
    modal.classList.remove("modal-transition")
    // Hide modal after transition
    setTimeout(() => {
        modal.style.display = "none"
    }, 250);
        
}
