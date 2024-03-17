import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divition"],
  },
]);
//conditional statement

if(answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer . operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer . operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.operator === "Divition" ) {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log ("Please select valid operator")
}

