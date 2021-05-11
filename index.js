const fs = require("fs");
const inquirer = require("inquirer");
const htmlOutput = require("./src/template");

function writeHtml() {
    fs.writeFileSync("./dist/office.html", htmlOutput(""), "utf-8");
}

writeHtml();