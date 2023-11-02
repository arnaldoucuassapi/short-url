
class DatabaseInMemory {
  #shorts = new Map();

  add(short) {
    this.#shorts.set(short);
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