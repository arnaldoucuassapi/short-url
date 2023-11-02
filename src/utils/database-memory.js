const { randomNumber } = require("./random-number");

class DatabaseInMemory {
  #shorts = new Map();

  add(short) {
    let id = randomNumber();

    while (this.#shorts.has(id)) {
      id = randomNumber();
    }

    this.#shorts.set(id, short);
  }

  list() {
    const shorts = Array.from(this.#shorts.entries()).map((sh) => {
      const id = sh[0];
      const { link, name } = sh[1];

      return {
        id,
        link,
        name
      }
    });

    return shorts;
  }
}

module.exports = DatabaseInMemory;