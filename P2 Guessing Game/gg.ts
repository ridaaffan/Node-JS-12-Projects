#! /usr/bin/env node

import inquirer from "inquirer";

let score: number = 0;

async function startLoop() {
    let again;
    do{
        await guessNumber();
        again = await inquirer.prompt([
            {
                name: "restart",
                type: "list",
                choices: ["Yes" , "No"],
                message: "Do you want to continue?"
            }
        ]);
       
    } while(again.restart==="Yes");

}

startLoop();

async function guessNumber() {
    let guessNum = Math.floor(Math.random()*10);
    let tip;
    if (guessNum%2==0){
        tip= "Tip: Number is even"
    }else{
        tip= "Tip: Number is odd"
    }

    const answer = await inquirer.prompt([
        {
            name: "userguess",
            type: "number",
            message: `Guess a number between 0 to 10 (${tip})`,

        }
    ]);
    console.log(`Your Guess is ${answer.userguess} and system generated ${guessNum}`)
    if(answer.userguess==guessNum){
        score++;
        console.log(`Congratulations! Your answer is correct. your score is: ${score}`)
    }else{
        console.log(`Wrong guess. Your score is ${score}. Better luck Next time!`)
    }
    
}