const questions = [
    ["What's 2+2?", 4],
    ["What's 79+ 88?", 167],
    ["What's 22+49?", 71],
    ["What's 54+27?", 81],
    ["What's 43+ 98?", 141],
    ["What's 67+ 78?", 145],
    ["What's 76+49?", 125],
    ["What's 51+99?", 150],
    ["What's 82+79?", 161],
    ["What's 94+37?", 131]
]

const startBtn = document.querySelector(".start-button");
const questionFeild = document.querySelector(".question");
const optionGrid = document.querySelector(".grid");
const options = Array.from(document.querySelectorAll(".item"));
const body = document.querySelector("body")

startBtn.addEventListener("click", function () {

    if (this.innerText == "Start!") {
        this.classList.add("hidden");
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * 4);
        var randomOperations = [
            [1, 3, 5, 7],
            [-1, -3, -5, -7],
            [2, 4, -2, -4],
        ]
        questionFeild.innerText = questions[randomNumber1][0];
        questionFeild.classList.remove("hidden");
        for (var i = 0; i < 1; i++) {
            options[randomNumber2].innerText = questions[randomNumber1][1];
            let emptyCells = options.filter((x)=>{
                return (x.innerText == "") == true
            })
            for(var y = 0; y < 3; y++){
                emptyCells[y].innerText = questions[randomNumber1][1] + randomOperations[y][Math.floor(Math.random() * 4)];
            }
            optionGrid.classList.remove("hidden");
            options.forEach((x)=>{
                x.addEventListener("click", function(){
                if(this.innerText == questions[randomNumber1][1]){
                    body.style.backgroundColor = "rgb(2, 88, 2)";
                    options[randomNumber2].style.backgroundColor = "rgb(2, 88, 2)";
                    emptyCells.forEach((x)=>{
                        x.style.backgroundColor = "red";
                    })
                    startBtn.innerHTML = "Next";
                    startBtn.classList.remove("hidden");
                }
                else{
                    body.style.backgroundColor = "#560000";
                    options[randomNumber2].style.backgroundColor = "rgb(2, 88, 2)";
                    emptyCells.forEach((x)=>{
                        x.style.backgroundColor = "red";
                    })
                    startBtn.innerHTML = "Next";
                    startBtn.classList.remove("hidden");
                }   
                })
            })
        }
    }
    else{
        body.style.backgroundColor = "rgb(1, 52, 110)";
        options.forEach((x)=>{
            x.style.backgroundColor = "rgb(0, 191, 255)";
            x.innerText = "";
        })
        this.classList.add("hidden");
        let randomNumber1 = Math.floor(Math.random() * 10);
        let randomNumber2 = Math.floor(Math.random() * 4);
        var randomOperations = [
            [1, 3, 5, 7],
            [-1, -3, -5, -7],
            [2, 4, -2, -4],
        ]
        questionFeild.innerText = questions[randomNumber1][0];
        questionFeild.classList.remove("hidden");
        for (var i = 0; i < 1; i++) {
            options[randomNumber2].innerText = questions[randomNumber1][1];
            let emptyCells = options.filter((x)=>{
                return (x.innerText == "") == true
            })
            for(var y = 0; y < 3; y++){
                emptyCells[y].innerText = questions[randomNumber1][1] + randomOperations[y][Math.floor(Math.random() * 4)];
            }
            optionGrid.classList.remove("hidden");
            options.forEach((x)=>{
                x.addEventListener("click", function(){
                if(this.innerText == questions[randomNumber1][1]){
                    body.style.backgroundColor = "rgb(2, 88, 2)";
                    options[randomNumber2].style.backgroundColor = "rgb(2, 88, 2)";
                    emptyCells.forEach((x)=>{
                        x.style.backgroundColor = "red";
                    })
                    startBtn.classList.remove("hidden");
                }
                else{
                    body.style.backgroundColor = "#560000";
                    options[randomNumber2].style.backgroundColor = "rgb(2, 88, 2)";
                    emptyCells.forEach((x)=>{
                        x.style.backgroundColor = "red";
                    })
                    startBtn.classList.remove("hidden");
                }   
                })
            })
        }
    }
})

