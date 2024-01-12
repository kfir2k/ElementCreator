import { renderHtmlCopyBox, addElement, setElementProperties, updateCssString, renderCssBoxCopyBox, setBackgroundColor } from "./services.js"

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
    renderCssBoxCopyBox()

    // handleInputChange(colorPicker.value)

}

document.getElementById("elementProperties").addEventListener("submit", elController)

function elController(event) {
    event.preventDefault()
    let obj = setElementProperties()
    addElement(obj)
    console.log(obj);
    renderHtmlCopyBox(obj) //string of proprty
    renderCssBoxCopyBox(obj)

}
