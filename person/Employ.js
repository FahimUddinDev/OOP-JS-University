const UniPerson = require("./UniPerson");

const _employeeId = Symbol("employeeId");
const _salary = Symbol("salary");

class Employ extends UniPerson {
  constructor(id, name, employeeId, salary) {
    super(id, name);
    this[_employeeId] = employeeId;
    this[_salary] = salary;
  }

  get employeeId() {
    return this[_employeeId];
  }

  get salary() {
    return this[_salary];
  }
  set salary(value) {
    this[_salary] = value;
  }
  toString() {
    return `${super.toString()}, EmployeeId: ${this[_employeeId]}, Salary: ${
      this[_salary]
    }`;
  }
}

module.exports = Employ;
