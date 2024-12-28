let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rst-btn");

let player1;

if((Math.floor(Math.random()*10))%2===0){
    player1 = false;
} else{
    player1 = true;
}

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box clicked");
        if(player1){
            box.innerText ="X";
            player1 = false;
        } else{
            box.innerText ="O";
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                alert(`Congratulation ${pos1Val}, You are winner.`)
                boxes.forEach((box)=>{
                    box.innerText ="";
                    box.disabled = false;
                })
            }
        } 
    }
};
rstBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText ="";
        box.disabled = false;
    })
    if((Math.floor(Math.random()*10))%2===0){
        player1 = false;
    } else{
        player1 = true;
    }
})