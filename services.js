const allElementsArry = []

const elementObj = {
    id: undefined,
    class: undefined,
    date: undefined,
    subElement: undefined,
    css: ``,
    html: ``,
    styles: {

        width: 100,
        height: 100,
        color: undefined,
        backgroundColor: "blue",
        border: undefined,
        shadow: undefined,

    },



}



const body = document.getElementById("elementsPage")
const cssBox = document.getElementById("cssCopyBox")
const htmlBox = document.getElementById("htmlCopyBox")




export let hexColor = undefined



let htmlString = `
<body>
${elementObj.html}
</body>
`;


let cssString = `.body {
    background-color: $;
}`;










let updateCssString = (colorValue) => {
    // if()
    let colorBefore = cssString.slice(30, 31)

    // console.log("color before", colorBefore);

    if (colorBefore === "$") {
        cssString = cssString.replace(colorBefore, colorValue)
        // console.log("IN IF");

    } else {
        colorBefore = cssString.slice(30, 37)
        cssString = cssString.replace(colorBefore, colorValue)
        // console.log("IN ELSEEEEEEEEEEEEEEEEEE");
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
    elementObj.html = undefined
    elementObj.css = undefined
    let type = document.getElementById("type")
    let id = document.getElementById("id")
    let className = document.getElementById("class")
    type.value = type.value || "div"


    // console.log("elemnts values", type.value, id.value, className.value);


    elementObj.type = type.value
    elementObj.id = id.value
    elementObj.class = className.value

    allElementsArry.push(elementObj)

    // console.log(allElementsArry);





    type.value = "";
    id.value = "";
    className.value = "";

    return elementObj

}







function addElement(obj) {
    console.log("from addElement", obj);
    const el = document.createElement(obj.type);
    el.id = obj.id;
    el.classList.add(obj.class);
    el.style.backgroundColor = 'lightblue';
    el.style.padding = '10px';

    body.appendChild(el)

    // add the newly created element and its content into the DOM
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);

}



function renderHtmlCopyBox(obj) {
    {/* <div class="2" style="background-color: lightblue; padding: 10px;"></div> */ }
    let propertyArray = [];

    if (obj.id) {
        propertyArray.push(`id="${obj.id}"`);
    }

    if (obj.class) {
        propertyArray.push(`class="${obj.class}"`);
    }

    let elPropertys = propertyArray.join(' ');

    elementObj.html = `<${obj.type} ${elPropertys}></${obj.type}>`;
    // console.log("RENDER", elementObj.html);
    for (let i = 0; i < allElementsArry.length; i++) {
        console.log("in for", allElementsArry);
    }

    htmlBox.textContent = ""
    for (let i of allElementsArry) {
        htmlBox.textContent += i.html
    }


}




function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
}


export {
    renderHtmlCopyBox,
    addElement,
    handleFormSubmit,
    setBackgroundColor,
    updateCssString,
    renderCssBox,
    setElementProperties,
}