const _id = Symbol("id");
const _name = Symbol("name");
const _subjects = Symbol("subjects");
const _dean = Symbol("dean");
const _teachers = Symbol("teachers");

class Department {
  constructor({ name, subjects, dean, teachers, id }) {
    this[_id] = id;
    this[_name] = name || "";
    this[_subjects] = subjects || [];
    this[_dean] = dean || "";
    this[_teachers] = teachers || [];
  }

  get id() {
    return this[_id];
  }

  get name() {
    return this[_name];
  }
  set name(value) {
    this[_name] = value;
  }

  get subjects() {
    return this[_subjects];
  }
  set subjects(value) {
    this[_subjects] = value;
  }

  get dean() {
    return this[_dean];
  }
  set dean(value) {
    this[_dean] = value;
  }

  get teachers() {
    return this[_teachers];
  }
  set teachers(value) {
    this[_teachers] = value;
  }

  addSubject(value) {
    this[_subjects].push(value);
  }

  addTeacher(value) {
    this[_teachers].push(value);
  }

  toString() {
    return `ID: ${this[_id]}, Name: ${this[_name]}, Subject: ${this[_subjects]} `;
  }
}

module.exports = Department;
