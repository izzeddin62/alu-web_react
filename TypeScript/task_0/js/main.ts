interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 26,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const studentTableHeaders = ["First Name", "Last Name", "Age", "Location"];

studentTableHeaders.forEach((header) => {
  const th = document.createElement("th");
  th.innerText = header;
  thead.appendChild(th);
});

studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = student.firstName;
  const td2 = document.createElement("td");
  td2.innerText = student.lastName;
  const td3 = document.createElement("td");
  td3.innerText = student.age.toString();
  const td4 = document.createElement("td");
  td4.innerText = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tbody.appendChild(tr);
});
table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
