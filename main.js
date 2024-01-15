import { renderHtmlCopyBox, addElement, setElementProperties, updateCssString, renderCssBoxCopyBox, setBackgroundColor } from "./services.js"

document.getElementById("inputPage1").addEventListener("click", () => {
    document.getElementById("all-font-settings").style.display = "block"
})
document.getElementById("inputPage2").addEventListener("click", () => {
    document.getElementById("all-font-settings").style.display = "none"

})
document.getElementById("inputPage3").addEventListener("click", () => {
    document.getElementById("all-font-settings").style.display = "none"

})







document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("msg").classList.add("hidden")
    document.getElementById("main").classList.remove("hidden")

})


document.getElementById("colorPickerBackground").addEventListener("input", controller)
// colorPicker.value

function controller() {
    let colorValue = document.getElementById("colorPickerBackground").value;
    setBackgroundColor(colorValue)
    updateCssString(colorValue)
    renderCssBoxCopyBox()

    // handleInputChange(colorPicker.value)

}



document.getElementById("elementProperties").addEventListener("submit", elController)

function elController(event) {
    event.preventDefault()
    let obj = setElementProperties()
    console.log("GOT OBJ at elController");
    if (obj === null) {

        const alert = document.getElementById("alert");
        alert.style.display = "block";
        document.getElementById("closebtn").addEventListener("click", () => {
            alert.style.display = "none";
        })

    } else {
        console.log("Element object it ok and good for adding it to DOM");
        addElement(obj)
        renderHtmlCopyBox(obj) //string of proprty
        renderCssBoxCopyBox(obj)
    }



}
