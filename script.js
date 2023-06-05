let button = document.getElementById("btn");


document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("inp");
    input.placeholder = "Enter Your Number(m²)";
});

const readInput = (event) => {
    event.preventDefault();
    let value = document.getElementById("inp").value;
    let resinp = document.getElementById("res");
    let result = value * Math.pow(3.28084, 2) ;
    console.log(result);
    resinp.innerHTML = result.toFixed(3) + " Sq. Foot";

}

button.addEventListener("click", readInput);

