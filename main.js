// console.log("Hi!")
// console.error("Alert")

// // Old way (function-scoped)
// var name = "Fatima";

// // Modern way (block-scoped)
// let age = 22;

// // Constant (cannot be reassigned)
// const country = "Pakistan";

// let x = 10;
// x = "Now I am a string";

// let message = "Hello, World!";
// let sentence = `My name is ${name}`; // Template literals

// let str = "JavaScript";

// // Length
// console.log(str.length); // 10

// // Access character
// console.log(str[0]); // J

// // Uppercase / Lowercase
// console.log(str.toUpperCase()); // JAVASCRIPT
// console.log(str.toLowerCase()); // javascript

// // Substring
// console.log(str.substring(0, 4)); // Java

// // Includes
// console.log(str.includes("Script")); // true

// // Replace
// console.log(str.replace("Java", "Type")); // TypeScript

// // Trim
// let spaced = "   Hello   ";
// console.log(spaced.trim()); // "Hello"

// for (let i = 0; i < 5; i++) {
//     console.log("Iteration:", i);
// }

// let j = 0;
// do {
//     console.log("Do-While loop iteration:", j);
//     j++;
// } while (j < 5);

// let fruits = ["Apple", "Banana", "Mango"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let person = { name: "Fatima", age: 22 };
// for (let key in person) {
//     console.log(key, ":", person[key]);
// }

// function greet() {
//     console.log("Hello!");
// }
// greet();

// function add(a, b) {
//     return a + b;
// }
// console.log(add(3, 4)); // 7

// const multiply = (x, y) => {
//     return x * y;
// };
// console.log(multiply(3, 5)); // 15

// // One-liner arrow function
// const square = n => n * n;
// console.log(square(4)); // 16

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }
// greet("Fatima"); // Hello, Fatima!
// greet();         // Hello, Guest!

// let numbers = [1, 2, 3, 4, 5];

// // map: returns a new array with operations applied to each element
// let squared = numbers.map(num => num * num);
// console.log(squared); // [1, 4, 9, 16, 25]

// // filter: returns a new array with elements passing the condition
// let even = numbers.filter(num => num % 2 === 0);
// console.log(even); // [2, 4]

// // reduce: reduces the array to a single value
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15

// // forEach: executes a function on each element (does not return a new array)
// numbers.forEach(num => console.log("Value:", num));

// let student = {
//     name: "Fatima",
//     age: 22,
//     greet: function() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// };

// console.log(student.name); // Fatima
// student.greet(); // Hi, I am Fatima

// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote);

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.introduce = function() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
// };

// const student1 = new Student("Fatima", 22);
// student1.introduce(); // Hi, I am Fatima and I am 22 years old.

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const student2 = new Student("Kausar", 23);
// student2.introduce(); // Hi, I am Kausar and I am 23 years old.

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// class Teacher extends Person {
//     constructor(name, subject) {
//         super(name); // call the parent constructor
//         this.subject = subject;
//     }
//     teach() {
//         console.log(`${this.name} is teaching ${this.subject}`);
//     }
// }

// const teacher = new Teacher("Fatima", "Math");
// teacher.greet();  // Hello, my name is Fatima
// teacher.teach();  // Fatima is teaching Math

// array destructuring
const [firstName, LastName] = ["kausar","fatima"];
console.log(firstName);
console.log(LastName);

// object destructuring
const {name: userName, age} = {
    name: "fatima",
    age: 22,
};
console.log(userName);
console.log(age);

const myObj = {
    name: 'Max',
    age: 28
}
const {name} = myObj;
console.log(name); // prints 'Max'
console.log(age); // prints undefined
console.log(myObj); // prints {name: 'Max', age: 28}


// function destructuring
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!

// spread operator
const hobbies = ["reading","eating"]
const newHobbies = ["sleeping"]

const mergeHobbies = [...hobbies, ...newHobbies];
console.log(mergeHobbies);

const user = {
    name: "Max",
    age: 23
}

const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser)

// passing function as an argument
function handleTimeOut(){
    console.log("time out!");
}

const handleTimeout2 = () => {
    console.log("time out .... again!");
};

setTimeout(handleTimeOut, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out...");
}, 4000);

function greeter(greetFn){
    greetFn();
}

greeter(() => console.log("Hi! I am fatima"));












const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const itemList = document.getElementById("itemList");

let count = 1;

addBtn.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = "Item " + count;
    itemList.appendChild(li);
    count++;
});

clearBtn.addEventListener("click", function() {
    itemList.innerHTML = "";
    count = 1;
});
