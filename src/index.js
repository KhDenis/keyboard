import "../src/sass/main.scss"
import {components} from "./components/index"
import {evaluateMouseEvents} from "./events/mouseEvents"
import {evaluateKeyboardEvents} from "./events/keyboardEvents"


//generate web app
function app(){
    const body = document.body
    body.append(components.windowContainer)
    evaluateMouseEvents()
    evaluateKeyboardEvents()
}
app()