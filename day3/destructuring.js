function getEmployee(id) {
  return {
    name: "John",
    age: 35,
    address: "123 st",
    count: "United States",
  };
}

const { name: fullName, age } = getEmployee(22);

// const { name: fullName, age } = {
//   name: "John",
//   age: 35,
//   address: "123 st",
//   count: "United States",
// };

console.log("employee", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "Office St", "France"];
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log("employee", id, officeAddress);
