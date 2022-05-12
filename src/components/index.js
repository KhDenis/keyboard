import {renderDefaultKeyboard} from "./keyboard/renderKeyboard"

// document wrapper
const windowContainer = document.createElement("div")
windowContainer.classList.add("window-wrapper")

// Title
const title = document.createElement("h1")
title.textContent = "RSS Виртуальная клавиатура"

// input textarea
const textarea = document.createElement("textarea")
textarea.classList.add("input")
textarea.id = "textarea"
// textarea.rows=10;

// Text under keyboard
const messsage = document.createElement("h2")
messsage.textContent = "Для переключения языка нажми cmd+shift"


// keyboard contaner
const keyboardContainer = document.createElement("div")


// join blocks on page
windowContainer.append(title)
windowContainer.append(textarea)
windowContainer.append(keyboardContainer)
windowContainer.append(messsage)
addKeyboard()


async function addKeyboard(mode){
    const keyboard = await renderDefaultKeyboard(mode)
    keyboardContainer.append(keyboard)
}

function Components() {
    this.windowContainer = windowContainer 
    this.windowContainer.textarea = textarea
}
export const components = new Components()