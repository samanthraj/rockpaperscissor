let computer_score= document.querySelector("#computer");
let Us_score =document.querySelector("#you");
let computerScore = 0;
let userscore =0;
let drawscore = 0;
let drawvariable = document.querySelector("#draw");
let user = document.querySelector(".user");
let choicesall = document.querySelectorAll(".choice");
function comp(){
    let options =["rock","paper","scissor"]
    let index = Math.floor(Math.random()*3);
    return options[index];
}

choicesall.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id");
        
        
        let com = comp();
        
        console.log(userChoice);
        console.log(com);
        user.innerText=com;
        if(userChoice === "rock " &&  com ==="scissor"){
            console.log("You win");

            userscore = userscore+1;
            Us_score.innerText=userscore;
           }

        else if(userChoice ==="paper" &&  com === "rock"){
          
            userscore = userscore+1;
            Us_score.innerText=userscore;
        }
        else if(userChoice === "scissor" && com === "paper"){
            
            userscore = userscore+1;
            Us_score.innerText=userscore;
        }
       else if(userChoice === "paper" && com=== "paper"){
        console.log("draw");
        drawscore = drawscore+1;
        drawvariable.innerText = drawscore;

       }
       else if(userChoice === "rock" && com=== "rock"){
        console.log("draw");
        drawscore = drawscore+1;
        drawvariable.innerText = drawscore;
       }
       else if(userChoice === "scissor" && com=== "scissor"){
        console.log("draw");
        drawscore = drawscore+1;
        drawvariable.innerText = drawscore;
       }

        else{
            computerScore = computerScore+1;
            computer_score.innerText=computerScore;
        }
           
    })
   
})

let showtab = document.querySelector("#win");
showtab.addEventListener("click",()=>{
    showtab.innerText ="choose any option if you don't know to how to play then click the button below to learn how to play";


})





