const allElementsArry = []

const elementObj = {
    indexForClicks: undefined,
    id: undefined,
    class: undefined,
    innerText: undefined,
    date: undefined,
    subElement: false,
    css: ``,
    html: ``,
    styles: {
        units: {
            unitsFont: undefined,
            unitsWidth: undefined,
            unitsHeight: undefined,
            unitsMargin: undefined,
            unitsPadding: undefined
        },
        font_size: undefined,
        font_family: undefined,
        font_weight: undefined,
        font_style: undefined,
        line_height: undefined,
        text_align: undefined,
        width: undefined,
        height: undefined,
        margin: undefined,
        padding: undefined,
        background_color: undefined,
        color: undefined,
        border: undefined,
        shadow: undefined,

    },

}

const stylesKeysString = Object.keys(elementObj.styles)


const body = document.getElementById("elementsPage")
const cssBox = document.getElementById("cssCopyBox")
const htmlBox = document.getElementById("htmlCopyBox")

export let hexColor = undefined
let cssString = ""

let updateCssString = (colorValue) => {
    let bodyCssBackgroundColorString = `.body {
        background-color: $;
}
    `;
    let colorBefore = bodyCssBackgroundColorString.slice(34, 35)
    cssString = bodyCssBackgroundColorString.replace(colorBefore, colorValue)

}

function setElementProperties() {
    elementObj.indexForClicks = allElementsArry.length
    elementObj.type = document.getElementById("type").value
    elementObj.id = document.getElementById("id").value
    elementObj.class = document.getElementById("class").value
    if (!isValidId(elementObj.id)) {
        return null
    }

    let innerText = document.getElementById("innerText");
    elementObj.innerText = innerText.value;


    elementObj.styles.units.unitsFont = document.getElementById("unitsFont").value;
    elementObj.styles.units.unitsHeight = document.getElementById("unitsHeight").value;
    elementObj.styles.units.unitsWidth = document.getElementById("unitsWidth").value;
    elementObj.styles.units.unitsMargin = document.getElementById("unitsMargin").value;
    elementObj.styles.units.unitsPadding = document.getElementById("unitsPadding").value;
    elementObj.styles.units.unitsBorder = document.getElementById("unitsBorder").value;

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

    const currentDateAndTime = new Date();
    const formattedDate = `${currentDateAndTime.getFullYear()}-${(currentDateAndTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateAndTime.getDate().toString().padStart(2, '0')} ${currentDateAndTime.getHours().toString().padStart(2, '0')}:${currentDateAndTime.getMinutes().toString().padStart(2, '0')}:${currentDateAndTime.getSeconds().toString().padStart(2, '0')}`;


    elementObj.date = formattedDate

    const cssSelectorType = cssBoxSelectorValidation()

    //=======================cssBox String Create part================================================


    let allCssBoxStringCombinedArry = []

    //const cssStylesToCheck = ["font_size", "font_family", "font_weight", "font_style", "line_height", "width", "height", "margin", "padding", "background_color", "color", "border", "shadow","text_align"]
    stylesKeysString.forEach(value => {
        let modifiedValue = value.replace(/([_])/g, '-');
        if (elementObj.styles[value]) {
            if (value === "font_size") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.units.unitsFont};\n`);
            }
            if (value === "width") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.units.unitsWidth};\n`);
            }
            if (value === "height") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.units.unitsHeight};\n`);
            }
            if (value === "margin") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.units.unitsMargin};\n`);
            }
            if (value === "padding") {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]}${elementObj.styles.units.unitsPadding};\n`);
            }
            if (value === "border" && /^\d$/.test(elementObj.styles.border.charAt(0))) {
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]};\n`);
            }
            if (value != "font_size" && value != "width" && value != "height" && value != "margin" && value != "padding" && value != "border" && value != "units")
                allCssBoxStringCombinedArry.push(`${modifiedValue}: ${elementObj.styles[value]};\n`)
        }


    })

    let allCssBoxStringCombinedAsString = allCssBoxStringCombinedArry.join(' ');
    elementObj.css = `${cssSelectorType} {
${allCssBoxStringCombinedAsString}
}
`;










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


    //===============================================================================================
    allElementsArry.push(JSON.parse(JSON.stringify(elementObj)))
    return JSON.parse(JSON.stringify(elementObj))

}


function cssBoxSelectorValidation() {
    let cssSelectorType = `${elementObj.type}`
    if (elementObj.class) {
        cssSelectorType = `.${elementObj.class}`

    }
    if (!elementObj.class && elementObj.id) {
        cssSelectorType = `#${elementObj.id}`
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
    el.style.fontSize = obj.styles.font_size + obj.styles.units.unitsFont
    el.style.fontFamily = obj.styles.font_family
    el.style.fontWeight = obj.styles.font_weight
    el.style.fontStyle = obj.styles.font_style
    el.style.lineHeight = obj.styles.line_height
    el.style.textAlign = obj.styles.text_align
    el.style.width = obj.styles.width + obj.styles.units.unitsWidth
    el.style.height = obj.styles.height + obj.styles.units.unitsHeight
    el.style.margin = obj.styles.margin + obj.styles.units.unitsMargin
    el.style.padding = obj.styles.padding + obj.styles.units.unitsPadding
    el.style.backgroundColor = obj.styles.background_color;
    el.style.color = obj.styles.color;
    el.style.border = obj.styles.border;
    el.style.position = "relative";
    el.addEventListener('click', ClickedElementInDom.bind(obj));
    body.appendChild(el)

}

let correntClickedElementIndex = undefined

function ClickedElementInDom() {



    const specificIndexOfClickedElement = allElementsArry.findIndex((element) => this.indexForClicks === element.indexForClicks)


    const clickedObj = allElementsArry[specificIndexOfClickedElement]
    console.log("clickedObj", clickedObj);

    //TYPES IDS CLASS AND INNER TEXT
    document.getElementById("type").value = clickedObj.type;
    document.getElementById("id").value = clickedObj.id;
    document.getElementById("class").value = clickedObj.class;
    document.getElementById("innerText").value = clickedObj.innerText;
    // All units
    document.getElementById("unitsFont").value = clickedObj.styles.units.unitsFont
    document.getElementById("unitsHeight").value = clickedObj.styles.units.unitsHeight
    document.getElementById("unitsWidth").value = clickedObj.styles.units.unitsWidth
    document.getElementById("unitsMargin").value = clickedObj.styles.units.unitsMargin
    document.getElementById("unitsPadding").value = clickedObj.styles.units.unitsPadding
    document.getElementById("unitsBorder").value = clickedObj.styles.units.unitsBorder
    //Font
    document.getElementById("font-size").value = clickedObj.styles.font_size
    document.getElementById("font-family").value = clickedObj.styles.font_family
    document.getElementById("font-weight").value = clickedObj.styles.font_weight
    document.getElementById("font-style").value = clickedObj.styles.font_style
    document.getElementById("line-height").value = clickedObj.styles.line_height
    document.getElementById("text-align").value = clickedObj.styles.text_align
    //Sub Element
    document.getElementById("subElement").value = clickedObj.subElement
    // Style of element
    document.getElementById("width").value = clickedObj.styles.width
    document.getElementById("height").value = clickedObj.styles.height
    document.getElementById("margin").value = clickedObj.styles.margin
    document.getElementById("padding").value = clickedObj.styles.padding
    document.getElementById("background-color").value = clickedObj.styles.background_color
    document.getElementById("color").value = clickedObj.styles.color
    // Border settings
    const borderValue = clickedObj.styles.border;
    const [borderSize, borderType, borderColor] = borderValue.split(' ');

    if (borderSize && !isNaN(parseFloat(borderSize))) {
        const sizeWithoutUnits = parseFloat(borderSize);
        document.getElementById("borderSize").value = sizeWithoutUnits
    } else {
        document.getElementById("borderSize").value = ""
    }

    document.getElementById("borderType").value = borderType
    document.getElementById("borderColor").value = borderColor
    //shadow
    document.getElementById("shadow").value = clickedObj.styles.shadow

    correntClickedElementIndex = specificIndexOfClickedElement
    showBtns(true)



}


function showBtns(displayStatus) {
    if (displayStatus) {
        document.getElementById("saveBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("deleteBtn").style.display = "block"
    } else {
        document.getElementById("saveBtn").style.display = "block"
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("deleteBtn").style.display = "none"
    }

}



function renderHtmlCopyBox() {

    console.log("trying to render html box");
    htmlBox.textContent = ""
    for (let i = 0; i < allElementsArry.length; i++) {
        htmlBox.textContent += allElementsArry[i].html;

    }

}


function renderCssBoxCopyBox() {
    cssBox.value = cssString + "\n"
    console.log("trying to render css box");
    for (let i = 0; i < allElementsArry.length; i++) {
        cssBox.value += allElementsArry[i].css;



    }
}

function setBackgroundColor(color) {

    body.style.backgroundColor = color
    hexColor = color

}


function isValidId(id) {
    const isValidFormat = /^[a-zA-Z][a-zA-Z0-9_\-]*$|^$/.test(id); //false
    const isUnique = allElementsArry.some(element => {
        if (element.id === id) {
            if (element.id != "") {
                return true
            }
            return false
        }


    }); //true


    if (isValidFormat === false || isUnique === true) {
        return false
    } else {
        return true
    }


}


function isValidClassName(className) {
    return /^[a-zA-Z_][a-zA-Z0-9_\-]*$/.test(className);
}



function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
}




function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}







function deleteSpecificElement() {
    if (correntClickedElementIndex !== undefined) {
        console.log("delete");
        removeAllChildNodes(body)
        allElementsArry.splice(correntClickedElementIndex, 1)
        let newIndexForClicks = 0
        let obj = allElementsArry.forEach((element) => {
            element.indexForClicks = newIndexForClicks
            addElement(element)
            newIndexForClicks++
        })

        renderHtmlCopyBox()
        renderCssBoxCopyBox()
        correntClickedElementIndex = undefined
        showBtns(false)
        console.log(allElementsArry);
    } else {
        console.log("correntClickedElementIndex didnt clicked on an element", correntClickedElementIndex);
    }


}

function clearAll() {

    removeAllChildNodes(body)
    allElementsArry.splice(0, allElementsArry.length);
    renderHtmlCopyBox()
    renderCssBoxCopyBox()
    correntClickedElementIndex = undefined
    showBtns(false)
    console.log("clearAll", allElementsArry);

}



function updateSpecificElement() {
    if (correntClickedElementIndex !== undefined) {

        removeAllChildNodes(body)
        allElementsArry.splice(correntClickedElementIndex, 1)
        setElementProperties()
        let lastObj = allElementsArry.pop()
        allElementsArry.splice(correntClickedElementIndex, 0, lastObj)
        let newIndexForClicks = 0
        let obj = allElementsArry.forEach((element) => {
            element.indexForClicks = newIndexForClicks
            addElement(element)
            newIndexForClicks++
        })



        renderHtmlCopyBox()
        renderCssBoxCopyBox()
        correntClickedElementIndex = undefined
        console.log(allElementsArry);
        showBtns(false)
    } else {
        console.log("correntClickedElementIndex didnt clicked on an element", correntClickedElementIndex);
    }

}







async function copyTextAndAlert(textareaId) {


    let textarea = document.getElementById(textareaId);
    try {
        console.log("in try");
        await navigator.clipboard.writeText(textarea.value)
        console.log("test");

    } catch (error) {
        console.log("Got a catch error", error);
    }


}






export {
    renderHtmlCopyBox,
    addElement,
    handleFormSubmit,
    setBackgroundColor,
    updateCssString,
    renderCssBoxCopyBox,
    setElementProperties,
    deleteSpecificElement,
    updateSpecificElement,
    clearAll,
    copyTextAndAlert,

}