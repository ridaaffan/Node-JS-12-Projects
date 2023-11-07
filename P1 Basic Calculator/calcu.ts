#! /usr/bin/env node
import inquirer from "inquirer";
import { type } from "os";

let answer = await inquirer.prompt

([
    {
        name: "Operator",
        type: "list",
        choices:["Addition","Subtraction","Multiplication","Division"],
        message: "Which operation do you want to perform?"
    },
    
    {
        name: "n1",
        type: "number",
        message: "Enter your First Number:"
    },
    {
        name: "n2",
        type: "number",
        message: "Enter your Second Number:"
    },
    
    ]);
 
    function addition(n1:number, n2:number) 
{
    let addition = n1 + n2 
    return addition
}

function subtraction(n1:number,n2:number)
{
    let subtraction = n1 - n2 
    return subtraction
}

function multiplication(n1:number, n2:number) 
{
    let multiplication = n1 * n2 
    return multiplication
}

function division(n1:number,n2:number)
{
    let division = n1 / n2 
    return division
}

    if(answer.Operator === "Addition")
    {
        let result= addition(answer.n1, answer.n2)
        console.log(`${answer.n1} + ${answer.n2} = ${result}`)
    }
    else if (answer.Operator === "Subtraction")
    {
         let result= subtraction(answer.n1, answer.n2)
        console.log(`${answer.n1} - ${answer.n2} = ${result}`)
    }
    else if(answer.Operator === "Multiplication")
    {
        let result= multiplication(answer.n1, answer.n2)
        console.log(`${answer.n1} * ${answer.n2} = ${result}`)
    }
    else if (answer.Operator === "Division")
    {
        let result= division(answer.n1, answer.n2)
        console.log(`${answer.n1} / ${answer.n2} = ${result}`)
    }

    
   
   