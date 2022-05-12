import {Key} from "./key"
import {keySetMain,keySetArrow} from "./keyMap"

const keyContainer = document.createElement("div")
keyContainer.classList.add("keyboard-container")

let buttonSet = {}
async function renderDefaultKeyboard(){
    // draw all basic buttons 
    const buttonSetMain = await renderButtons(keySetMain)
    // console.log("buttonSetMain")

    // make round border for 4  end elements
    makeEndsRound(buttonSetMain)

    // append buttons to conteiner
    appendButtons(buttonSetMain,keyContainer)
    
    
    // draw arrow buttons 
    const buttonSetArrow = await renderButtons(keySetArrow)

    // transform arrow buttons to fit the its container
    fitArrowButtons(buttonSetArrow)

    // create grid container for Arrow block buttons
    const arrowBlockContainer = await addArrowContainer()

    //append arrow buttons in container
    appendButtons(buttonSetArrow,arrowBlockContainer)
    

    buttonSet = {...buttonSetMain,...buttonSetArrow}
    return keyContainer
}
async function renderButtons(keySet){
    const Map = await keySet()
    for (let el in Map){
        let button = new Key().build(Map[el])
        Map[el]=button
    }
    return Map
}
const makeEndsRound = (buttonSet) => {
    buttonSet["Escape"].style.borderTopLeftRadius = "16px"
    buttonSet["sleep"].style.borderTopRightRadius = "16px"
    buttonSet["fn"].style.borderBottomLeftRadius = "16px"
}
const addArrowContainer = () => {
    const arrowBlockContainer = document.createElement("div")
    arrowBlockContainer.classList.add("arrow-block")
    keyContainer.append(arrowBlockContainer)
    return arrowBlockContainer
}
async function appendButtons(Map,container){
    for (let el in Map){
    container.append(Map[el])
    }
}
const fitArrowButtons = (buttonSet) => {
    buttonSet["ArrowRight"].style.borderBottomRightRadius = "16px"
    buttonSet["ArrowUp"].style.height = "13px"
    buttonSet["ArrowDown"].style.height = "13px"
    buttonSet["ArrowLeft"].style.gridArea = "1/1/3/2"
    buttonSet["ArrowRight"].style.gridArea = "1/3/3/4"
    buttonSet["ArrowUp"].style.gridArea =  "1/2/2/3"
    buttonSet["ArrowUp"].classList.add("up-down-buttons")
    buttonSet["ArrowDown"].style.gridArea = "2/2/3/4"
    buttonSet["ArrowDown"].classList.add("up-down-buttons")
}
export {renderDefaultKeyboard}
export {buttonSet}