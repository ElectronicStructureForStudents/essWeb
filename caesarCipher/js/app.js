// Define elements used 
let currentRot = 13 // as default 
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let alphabetIds = {'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7, 'I':8, 'J':9, 'K':10, 'L':11, 'M':12,'N':13, 'O':14, 'P':15, 'Q':16, 'R':17, 'S':18, 'T':19, 'U':20, 'V':21, 'W':22, 'X':23, 'Y':24, 'Z':25}

/**
 * ROT cipher convert encode/decode string to decode/encode string,in base of selected ROT
 * @param {String} stringCipher - String to convert 
 * @param {Number} rot - Number to add or substrac from indexLetter
 * @param {Number} conditionValue - Value used to evaluate the first condition for encode/decode and value substrac to indexLetter
 * @param {Number} conditionValue2 -Value add to indexLetter in second condition
 * @returns {number}
 */

function rot(stringCipher,rot,conditionValue,conditionValue2) {
  let stringConverted = ""
  // set in uppercase and convert into array
  let stringArray= stringCipher.toUpperCase().split("")
  // iterate each value from string
  stringArray.forEach((letter,i) =>{
    // set simbols for non letters
    let newLetter = letter
     if(/[A-Z]/g.test(letter)){
      // get current index
      let indexLetter = alphabetIds[letter]
      let newIndex = indexLetter+rot >= conditionValue ? indexLetter+rot-conditionValue
                                                       : indexLetter+rot+conditionValue2
      // asign new letter value
      newLetter = alphabet[newIndex]
    }
    // concatenate all letters and symbols
    stringConverted = stringConverted + newLetter
  })
  return stringConverted
}


/**
 * Get correspond cipher and dispay in view as reactive text
 * @param {String} textToEncode - Boolean to define the action to do  
 */

 function getCipher(textToEncode) {
    if (textToEncode) {
        // get cipher 
        let decodeText = rot(encoder.textContent,currentRot,alphabet.length,0)
        //set cipher in encode container 
        decoder.textContent = decodeText
    }else{
        let encodeText = rot(decoder.textContent,-currentRot,0,alphabet.length)
        //set cipher in encode container 
        encoder.textContent = encodeText
    }
}


/**
 * Set a selected rot and style the current letter rot
 */

function setRot(){
    // remove style from current root
    alphabetElement.children[currentRot].className=""
    // set selected rot
    currentRot = parseInt(rotInput.value)
    // set new style in selected rot
    alphabetElement.children[currentRot].className="selected-rot"
}

/**
 *  Copy roman number as clipboard
 */

 function copyText(e){
    // set value to copy
    clipboard.textContent= e.target.parentElement.parentElement.nextElementSibling.textContent.toUpperCase()
    // click the div editable 
    clipboard.focus()
    // select all content 
    document.execCommand('selectAll', false, null)
    // copy text 
    document.execCommand("copy")
    // display none to avoid focus in input 
    clipboard.style.display="none"
    setTimeout(() => {
        clipboard.style.display="block"
    }, 50);
}