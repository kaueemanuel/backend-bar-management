class Bcrypt {
  constructor() {
    this.saltRounds = 10;
    this.bcrypt = require("bcrypt");
  }
  generateHash(password) {
    const salt = this.bcrypt.genSaltSync(this.saltRounds);
    return this.bcrypt.hashSync(password, salt);
  }
  compare(password, hash) {
    return this.bcrypt.compareSync(password, hash);
  }
}

module.exports = Bcrypt;
