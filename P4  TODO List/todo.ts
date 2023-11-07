#! /usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = ["Rida", "Affan", "Jamil"];

async function createToDo(todos: string[]) {

    do {
       let ans= await inquirer.prompt ({
        type: "list",
        name: "select",
        message: "Select an operation:",
        choices: ["Add", "Update", "Delete", "View"],
       });

       if (ans.select == "Add") {
        let addToDo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: "Add any item:",
        });
        todos.push(addToDo.todo);
        console.log(todos);
       }

       if(ans.select == "Update") {
        let updateToDo = await inquirer.prompt ({
            type: "list",
            name: "todo",
            message: "Select any item to update:",
            choices: todos.map((item) => item),
        });

        let addToDo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: "Add any item:",
        });
        
        let newToDos = todos.filter(val => val !== updateToDo.todo)
        todos = [...newToDos, addToDo.todo];
        console.log(todos)
       }

       if (ans.select == "View") {
        console.log(todos);
       }

       if (ans.select == "Delete") {

        let deleteToDo = await inquirer.prompt ({
            type: "list",
            name: "todo",
            message: "Select any item to delete:",
            choices: todos.map((item) => item),
        });
        let newToDos = todos.filter(val => val !== deleteToDo.todo);
        todos = [...newToDos];
        console.log(todos)
       }
    } while (true)
}

createToDo(todos)
