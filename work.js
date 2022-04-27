//Not done -
// 1 - Total Admnission fees
let total = 0;
students.sort().forEach((data, index) => {
  console.log(index + 1, data.names + ' Your fee is', data.fees);
  total = total + data.fees;
});
console.log(`The total Admission fees: ${total}`);
// 2 - Find All Female Students
students.sort().map((data, index) => {
  if (data.gender === 'Female') {
    console.log(`${index + 1}  ${data.names} you are ${data.gender}`);
  }
});
// 3 - Find class wise student result
students.sort().forEach((data, index) => {
  if (data.classe == 3) {
    console.log(`${index + 1} ${data.names} is on class: ${data.classe}.`);
  }
});
// 4 - Location wise student result
students.sort().map((data, index) => {
  if (data.location === 'Montana') {
    console.log(`${index + 1} ${data.names} is at ${data.location}.`);
  }
});
// 5 - find student between 10 - 25 age
students.sort().forEach((data, index) => {
  if (data.age > 9 && data.age < 26) {
    console.log(`${index + 1} ${data.names} is ${data.age} years old.`);
  }
});
