
const Element = {
    id: undefined,
    class: undefined,
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




const body = document.getElementById("elementsPage")
const cssBox = document.getElementById("cssCopyBox")



function updateCssString(colorValue) {
    let cssString = `.body {
    background-color: ${colorValue} ;
}`;

    cssBox.textContent = cssString
    console.log(cssString);



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
}