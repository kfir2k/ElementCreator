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
        fontSize: undefined, unitsFont:undefined,
        fontFamily: undefined,
        fontWeight: undefined,
        fontStyle: undefined,
        lineHeight: undefined,
        width: 100, unitsWidth: undefined,
        height: 100, unitsHight: undefined,
        margin: undefined, unitsMargin: undefined,
        padding: undefined, unitsPadding: undefined,
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

    // All units
    elementObj.styles.unitsFont = document.getElementById("unitsFont").value;
    elementObj.styles.unitsHight = document.getElementById("unitsHight").value;
    elementObj.styles.unitsWidth = document.getElementById("unitsWidth").value;
    elementObj.styles.unitsMargin = document.getElementById("unitsMargin").value;
    elementObj.styles.unitsPadding = document.getElementById("unitsPadding").value;
    elementObj.styles.unitsBorder = document.getElementById("unitsBorder").value;



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


    const cssSelectorType = cssBoxSelectorValidation()

    //=======================cssBox String Create part================================================


    let allCssBoxStringCombinedArry = []

    const cssStylesToCheck = ["fontSize", "fontFamily", "fontWeight", "fontStyle", "lineHeight", "width", "height", "margin", "padding", "backgroundColor", "color", "border", "shadow"]
    cssStylesToCheck.forEach(value => {
        if (elementObj.styles[value]) {
            if ("fontSize") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsFont}
            `)
            }
            if ("width") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsWidth}
            `)
            }
            if ("height") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsHeight}
            `)
            }
            if ("margin") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsMargin}
            `)
            }
            if ("padding") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsPadding}
            `)
            }
            if ("border") {
                allCssBoxStringCombinedArry.push(`${value}: ${elementObj.styles[value]} ${elementObj.styles.unitsBorder}
            `)
            }
                
                allCssBoxStringCombinedArry.push(`${value}: "${elementObj.styles[value]}"
            `)
        }

        
    })
    console.log('==================================================================',allCssBoxStringCombinedArry);

    
    
    







//================================================================================================
//==============htmlBox string create part========================================================
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

//===============================================================================================


    allElementsArry.push({ ...elementObj })
    type.value = "";
    id.value = "";
    className.value = "";

    return elementObj

}


function cssBoxSelectorValidation() {
    let cssSelectorType = ""
    if (elementObj.class) {
        cssSelectorType = "."
        
    }
    if (!elementObj.class && elementObj.id) {
        cssSelectorType = "#"
    }

    return cssSelectorType
        
}



function addElement(obj) {

    const el = document.createElement(obj.type);

    if (obj.id) {
        el.id = obj.id;
    }
    if (obj.class) {
        el.classList.add(obj.class);
    }
    
    
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