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
        font_size: undefined, unitsFont:undefined,
        font_family: undefined,
        font_weight: undefined,
        font_style: undefined,
        line_height: undefined,
        text_align: undefined,
        width: undefined, unitsWidth: undefined,
        height: undefined, unitsHeight: undefined,
        margin: undefined, unitsMargin: undefined,
        padding: undefined, unitsPadding: undefined,
        background_color: undefined,
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
    elementObj.styles.unitsHeight = document.getElementById("unitsHeight").value;
    elementObj.styles.unitsWidth = document.getElementById("unitsWidth").value;
    elementObj.styles.unitsMargin = document.getElementById("unitsMargin").value;
    elementObj.styles.unitsPadding = document.getElementById("unitsPadding").value;
    elementObj.styles.unitsBorder = document.getElementById("unitsBorder").value;



    // Font settings
    elementObj.styles.font_size = document.getElementById("font-size").value;
    elementObj.styles.font_family = document.getElementById("font-family").value;
    elementObj.styles.font_weight = document.getElementById("font-weight").value;
    elementObj.styles.font_style = document.getElementById("font-style").value;
    elementObj.styles.line_height = document.getElementById("line-height").value;
    elementObj.styles.text_align = document.getElementById("text-align").value;


    // Sub Element
    let subElementCheckbox = document.getElementById("subElement");
    elementObj.subElement = subElementCheckbox.checked;

    // Style of element
    elementObj.styles.width = document.getElementById("width").value;
    elementObj.styles.height = document.getElementById("height").value;
    elementObj.styles.margin = document.getElementById("margin").value;
    elementObj.styles.padding = document.getElementById("padding").value;
    elementObj.styles.background_color = document.getElementById("background-color").value;
    elementObj.styles.color = document.getElementById("color").value;

    // Border settings
    elementObj.styles.border = `${document.getElementById("borderSize").value}${document.getElementById("unitsBorder").value} ${document.getElementById("borderType").value} ${document.getElementById("borderColor").value}`;

    // Shadow
    elementObj.styles.shadow = document.getElementById("shadow").value;


    const cssSelectorType = cssBoxSelectorValidation()

    //=======================cssBox String Create part================================================


    let allCssBoxStringCombinedArry = []

    const cssStylesToCheck = ["font_size", "font_family", "font_weight", "font_style", "line_height", "width", "height", "margin", "padding", "background_color", "color", "border", "shadow","text_align"]
    cssStylesToCheck.forEach(value => {
        let modifiedValue = value.replace(/([_])/g, '-');
        if (elementObj.styles[value]) {
            if (value === "font_size") {
                console.log("Problem with _:",value , modifiedValue);
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.unitsFont};\n`);
            }
            if (value === "width") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.unitsWidth};\n`);
            }
            if (value === "height") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.unitsHeight};\n`);
            }
            if (value === "margin") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.unitsMargin};\n`);
            }
            if (value === "padding") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.unitsPadding};\n`);
            }
            if (value === "border" && /^\d$/.test(elementObj.styles.border.charAt(0))) {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]};\n`);
            }
            if (value != "font_size" && value != "width" && value != "height" && value != "margin" && value != "padding" && value != "border")
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]};\n`)
        }

        
    })
   
    let allCssBoxStringCombinedAsString = allCssBoxStringCombinedArry.join(' ');
    elementObj.css = `${cssSelectorType}{
    ${allCssBoxStringCombinedAsString}
    }`;
    console.log(elementObj.css);
    
    
    







//================================================================================================
//==============htmlBox string create part========================================================
    let propertyArray = [];
    if (elementObj.id) {
        propertyArray.push(` id="${elementObj.id}"`);
    }
    if (elementObj.class) {
        propertyArray.push(` class="${elementObj.class}"`);
    }
    let elPropertys = propertyArray.join(' ');
    elementObj.html = `<${elementObj.type}${elPropertys}>${elementObj.innerText}</${elementObj.type}>`;
    console.log("from setElementProperties", allElementsArry);

//===============================================================================================


    allElementsArry.push({ ...elementObj })
    type.value = "";
    id.value = "";
    className.value = "";

    return elementObj

}


function cssBoxSelectorValidation() {
    let cssSelectorType = `${elementObj.type}`
    if (elementObj.class) {
        cssSelectorType = `.${elementObj.class}`
        
    }
    if (!elementObj.class && elementObj.id) {
        cssSelectorType = `.${elementObj.id}`
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
    el.innerText = obj.innerText
    el.style.fontSize = obj.styles.font_size + obj.styles.unitsFont
    el.style.fontFamily = obj.styles.font_family
    el.style.fontWeight = obj.styles.font_weight
    el.style.fontStyle = obj.styles.font_style
    el.style.lineHeight = obj.styles.line_height
    el.style.textAlign = obj.styles.text_align 
    el.style.width = obj.styles.width + obj.styles.unitsWidth
    console.log("width of addelement func",el.width);
    el.style.height = obj.styles.height + obj.styles.unitsHeight
    el.style.margin = obj.styles.margin + obj.styles.unitsMargin
    el.style.padding = obj.styles.padding + obj.styles.unitsPadding
    el.style.backgroundColor = obj.styles.background_color;
    el.style.color = obj.styles.color;
    el.style.border = obj.styles.border;
    el.style.position = "relative";
    el.addEventListener('click', function () {
        console.log("test");
        //handleClick(el);
    });
    
    body.appendChild(el)

}



function renderHtmlCopyBox(obj) {


    htmlBox.textContent = ""
    console.log(allElementsArry)
    for (let i = 0; i < allElementsArry.length; i++) {
        htmlBox.textContent += allElementsArry[i].html;

    }

}


function renderCssBoxCopyBox() {
    cssBox.value = ""
    for (let i = 0; i < allElementsArry.length; i++) {
        cssBox.value += allElementsArry[i].css;

        

    }
}

function setBackgroundColor(color) {

    body.style.backgroundColor = color
    hexColor = color

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
    renderCssBoxCopyBox,
    setElementProperties,
}