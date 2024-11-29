const { Contact, Address } = require("./contact");
const { Guardian, Student } = require("./person");
const { Department, Account, Subject } = require("./university");

// guardian id 1
const guardian = new Guardian({
  id: 1,
  name: "Mr Khalid",
  profession: "Engineer",
  income: 75000,
});
guardian.blood = "AB+";
guardian.contact = new Contact({
  id: 1,
  email: "faysalmahamud186@gmail.com",
  phone: "+0088018232434",
  alternativePhone: "+00880194598434",
});
guardian.contact.address = new Address({
  roadNo: 21,
  city: "Chandpur",
  region: "Chittagong",
  country: "Bangladesh",
  postalCode: 3610,
  id: 1,
});

// student id 1

const student = new Student({
  id: 1,
  name: "Rafiq",
  studentId: "ST001",
  guardian,
});

student.blood = "A+";
student.contact = new Contact({
  id: 1,
  email: "rafique@gmail.com",
  phone: "+0088018232434",
  alternativePhone: "+00880194598434",
});

student.contact.address = new Address({
  roadNo: 21,
  city: "Chandpur",
  region: "Chittagong",
  country: "Bangladesh",
  postalCode: 3610,
  id: 1,
});

student.account = new Account({ type: "Student", amount: 1000, id: 1 });

//   Department Id 1

const department = new Department({ id: 1, name: "SWE" });

student.department = department;

department.subjects = [
  new Subject({ id: 1, name: "Computer Fundamentals", credit: 4 }),
  new Subject({
    id: 2,
    name: "Introduction to Software Engineering ",
    credit: 3,
  }),
  new Subject({ id: 3, name: "Software Testing", credit: 4 }),
];

console.log(department.toString());
