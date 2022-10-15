// Adding functionality to start game button

function beginGame() {
    const playBtn = document.getElementsByClassName("playBtn");

    Array.from(playBtn).forEach((x) => {
        x.addEventListener("click", function () {
            if (this.innerText == "Click to play") {
                const gameText = document.querySelector(".gameText");
                gameText.innerText = "Make your selection";
                this.innerText = "Paper";
                playBtn[0].classList.remove("hide");
                playBtn[2].classList.remove("hide");
            }
            else {

                const compOptions = ["Rock", "Paper", "Scissors"];
                let randomNumber = Math.floor(Math.random() * 3);
                let compChoice = compOptions[randomNumber];
                let playerChoice = this.innerText;
                const playerHand = document.querySelector(".playerHand");
                const compHand = document.querySelector(".computerHand");
                const hands = [playerHand, compHand];
                hands.forEach((x)=>{
                    x.src = "Rock.png"
                })
                const gameText = document.querySelector(".gameText");
                gameText.innerText = ""
                setTimeout(()=>{
                    playerHand.src = `${playerChoice}.png`;
                    compHand.src = `${compChoice}.png`;
                    let playerScore = document.querySelector(".playerScore p").innerText;
                    let compScore = document.querySelector(".computerScore p").innerText;
    
                    if (compChoice == playerChoice) {
                        gameText.innerText = "The game is a draw";
                    }
                    else {
                        if (
                            playerChoice == "Paper" && compChoice == "Rock" ||
                            playerChoice == "Rock" && compChoice == "Scissors" ||
                            playerChoice == "Scissors" && compChoice == "Paper"
                        ) {
                            gameText.innerText = "You won!"
                            playerScore ++;
                            document.querySelector(".playerScore p").innerText = playerScore;
                        }
                        else{
                            gameText.innerText = "You lost!"
                            compScore ++;
                            document.querySelector(".computerScore p").innerText = compScore;
                        }
                    }    
                }, 2000)
               
                playerHand.style.animation = "shakePlayer 2s ease";
                compHand.style.animation = "shakeComputer 2s ease";
                hands.forEach((x)=>{
                    x.addEventListener("animationend", ()=>{
                        x.style.animation = "";


                    })
                })
            }
        })
    })
}

beginGame()
