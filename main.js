import { updateCssString, renderCssBox, handleFormSubmit, handleInputChange, setBackgroundColor } from "./services.js"




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



