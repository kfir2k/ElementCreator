
const Element = {
    id: undefined,
    class: undefined,
    date: undefined,
    styles: {

        width: undefined,
        height: undefined,
        color: undefined,
        backgroundColor: undefined,
        border: undefined,
        shadow: undefined,

    },



}


export let hexColor = undefined



let htmlString = `
<body>





</body>
`;


let cssString = `.body {
    background-color: $;
}`;








const body = document.getElementById("elementsPage")
const cssBox = document.getElementById("cssCopyBox")



let updateCssString = (colorValue) => {
    // if()
    let colorBefore = cssString.slice(30, 31)

    console.log("color before", colorBefore);

    if (colorBefore === "$") {
        cssString = cssString.replace(colorBefore, colorValue)
        console.log("IN IF");

    } else {
        colorBefore = cssString.slice(30, 37)
        cssString = cssString.replace(colorBefore, colorValue)
        console.log("IN ELSEEEEEEEEEEEEEEEEEE");
    }


    console.log(cssString);
}





function renderCssBox() {
    cssBox.textContent = cssString
}




function setBackgroundColor(color) {

    body.style.backgroundColor = color
    hexColor = color
    console.log("hex color", hexColor);

}




function setElementProperties() {



}



function getUserInputString() {

}

function getUserInputNumber() {

}





function handleInputChange(event) {


}



function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
}


export {
    handleInputChange,
    handleFormSubmit,
    setBackgroundColor,
    updateCssString,
    renderCssBox,
}