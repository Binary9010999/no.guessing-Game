// import inquirer from 'inquirer';
// type ansType = {
//     userGuess: number
// }
// const systemGeneratedNo  = Math.floor(Math.random() * 10);
// console.log(systemGeneratedNo)
// const answers  : ansType = await inquirer.prompt([
//     {
//         type: "number",
//         name: "UserGuess",
//         message: " Write your guess b/w 1 to 10:",
//     }
// ])
// const {userGuess} = answers;
// console.log(userGuess, "userGuess",systemGeneratedNo, 'SYs')
// if(userGuess === systemGeneratedNo){
//     console.log("yeah Your answer is correct \n You Win!")
// } else{
//     console.log("Kindly Try again Better luck next time!")
// }
import inquirer from "inquirer";
const computerGeneratednumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        message: "Guess a number from 1-10",
        type: "number",
        name: "userguess"
    }
]);
const { userguess } = answer;
if (userguess === computerGeneratednumber) {
    console.log(userguess, "userguess", computerGeneratednumber);
    console.log("you got it right!you win");
}
else
    (console.log(userguess, "userguess", computerGeneratednumber),
        console.log("kindly try again better luck next time"));
