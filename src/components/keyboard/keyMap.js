import fetch from "node-fetch";

async function keySetMain(){
    const url = "https://opensheet.elk.sh/10DId3PsrfSAyKLMCOT60f-7nNOBnH1GV-gzfZbM3xGg/main"
    const response = await fetch(url);
    const Map = await response.json();
    const keyMap = {}
    Map.forEach(element => {
        keyMap[element.Code] = element
    });
    keyMap.Equal.Eng ="="
    keyMap.Equal.EngValue ="="
    keyMap.Equal.ShiftEng ="+"
    keyMap.Equal.ShiftEngValue ="+"
    keyMap.Equal.Rus ="="
    keyMap.Equal.RusValue ="="
    keyMap.Equal.ShiftRus ="+"
    keyMap.Equal.ShiftRusValue ="+"
    return keyMap
}
async function keySetArrow(){
    const url = "https://opensheet.elk.sh/10DId3PsrfSAyKLMCOT60f-7nNOBnH1GV-gzfZbM3xGg/arrow"
    const response = await fetch(url);
    const Map = await response.json();
    const keyMap = {}
    Map.forEach(element => {
        keyMap[element.Code] = element
    });
    return keyMap
}


    
export {keySetMain,keySetArrow}//, keySetArrow