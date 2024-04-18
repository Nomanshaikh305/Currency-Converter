#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \tWelcome to Noman - Currency Converter\n"));
let exchange_rate = {
    "USD": 1,
    "EUR": 0.94,
    "GBP": 0.80,
    "JYP": 154.51,
    "CAD": 1.38,
    "AUD": 1.55,
    "INR": 83.54,
    "PKR": 278.58
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency you want to convert from:",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "INR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the Currency to convert into:",
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted Amount = ${chalk.green.bold(converted_amount.toFixed(2))}`);
