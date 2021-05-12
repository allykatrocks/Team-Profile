const fs = require("fs");
const inquirer = require("inquirer");
const htmlOutput = require("./src/template");

function writeHtml() {
    fs.writeFileSync("./dist/office.html", htmlOutput(""), "utf-8");
}

writeHtml();

inquirer.prompt([
    {
        type: "input",
        name: "manager name",
        message: "Input team manager's name here." 
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
        name: "office number",
        message: "What is the office number?"
    }
]).then((response) => {
    console.log(response);
    
})