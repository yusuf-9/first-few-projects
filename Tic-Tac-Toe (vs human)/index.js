const items = document.querySelectorAll(".item");
const itemsArray = Array.from(items);

itemsArray.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.classList.contains("O") && item.innerText == "") {
            item.innerText = "O";
            itemsArray.forEach((x) => {
                x.classList.remove("O");
            })
            let drawCondition = itemsArray.some((y)=>{
                return y.innerText == ""
            })
            if (
                itemsArray[0].innerText == "O" &&
                itemsArray[1].innerText == "O" &&
                itemsArray[2].innerText == "O"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[1].classList.add("match");
                itemsArray[2].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[1].classList.remove("match");
                    itemsArray[2].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[3].innerText == "O" &&
                itemsArray[4].innerText == "O" &&
                itemsArray[5].innerText == "O"
            ) {
                itemsArray[3].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[5].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[3].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[5].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[6].innerText == "O" &&
                itemsArray[7].innerText == "O" &&
                itemsArray[8].innerText == "O"
            ) {
                itemsArray[6].classList.add("match");
                itemsArray[7].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[6].classList.remove("match");
                    itemsArray[7].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[0].innerText == "O" &&
                itemsArray[3].innerText == "O" &&
                itemsArray[6].innerText == "O"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[3].classList.add("match");
                itemsArray[6].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[3].classList.remove("match");
                    itemsArray[6].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[1].innerText == "O" &&
                itemsArray[4].innerText == "O" &&
                itemsArray[7].innerText == "O"
            ) {
                itemsArray[1].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[7].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[1].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[7].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[2].innerText == "O" &&
                itemsArray[5].innerText == "O" &&
                itemsArray[8].innerText == "O"
            ) {
                itemsArray[2].classList.add("match");
                itemsArray[5].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[2].classList.remove("match");
                    itemsArray[5].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[0].innerText == "O" &&
                itemsArray[4].innerText == "O" &&
                itemsArray[8].innerText == "O"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[2].innerText == "O" &&
                itemsArray[4].innerText == "O" &&
                itemsArray[6].innerText == "O"
            ) {
                itemsArray[2].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[6].classList.add("match");
                setTimeout(() => {
                    alert("player O has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                    itemsArray[2].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[6].classList.remove("match");
                }, 500)
            }
            else if(
                drawCondition == false
            ){console.log("some function works")
                    setTimeout(() => {
                    alert("The game is a draw!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                    })
                }, 500)
            }
        } else if (item.innerText == "") {
            item.innerText = "X";
            itemsArray.forEach((x) => {
                x.classList.add("O");
            })
            let drawCondition = itemsArray.some((y)=>{
                return y.innerText == ""
            })
            if (
                itemsArray[0].innerText == "X" &&
                itemsArray[1].innerText == "X" &&
                itemsArray[2].innerText == "X"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[1].classList.add("match");
                itemsArray[2].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[1].classList.remove("match");
                    itemsArray[2].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[3].innerText == "X" &&
                itemsArray[4].innerText == "X" &&
                itemsArray[5].innerText == "X"
            ) {
                itemsArray[3].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[5].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[3].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[5].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[6].innerText == "X" &&
                itemsArray[7].innerText == "X" &&
                itemsArray[8].innerText == "X"
            ) {
                itemsArray[6].classList.add("match");
                itemsArray[7].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[6].classList.remove("match");
                    itemsArray[7].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[0].innerText == "X" &&
                itemsArray[3].innerText == "X" &&
                itemsArray[6].innerText == "X"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[3].classList.add("match");
                itemsArray[6].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[3].classList.remove("match");
                    itemsArray[6].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[1].innerText == "X" &&
                itemsArray[4].innerText == "X" &&
                itemsArray[7].innerText == "X"
            ) {
                itemsArray[1].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[7].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[1].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[7].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[2].innerText == "X" &&
                itemsArray[5].innerText == "X" &&
                itemsArray[8].innerText == "X"
            ) {
                itemsArray[2].classList.add("match");
                itemsArray[5].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[2].classList.remove("match");
                    itemsArray[5].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[0].innerText == "X" &&
                itemsArray[4].innerText == "X" &&
                itemsArray[8].innerText == "X"
            ) {
                itemsArray[0].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[8].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[0].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[8].classList.remove("match");
                }, 500)
            }
            else if (
                itemsArray[2].innerText == "X" &&
                itemsArray[4].innerText == "X" &&
                itemsArray[6].innerText == "X"
            ) {
                itemsArray[2].classList.add("match");
                itemsArray[4].classList.add("match");
                itemsArray[6].classList.add("match");
                setTimeout(() => {
                    alert("player X has won!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                    itemsArray[2].classList.remove("match");
                    itemsArray[4].classList.remove("match");
                    itemsArray[6].classList.remove("match");
                }, 500)
            }
            else if(
                drawCondition == false
            ){
                console.log("some function works")
                    setTimeout(() => {
                    alert("The game is a draw!");
                    itemsArray.forEach((x) => {
                        x.innerText = ""
                        x.classList.remove("O");
                    })
                }, 500)

            }
        }
    })
})