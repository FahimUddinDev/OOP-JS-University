const { Contact, Address } = require("./contact");
const { Guardian, Student, Teacher } = require("./person");
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
  id: 2,
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

// teachers

const dean = new Teacher({
  id: 1,
  name: "Mr Jon",
  employeeId: "em001",
  salary: 2000,
  subject: department.subjects[0],
});

dean.blood = "O+";
dean.contact = new Contact({
  id: 3,
  email: "jon@gmail.com",
  phone: "01212213213213213",
  alternativePhone: "+00880194598434",
});

dean.contact.address = new Address({
  roadNo: 21,
  city: "Cumilla",
  region: "Chittagong",
  country: "Bangladesh",
  postalCode: 3610,
  id: 3,
});
dean.account = new Account({ type: "dean", amount: 10000, id: 2 });
dean.department = department;

// Teachers

const teacher1 = new Teacher({
  id: 2,
  name: "Mr Kashem",
  employeeId: "em002",
  salary: 1500,
  subject: department.subjects[1],
});

teacher1.department = department;
teacher1.blood = "AB-";
dean.contact = new Contact({
  id: 4,
  email: "kashem@gmail.com",
  phone: "03213213213",
  alternativePhone: "+00880194598434",
});

dean.contact.address = new Address({
  roadNo: 21,
  city: "Dhaka",
  region: "Chittagong",
  country: "Bangladesh",
  postalCode: 3610,
  id: 4,
});

const teacher2 = new Teacher({
  id: 3,
  name: "Mr Kobir",
  employeeId: "em003",
  salary: 1000,
  subject: department.subjects[2],
});

teacher2.department = department;
teacher2.blood = "O-";
dean.contact = new Contact({
  id: 5,
  email: "kobir@gmail.com",
  phone: "03213213213",
  alternativePhone: "+00880194598434",
});

dean.contact.address = new Address({
  roadNo: 210,
  city: "Dhaka",
  region: "Chittagong",
  country: "Bangladesh",
  postalCode: 3610,
  id: 5,
});

department.dean = dean;
department.teachers = [teacher1, teacher2];
department.addTeacher(dean);
console.log(student);
