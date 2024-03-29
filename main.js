import { isSavedData, copyTextAndAlert, updateSpecificElement, clearAll, deleteSpecificElement, renderHtmlCopyBox, addElement, setElementProperties, updateCssString, renderCssBoxCopyBox, setBackgroundColor } from "./services.js"


document.addEventListener("DOMContentLoaded", () => {
    isSavedData()

});




document.getElementById("inputPage1").addEventListener("click", () => {
    document.getElementById("all-border-settings").style.display = "none"
    document.getElementById("all-font-settings").style.display = "none"
    document.getElementById("sizingStyleOfElementContainer").style.display = "flex"
    document.getElementById("allElementColorSettingsContainer").style.display = "flex"
    document.getElementById("inputContianers").style.display = "flex"
    document.getElementById("TypeOfElement").style.display = "block"

})
document.getElementById("inputPage2").addEventListener("click", () => {
    document.getElementById("sizingStyleOfElementContainer").style.display = "none"
    document.getElementById("allElementColorSettingsContainer").style.display = "none"

    document.getElementById("inputContianers").style.display = "none"
    document.getElementById("TypeOfElement").style.display = "none"
    document.getElementById("all-border-settings").style.display = "none"
    document.getElementById("all-font-settings").style.display = "block"




})
document.getElementById("inputPage3").addEventListener("click", () => {
    document.getElementById("all-font-settings").style.display = "none"
    document.getElementById("all-border-settings").style.display = "block"
    document.getElementById("sizingStyleOfElementContainer").style.display = "none"
    document.getElementById("allElementColorSettingsContainer").style.display = "none"
    document.getElementById("inputContianers").style.display = "none"
    document.getElementById("TypeOfElement").style.display = "none"


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
    if (obj === null) {

        const alert = document.getElementById("alert");
        alert.style.display = "block";
        document.getElementById("closebtn").addEventListener("click", () => {
            alert.style.display = "none";
        })

    } else {
        addElement(obj)
        renderHtmlCopyBox() //string of proprty
        renderCssBoxCopyBox()
    }


}


document.getElementById("deleteBtn").addEventListener("click", deleteSpecificElement)
document.getElementById("clearAllBtn").addEventListener("click", clearAll)
document.getElementById("updateBtn").addEventListener("click", updateSpecificElement)



document.getElementById('copyToClipboardCss').addEventListener('click', async() => {
    await copyTextAndAlert('cssCopyBox');


});
document.getElementById('cssCopyBox').addEventListener('click', async() => {
    await copyTextAndAlert('cssCopyBox');


});

document.getElementById('copyToClipboardHtml').addEventListener('click', async() => {
    copyTextAndAlert('htmlCopyBox');
});
document.getElementById('htmlCopyBox').addEventListener('click', async() => {
    copyTextAndAlert('htmlCopyBox');
});
