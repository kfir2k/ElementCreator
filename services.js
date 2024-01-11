const allElementsArry = []

const elementObj = {
    id: undefined,
    class: undefined,
    innerText: undefined,
    date: undefined,
    subElement: false,
    css: ``,
    html: ``,
    styles: {
        fontSize: undefined,
        fontFamily: undefined,
        fontWeight: undefined,
        fontStyle: undefined,
        lineHeight: undefined,
        width: 100,
        height: 100,
        margin: undefined,
        padding: undefined,
        backgroundColor: "blue",
        color: undefined,
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


    // Additional properties
    let innerText = document.getElementById("innerText");
    elementObj.innerText = innerText.value;

    // Font settings
    elementObj.styles.fontSize = document.getElementById("fontSize").value;
    elementObj.styles.fontFamily = document.getElementById("fontFamily").value;
    elementObj.styles.fontWeight = document.getElementById("fontWeight").value;
    elementObj.styles.fontStyle = document.getElementById("fontStyle").value;
    elementObj.styles.lineHeight = document.getElementById("lineHeight").value;

    // Sub Element
    let subElementCheckbox = document.getElementById("subElement");
    elementObj.subElement = subElementCheckbox.checked;

    // Style of element
    elementObj.styles.width = document.getElementById("width").value;
    elementObj.styles.height = document.getElementById("hight").value;
    elementObj.styles.margin = document.getElementById("margin").value;
    elementObj.styles.padding = document.getElementById("padding").value;
    elementObj.styles.backgroundColor = document.getElementById("backgroundColor").value;
    elementObj.styles.color = document.getElementById("color").value;

    // Border settings
    elementObj.styles.border = `${document.getElementById("borderSize").value}${document.getElementById("unitsBorder").value} ${document.getElementById("borderType").value} ${document.getElementById("borderColor").value}`;

    // Shadow
    elementObj.styles.shadow = document.getElementById("shadow").value;

















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