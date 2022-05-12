import {components} from "../components/index"
import {buttonSet} from "../components/keyboard/renderKeyboard"


const charArr = new Set
const mode = {true:"Eng",false:"Rus"}
let isEng = true

const events = function(){
    document.addEventListener("keydown",(e)=>e.preventDefault())
    document.addEventListener("keydown",(e)=>keyPress(e))
    document.addEventListener("keyup",(e)=>keyUnpressed(e))
}

const keyPress = function(e){
    //get code of pressed button
    let element = document.getElementById(e.code)
        charArr.add(e.code)
    // desing of tapping button
    keyCss(element)
    //add text in textarea
    KeyboardProcessor(e.code,element,e)
    
}
const keyCss = function(element){
    element.classList.add("key-down")
    element.classList.add("button-down")
}

const keyUnpressed = function(e){
    charArr.delete(e.code)
    if(e.code === "MetaLeft" || e.code === "MetaRight"){
        for(let el in buttonSet){
            buttonSet[el].classList.remove("key-down")
            buttonSet[el].classList.remove("button-down")
        }
        charArr.clear()
    }
    try{
        let element = document.getElementById(e.code)
        let key = e.code
        
        element.classList.remove("key-down")
        element.classList.remove("button-down")
        if( key === "ShiftLeft"|| key == "ShiftRight"){
        keyboardMode(mode[isEng])
        }
    }catch(error){console.log(error)}
}
const KeyboardProcessor = function(key,element,e){
    if(charArr.has("MetaLeft")&&charArr.has("ShiftLeft")){
        isEng = !isEng
        console.log(mode.isEng)
    }
    else if(charArr.has("Backspace")){
        let actualText = components.windowContainer.textarea.value
        console.log(typeof(actualText))
        // if(window.getSelection){
            window.getSelection().deleteFromDocument()

        // }
        components.windowContainer.textarea.value = actualText.slice(0,-1)
        
    }
    else if(charArr.has("Backspace")&&charArr.has("MetaLeft")){}
    else if(charArr.has("ShiftLeft")||charArr.has("ShiftRight")){
        keyboardMode(`Shift${mode[isEng]}`)
        let actualText = components.windowContainer.textarea.value
        components.windowContainer.textarea.value = actualText+element.dataset[`Shift${mode[isEng]}Value`]
    }
    else{
        let actualText = components.windowContainer.textarea.value
        components.windowContainer.textarea.value = actualText+element.dataset.value
    }
}

const keyboardMode = function(lang){
    for (let en in buttonSet){
        buttonSet[en].innerText = buttonSet[en].dataset[lang]
        buttonSet[en].dataset.value = buttonSet[en].dataset[`${lang}Value`]
    }
}



function evaluateKeyboardEvents(){
    events()
}
export{evaluateKeyboardEvents}