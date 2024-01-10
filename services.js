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
    let colorBefore = cssString.slice(30, 31)
    if (colorBefore === "$") {
        cssString = cssString.replace(colorBefore, colorValue)
    } else {
        colorBefore = cssString.slice(30, 37)
        cssString = cssString.replace(colorBefore, colorValue)
    }

}

function renderCssBox() {
    cssBox.textContent = cssString
}

function setBackgroundColor(color) {

    body.style.backgroundColor = color
    hexColor = color

}


function setElementProperties() {
    elementObj.html = undefined
    elementObj.css = undefined
    let type = document.getElementById("type")
    let id = document.getElementById("id")
    let className = document.getElementById("class")
    type.value = type.value || "div"

    elementObj.type = type.value
    elementObj.id = id.value
    elementObj.class = className.value



    let propertyArray = [];
    if (elementObj.id) {
        propertyArray.push(`id="${elementObj.id}"`);
    }
    if (elementObj.class) {
        propertyArray.push(`class="${elementObj.class}"`);
    }
    let elPropertys = propertyArray.join(' ');
    elementObj.html = `<${elementObj.type} ${elPropertys}></${elementObj.type}>`;
    console.log("from setElementProperties", allElementsArry);













    allElementsArry.push({ ...elementObj })

    type.value = "";
    id.value = "";
    className.value = "";



















    return elementObj

}

function addElement(obj) {

    const el = document.createElement(obj.type);
    el.id = obj.id;
    el.classList.add(obj.class);
    el.style.backgroundColor = 'lightblue';
    el.style.padding = '10px';
    body.appendChild(el)

}



function renderHtmlCopyBox(obj) {


    htmlBox.textContent = ""
    console.log(allElementsArry)
    for (let i = 0; i < allElementsArry.length; i++) {
        htmlBox.textContent += allElementsArry[i].html;

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