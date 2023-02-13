
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}

function setTextElementValueById(elementId, newValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}