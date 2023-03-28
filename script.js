const fs = require("fs");
const simpleParser = require("mailparser").simpleParser; //Remember to do npm install mailparser

const myFile = "mil.eml"; // Replace this with your .eml file

var eml = fs.readFileSync(myFile, "utf-8");

simpleParser(eml).then((parsed) => {
  htmlFile = parsed["html"];
  htmlFile = htmlFile.replace(/\\r/g, ""); //This removes all "\r"
  htmlFile = htmlFile.replace(/\\n/g, ""); //This removes all "\n"
  htmlFile = htmlFile.replace(/\\/g, ""); //This removes all "\"

  fs.writeFileSync("emailHtml.html", htmlFile); //Here's your HTML file. You can change the name if you wish
});
