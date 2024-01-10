import { renderHtmlCopyBox, addElement, setElementProperties, updateCssString, renderCssBox, setBackgroundColor } from "./services.js"

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("msg").classList.add("hidden")
    document.getElementById("main").classList.remove("hidden")

})


document.getElementById("colorPickerBackground").addEventListener("input", controller)
// colorPicker.value

function controller() {
    let colorValue = document.getElementById("colorPickerBackground").value;
    console.log(colorValue);
    setBackgroundColor(colorValue)
    updateCssString(colorValue)
    renderCssBox()

    // handleInputChange(colorPicker.value)

}

document.getElementById("elementProperties").addEventListener("submit", elController)

function elController(event) {
    event.preventDefault()
    let obj = setElementProperties()
    // console.log("obj", obj);
    addElement(obj)
    console.log(obj);
    // renderObjCss(obj.html) //string of proprty
    renderHtmlCopyBox(obj) //string of proprty

}
