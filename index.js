import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform action ",
        type: "list",
        name: "operator",
        choices: ["Addtion", "Subtraction", "Multiplication", "Divition"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log("Your value is" + answer.firstNumber + answer.secondNumber);
}
