const prompt = require("prompt-sync")();
let wins=0;
let ties=0;
let losses=0;
let check="y";
while(check.toLowerCase() === "y"){
const UserChoice = prompt("Enter rock , paper or scissor : ");
if(UserChoice !== "rock" && UserChoice !== "paper" && UserChoice !== "scissor"){
    console.log("Please enter the valid choice");
    continue;
}
// Setting choice for Computer
const choice = ["rock","paper","scissor"];
const RandomIndex = Math.round((Math.random() * 2));
const JsChoice = choice[RandomIndex];
console.log("The computer chose : ",JsChoice);
// Check if it is a win or lose
if(JsChoice === UserChoice){
    console.log("Its a tie");
    ties++;
}
else if(UserChoice === "paper" && JsChoice === "rock"){
    console.log("Won");
    wins++;
}
else if(UserChoice === "rock" && JsChoice === "scissor"){
    console.log("Won");
    wins++;
}
else if(UserChoice === "scissor" && JsChoice ==="paper"){
    console.log("Won");
    wins++;
}
else{
    console.log("Lost");
    losses++;
}
check = prompt("Want to play more (y/n)?: ");
}
console.log("Your scores are ->");
console.log("Won :",wins,", lost :",losses,"and tied :",ties);