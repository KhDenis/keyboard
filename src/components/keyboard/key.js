import { keySetArrow } from "./keyMap";

export class Key{
    constructor(obj){}
    build(obj){
        let key = document.createElement("div");
        key.classList.add("key");
        key.style.width = obj.Width;
        key.id = obj.Code
        for (let en in obj){
            key.dataset[en] = typeof(obj[en]) === "undefined" ? "" : obj[en]
            key.innerText = obj.Eng
            key.dataset.mode = "Eng"
            key.dataset.value = obj["EngValue"]
        }
        return key
    }
}
