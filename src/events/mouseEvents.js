import {components} from "../components/index"

// add mouse click event
const clickEvents = function (){
    document.addEventListener("mousedown",(e)=>select(e))
    document.addEventListener("mousedown",(e)=>tapSymbol(e))
    document.addEventListener("pointerdown",(e)=>transitionEffect(e))
    document.addEventListener("pointerup",(e)=>canselTransition(e))
}
const select = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        document.addEventListener("mousedown",(e)=>e.preventDefault())
    }
    if(e.target.className.includes("input")){
        document.getElementById("textarea").focus()
    }
}
const  tapSymbol = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        let actualText = components.windowContainer.textarea.value
        let element = e.target
        let mode = element.dataset.mode
        console.log(element.dataset[`Shift${mode}Value`])
        components.windowContainer.textarea.value = actualText+element.dataset.value
    }
}
const transitionEffect = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        e.target.classList.add("button-down")
    }
}
const canselTransition = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        e.target.classList.remove("button-down")
    }
}
function evaluateMouseEvents(){
    clickEvents()
}

export{evaluateMouseEvents}