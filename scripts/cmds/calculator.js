const math = require('mathjs');

let calculationHistory = [];

module.exports = {
  config: {
    name: "calculate",
    version: "2.0",
    author: "Priyanshi Kaur",
    role: 0,
    cooldown: 5,
    shortDescription: "Perform basic and advanced arithmetic calculations.",
    category: "utility",
    guide: "{prefix}calculate <expression> | {prefix}calculate history"
  },
  onStart: async function ({ message, args }) {
    const expression = args.join(" ").trim();

    if (!expression) {
      return message.reply("Please provide an expression to calculate!");
    }

    if (expression.toLowerCase() === "history") {
      if (calculationHistory.length === 0) {
        return message.reply("No calculation history found.");
      }
      const historyMessage = calculationHistory.join('\n');
      return message.reply(`Here are your last calculations:\n${historyMessage}`);
    }

    let result;
    try {
      result = math.evaluate(expression);
    } catch (error) {
      console.error(error);
      return message.reply("Oops! Something went wrong while trying to calculate your expression. Make sure it's a valid mathematical expression.");
    }

    const resultMessage = `The result of ${expression} is ${result}.`;
    message.reply(resultMessage);

    // Store the result in history
    calculationHistory.push(resultMessage);
    if (calculationHistory.length > 5) {
      calculationHistory.shift(); // Keep only the last 5 calculations
    }
  },
};