const tdCollection = document.getElementsByTagName('td')
const tdCollectionArray = Array.from(tdCollection)
const calculatorDisplay = document.getElementById("calculatorDisplay");


var calculatorInput = "";
tdCollectionArray.forEach((x) => {
    x.addEventListener("click", (e) => {
        var calculatorBtnContent = e.target.innerHTML;
        console.log(calculatorBtnContent)

        if (calculatorBtnContent == 'C') {
            calculatorInput = "";
            calculatorDisplay.value = "";
        }else if (calculatorBtnContent == 'X') {
            calculatorInput += "*";
            calculatorDisplay.value += "*";
        }else if (calculatorBtnContent == '⌫') {
            calculatorInput = calculatorInput.slice(0,- 1);
            calculatorDisplay.value = calculatorDisplay.value.slice(0,-1 );
        }
        else if (calculatorBtnContent == '=') {
            var result = eval(calculatorInput);
            calculatorDisplay.value = result;
        }
        else if(calculatorDisplay.value == "" && calculatorBtnContent == "0"){
            
        }
        else {calculatorInput += calculatorBtnContent;
        calculatorDisplay.value += calculatorBtnContent;
        }
    })
})
