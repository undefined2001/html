// Get references to the select element and the input element
const operationSelect = document.getElementById("option");
const inputElement = document.getElementById("inp");
const outputField = document.getElementById("res");

// Add event listener to the button
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    // Get the selected option value
    const selectedOption = operationSelect.value;
    
    // Get the input value
    const inputValue = parseFloat(inputElement.value);
    
    // Perform the corresponding operation based on the selected option
    switch (selectedOption) {
        case "mtf":
            outputField.innerHTML = outputFormat(meterToFeet(inputValue), "foot");
            break;
        case "smtsf":
            outputField.innerHTML = outputFormat(meterToFeet(inputValue, false, true), " sq. foot");
            break;
        case "ftm":
            outputField.innerHTML = outputFormat(meterToFeet(inputValue, true, false), "meter");
            break;
        default:
            outputField.innerHTML = "Please Select an Option";
            break;
    }
});

function meterToFeet(num, reverse = false, is_sq = false) {
    const conversionFactor = 3.28084;
    const multiplier = reverse ? 1 / conversionFactor : conversionFactor;
    const result = is_sq ? num * multiplier * multiplier : num * multiplier;
    return result;
}

function outputFormat(val, unit) {
    let temp = unit.charAt(0).toUpperCase() + unit.slice(1);
    return `Your result is:<br> ${val.toFixed(3)} ${temp}`;
}