const fs = require("fs");
const inquirer = require("inquirer");
const htmlOutput = require("./src/template");
const Manager = require("./lib/Manager.js");

function writeHtml(cards) {
    fs.writeFileSync("./dist/office.html", htmlOutput(cards), "utf-8");
}


const office = [];

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Input team member's name here." 
        },
        {
            type: "input",
            name: "id",
            message: "Add employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Input email here."
        },
        {
            type: "input",
            name: "github",
            message: "What is their GitHub account?"
        },
        {
            type: "list",
            name: "team",
            message: "Add engineer, intern, or finish building team.",
            choices: ["Engineer", "Intern", "Finish building team"]
    
        }
    ]).then((response) => {
        const engineer = {"name": response.name, "id": response.id, "email": response.email, "github": response.github, "role": "engineer"}
        office.push(engineer);
        if(response.team === "Engineer") {
            addEngineer();
        }else if(response.team === "Intern"){
            addIntern();
        }else if(response.team === "Finish building team"){
            writeHtml(office);
        }
    }) 
}

function addIntern() {

}

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Input team member's name here." 
    },
    {
        type: "input",
        name: "id",
        message: "Add employee ID"
    },
    {
        type: "input",
        name: "email",
        message: "Input email here."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?"
    },
    {
        type: "list",
        name: "team",
        message: "Add engineer, intern, or finish building team.",
        choices: ["Engineer", "Intern", "Finish building team"]

    }
]).then((response) => {
    const manager = {"name": response.name, "id": response.id, "email": response.email, "officeNumber": response.officeNumber, "role": "manager"}
    office.push(manager);
    if(response.team === "Engineer") {
        addEngineer();
    }else if(response.team === "Intern"){
        addIntern();
    }else if(response.team === "Finish building team"){
        writeHtml(office);
    }    
})