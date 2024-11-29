const Employ = require("./Employ");

const _title = Symbol("title");

class Stuff extends Employ {
  constructor(id, name, employeeId, salary, title) {
    super(id, name, employeeId, salary);
    this[_title] = title;
  }

  get title() {
    return this[_title];
  }

  set title(value) {
    this[_title] = value;
  }
  toString() {
    return `${super.toString()}, Title: ${this[_title]}`;
  }
}

module.exports = Stuff;
