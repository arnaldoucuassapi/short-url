const { randomInt } = require("node:crypto");

function randomNumber(min = 1000, max = 9999) {
  if (min > max) {
    console.log("O min deve ser menor que o max.");
    return;
  }

  let number = randomInt(max);

  while ((number < min)) {
    number = randomInt(max);
  }

  return number;
}

module.exports = {
  randomNumber
}