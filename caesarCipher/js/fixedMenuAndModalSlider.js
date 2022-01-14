//// Global variables 

// modal container element
const modalContainer=document.getElementById("modalContainer")
// image of modal slider 
const sliderImage=document.getElementById("sliderImage")
// caption of modal slider 
const sliderCaption=document.getElementById("sliderCaption")
// Array of modal images 
const modalSliderImages=[
    [{
        "imagePath":"./media/wireframeDesktop.jpg",
        "captionText":"Wireframe desktop (1/2)",
        "altText":"Wireframe of desktop"
    },
    {
        "imagePath":"./media/wireframeMobile.jpg",
        "captionText":"Wireframe mobile (2/2)",
        "altText":"Wireframe of mobile"
    }],
    [{
        "imagePath":"./media/diagram1.jpg",
        "captionText":"Flowchart caesar cipher (1/2)",
        "altText":"Flowchart caesar cipher  (1/2)"
    },{
        "imagePath":"./media/diagram2.jpg",
        "captionText":"Flowchart caesar cipher (2/2)",
        "altText":"Flowchart caesar cipher  (2/2)"
    }],
    [{
        "imagePath":"./media/html.jpg",
        "captionText":"index.html (1/4)",
        "altText":"image of html index file"
    },
    {
        "imagePath":"./media/css.jpg",
        "captionText":"generalStyles.css (2/4)",
        "altText":"image of css style file"
    },
    {
        "imagePath":"./media/js1.jpg",
        "captionText":"app.js (3/4)",
        "altText":"image of js file"
    },
    {
        "imagePath":"./media/js2.jpg",
        "captionText":"fixedMenuAndModalSlider.js (4/4)",
        "altText":"image of js file"
    }]
]
// varibles of slider 
var currentOption = 0;
var currentIndex = 0;
var currentSize = 0;

//// Global functions

/**
 * This function handle multiple clicks of button elements displayed in the current DOM
 * @param {String} type - Type of button 
 */
function buttonMenu(type){
    // make synchronous code with a promise
    new Promise(resolve=>{
        // send a function resolve if response is true
        if(buttonHandler(type)){
            resolve()
        }
    }).then(()=>{
        // Enable all buttons 
        disableButtons(false)
    })
}

/**
 * Disable all buttons in DOM 
 * @param {Boolean} disable - Condition to disable/ enable all buttons
 */

function disableButtons(disabled){

    // make an array of all buttons
    let buttonList=[...document.getElementsByTagName("button")]

    let status = disabled ? true : false 

    // disable or enable all buttons 
    buttonList.forEach(button => {
        button.disabled=status
    });
    
}

/**
 * Execute the correspond action for each  button in base of type param 
 * @param {String} type -Define the function of the button 
 * @returns Always return true to resolve the promise 
 */

function buttonHandler(type) {
    
    // check each type and execute code
    if(type=="openMenu" || type=="closeMenu"){
        disableButtons(true)
        displayFixedMenu()
    }else if(type=="code" || type=="diagram" || type=="wireframe"){
        // Display modal
        disableButtons(true)
        displayModal(true)
        displayFixedMenu()
        selectOption(type)
    }else if(type.target.id=="modalContainer"){
        disableButtons(true)
        // when type is closeModal
        displayModal(false)
        if(document.getElementById("fixedMenu").className=="fixed-button-menu hidden-element"){
            displayFixedMenu()
        }
        sliderImage.src="#"
    }else{
        // click inside modal
        return false
    }
    disableButtons(true)
    return true 
}

/**
 * Toogle classes of fixed menu to show and hide the options
 * @param {Boolean} showMenu - Condition to display/hide menu
 */

function displayFixedMenu() {

    // hide and show menu
    document.getElementById("fixedMenu").classList.toggle("hidden-element")
    // toogle classes for each button to move it 
    document.getElementById("wireframe").classList. toggle("third-button-position");
    document.getElementById("diagram").classList.toggle("second-button-position");
    document.getElementById("code").classList.toggle("first-button-position");
    // document.getElementById("diagram").classList.toggle("second-button-position");
}

/**
 * This funcition switch the class name of modal container to display the modal and his animation
 * @param {Boolean} showModal - Define if modal is displayed 
 */

function displayModal(showModal) {
    // check if modal is display or hide and change class name, and disable/enable body scroll
    modalContainer.className= showModal ? 
    (document.body.style.overflow="hidden","modal-container modal-open-animation") :
    (document.body.style.overflow="auto","modal-container modal-close-animation") ;
}

/**
 * Selected option of fixed menu and set first image of array 
 * @param {String} type - Option selected 
 */

function selectOption(type){
    // reset default values 
    this.currentOption=0;
    this.currentIndex = 0;
    this.currentSize = 0;
    // select fixed menu seccion
    currentOption= type=="wireframe" ? 0 : type=="diagram" ? 1 : 2
    // set first image of array
    sliderImage.src=modalSliderImages[currentOption][0].imagePath
    sliderImage.alt=modalSliderImages[currentOption][0].altText
    sliderCaption.textContent="\n"+modalSliderImages[currentOption][0].captionText
    currentSize=modalSliderImages[currentOption].length
}

/**
 * Display the images of the selected section and controled with the modal arrows
 * @param {String} type - Option selected 
 */

function modalSlider(action) {
    disableButtons(true)
    //check index and handle cases -1 and index bigger than length array 
    currentIndex+= action=="next" ? 1 : -1
    if(currentIndex <= -1 ){
        currentIndex=currentSize-1
    }else if(currentIndex >= currentSize){
        currentIndex=0
    }
    // togle class for modal image 
    sliderImage.classList.toggle("transition-effect")
    sliderCaption.classList.toggle("transition-effect")
    // wait to finish aniamtion 
    setTimeout(() => {
        // set selected image 
        sliderImage.src=modalSliderImages[currentOption][currentIndex].imagePath
        sliderImage.alt=modalSliderImages[currentOption][currentIndex].altText
        sliderCaption.textContent=modalSliderImages[currentOption][currentIndex].captionText
        sliderImage.classList.toggle("transition-effect")
        sliderCaption.classList.toggle("transition-effect")
        document.getElementById("sliderContainer").scrollTo(0,0)
        setTimeout(() => {
            disableButtons(false)
        }, 300);
    }, 300);
}