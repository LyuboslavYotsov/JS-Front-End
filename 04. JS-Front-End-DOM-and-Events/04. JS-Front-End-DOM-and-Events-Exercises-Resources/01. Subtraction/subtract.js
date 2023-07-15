function subtract() {
    const num1 = document.getElementById("firstNumber").value;
    const num2 = document.getElementById("secondNumber").value;

    const result = Number(num1) - Number(num2);

    const resultDiv = document.getElementById("result");

    const par = document.createElement("p");
    par.textContent = result;

    resultDiv.appendChild(par);
}