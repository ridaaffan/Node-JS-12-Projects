#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    transactionType: string,
    amount: number
}

type User = {
    userId: string,
    userPin: number,
};

let users: User[] = [
    {
        userId : "Rida",
        userPin : 1234
    },

     {
        userId : "Affan",
        userPin : 5678
    },

     {
        userId : "Jamil",
        userPin : 9101112
    }
];

let balance: number = Math.floor((Math.random()*100000));
let answers1: ansType;
let answers2: ansType;


startLoop();

async function startLoop(){

    await getUserId();
    do{
        await getTransaction();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ['Yes', 'No'],
                message: "Do you want to continue?"
            }
        ]);
    }while(again.restart== 'Yes');
}

async function getUserId() {
    answers1 = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        messsage: "Enter your Id:"
    },

    {
        type: "number",
        name: "userPin",
        messsage: "Enter your PIN:"
    },
    ]);
    await checkuserId(answers1.userId, answers1.userPin);
}

async function checkuserId(userId: string, userPin:number) {
    let condition = false;
    for(let i=0; i<users.length; i++) {
        if(userId === users[i].userId && userPin === users[i].userPin) {
            condition = true;
            break;
        }
    }
    if(!condition) {
        console.log(`Invalid user ID or Pin. Try again.`);
        await getUserId();
    }
}

async function getTransaction() {
    answers2 = await inquirer.prompt([

    {
        type: "list",
        name: "accountType",
        choices: ["Current" , "Saving"],
        messsage: "Select your account type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash" , "Withdraw"],
        messsage: "Select your transaction type:",
       
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        messsage: `Select your amount (Current balance is ${balance}):`,
        when(answers2){
            return answers2.transactionType == "Fast Cash"
        },
    },
    {
        type: "number",
        name: "amount",
        messsage: `Enter your amount (Current balance is ${balance}):`,
        when(answers2){
            return answers2.transactionType == "Withdraw"
        },
    }
 ])

 if (answers1.userId && answers1.userPin) {
    if(answers2.amount <= balance) {
        balance -= answers2.amount;
        console.log(`Your current balance is: ${balance}`);
    } else {
        console.log(`Insufficient balance ${balance}`);
    }
 }
}
