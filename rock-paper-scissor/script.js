var userScore = 0;
var compScore = 0;
let userScoreNo = document.querySelector("#user-score");
let compScoreNo = document.querySelector("#comp-score");
let result = document.querySelector("#msg");
let rstBtn = document.querySelector(".rst-btn");

rstBtn.addEventListener("click",()=>{
    result.innerText = `Play Your Turn`;
    result.style.backgroundColor = "#081b31";
    result.style.color = "#fff";
    userScoreNo.innerText = 0; userScore = 0;
    compScoreNo.innerText = 0; compScore = 0;
})

const choices = document.querySelectorAll(".choice");

const compChoice = () => {
    const options = ["rock","paper","scissor"];
    let i = Math.floor(Math.random()*3);
    return options[i];
};

const playGame = (userChoice) => {
    const comp = compChoice();
    if(userChoice === comp){
        result.innerText = `Match Draw, Retry!, ${userChoice} === ${comp}`;
        result.style.backgroundColor = "yellow";
        result.style.color = "black";
    } else{
        if(userChoice === "rock" && comp !== "paper"){
            userScore++; 
            result.innerText = `You win, ${userChoice} has defeated to ${comp}`;
            result.style.backgroundColor = "green";
        } else{
            if(userChoice === "paper" && comp !== "scissor"){
                userScore++; 
                result.innerText = `You win, ${userChoice} has defeated to ${comp}`;
                result.style.backgroundColor = "green";
            } else{
                if(userChoice === "scissor" && comp !== "rock"){
                    userScore++; 
                    result.innerText = `You win, ${userChoice} has defeated to ${comp}`;
                    result.style.backgroundColor = "green";
                } else{     
                    compScore++;
                    result.innerText = `You loss, ${comp} has defeated to ${userChoice}`;
                    result.style.backgroundColor = "red";
                }
            }
        }
    }
    userScoreNo.innerText = userScore;
    compScoreNo.innerText = compScore;

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

