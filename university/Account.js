const _id = Symbol("id");
const _type = Symbol("type");
const _amount = Symbol("amount");
const _time = Symbol("time");

class Account {
  constructor({ type, amount, time, id }) {
    this[_id] = id;
    this[_type] = type;
    this[_amount] = amount;
    this[_time] = time || new Date();
  }

  get id() {
    return this[_id];
  }

  get type() {
    return this[_type];
  }
  set type(value) {
    this[_type] = value;
  }

  get amount() {
    return this[_amount];
  }
  set amount(value) {
    this[_amount] = value;
  }

  get time() {
    return this[_time];
  }
  set time(value) {
    this[_time] = value;
  }

  toString() {
    return `ID: ${this[_id]}, type: ${this[_type]}, amount:${this[_amount]}, Time:${this[_time]} `;
  }
}

module.exports = Account;
