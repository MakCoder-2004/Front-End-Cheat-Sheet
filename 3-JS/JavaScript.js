/* JavaScript Guide Sheet 
    This is a guide to help you code with JS for web pages
    
    By: Makrious Ayman   
        LinkedIn:"https://www.linkedin.com/in/makrious-ayman-84985621b/"

    Source : 
        - W3School
        - BroCode youtube course "https://www.youtube.com/watch?v=lfmg-EJ8gm4"
*/

//---------------------------------------------------------------------------------------------------------->

// Pop-up message
alert("Error");

//---------------------------------------------------------------------------------------------------------->

//Best Practice to work with money 
/* 
{convert money to cents and round the number then convert it to dolar }

t-shirt => 7.99
backpack => 15.99
Totalsheet ==> (799 + 1599) / 100 = 23.98;
*/

//---------------------------------------------------------------------------------------------------------->

// Math Functions :-
//------------------

Math.PI;      // pi value

Math.E;       // euler's number

Math.sin();    // sine of an angle

Math.round();   // round to nearest 

Math.floor();   // round down to nearest integer

Math.ceil();   // round up to nearest integer

Math.abs();    // absolute value

Math.sqrt();   // square root

Math.pow();    // power

Math.random(); // generate a random number between 0 and 1
Math.random() * 100 + 1;  // generate a random number between 1 and 100

Math.sin(); // sine of an angle
Math.cos(); // cosine of an angle
Math.tan(); // tangent of an angle in radians

Math.min();    // find the minimum value amongst a set of numbers

Math.max();    // find the maximum value amongst a set of numbers

//---------------------------------------------------------------------------------------------------------->

// Random Number

const min = 50;
const max = 100;

// Generate a random number between min and max
function generateRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//---------------------------------------------------------------------------------------------------------->

// Strings:-
//----------

// String Functions

String.prototype.length;   // get the length of a string

String.prototype.toUpperCase();  // convert a string to uppercase

String.prototype.toLowerCase();  // convert a string to lowercase

//-------------------------------------------------------------->

// Multiple line strings

var multiLineString2 = `Hello
World

This is a multi-line string`;

//-------------------------------------------------------------->

// Concatination

var name = "John";
var age = 30;

var message = "My name is " + name + " and I am " + age + " years old.";

// is we concatinate a string and a number automatically the final result will be string
var message2 = "My name is " + name + 30; // "My name is John30"

//-------------------------------------------------------------->

// Interpolation

var message3 = `My name is ${name} and I am ${age} years old.`;

//-------------------------------------------------------------->

//Escape characters

var message3 = "Hello \nWorld"; // "Hello \nWorld"

var message4 = "Hello \tWorld"; // "Hello   World"

var message5 = "Hello \"World\""; // "Hello "World""

var message6 = "Hello \bWorld"; // "Hello World"

//-------------------------------------------------------------->

// check type of a variable
typeof variable;  // returns the type of a variable

//-------------------------------------------------------------->

//type conversion

var myVariable = "Hello World!";
myVariable = Number(myVariable);  // convert string to number

var myVariable2 = 10;
myVariable2 = String(myVariable2);  // convert number to string `   

//---------------------------------------------------------------------------------------------------------->

//printing in the web console
console.log("Makrious Ayman");

//---------------------------------------------------------------------------------------------------------->

// Variable :-
//------------

var myVariable = "Hello World!";  // declare and initialize a variable
//or
let name = "Makrious"; // declaring 

//Differences between var and let
/*
var vs let :-
-----------------------------------------------------------------------------------------------------------
| Feature          | var                                  | let                                           |
|------------------|--------------------------------------|-----------------------------------------------|
| Scope            | Function-scoped                      | Block-scoped                                  |
| Hoisting         | Hoisted (initialized as `undefined`) | Hoisted (not initialized, temporal dead zone) |
| Re-declaration   | Allowed                              | Not allowed                                   |
| Global Property  | Added to `window` (in browsers)      | Not added to `window`                         |
-----------------------------------------------------------------------------------------------------------

Use `let` for block-scoping and safer behavior.
Use `var` only for function-scoping or legacy code.
*/

/*
var : If declared outside a function, it is globally scoped
let : If declared outside a function, it is block-scoped
*/
if (true) {
    var x = 10; // Function-scoped (or globally scoped if not in a function)
    let y = 20; // Block-scoped
}
console.log(x); // 10 (accessible)
console.log(y); // ReferenceError: y is not defined (not accessible outside the block)


/*
var: Initialized with undefined before the code is executed.
let: Accessing it before declaration results in a ReferenceError.
*/
console.log(a); // undefined (hoisted but not initialized)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;


/*
var: Allows re-declaration within the same scope.
let: Does not allow re-declaration within the same scope.
*/
var x = 10;
var x = 20; // No error

let y = 10;
//let y = 20; // SyntaxError: Identifier 'y' has already been declared


/* 
const
    - cannot change this variable's value
*/
const PI = 3.14;

//---------------------------------------------------------------------------------------------------------->

// Entering inputs

var name = prompt("Enter your name:");
console.log("Hello, " + name);

var age = prompt("Enter your age:");
console.log("You are " + age + " years old.");

//---------------------------------------------------------------------------------------------------------->

// Boolean (true / false)

var isTrue = true;      // 1
var isFalse = false;    // 0

/* diiference btw == and ===

1. == is for checking is equal or no weather the two types are numbers or not
ex console.log(5 == "5.00");    //true

2. === is for checking is equal or no and must be the same type
ex console.log(5 === "5.00");   //false

=> the same as != and !==
*/

//---------------------------------------------------------------------------------------------------------->

//callbacks (when you are done do this next)

/*
    - used to handle asynchronous operations:
        1- Reading a file
        2- Making a network request
        3- Waiting for user input
        4- Interacting with the database
*/

// Callback function ex.1
Hello(GoodBye); // Hello! GoodBye!
function GoodBye(){
    console.log("Goodbye!");
}

function Hello(callback) {
    console.log("Hello !");
    callback();
}

// Callback function ex.2
sayHello("Makrious", print);
function sayHello(name, callback) {
    let greeting = "Hello, " + name;
    callback(greeting);
}

function print(greeting){
    console.log(greeting)
}

//---------------------------------------------------------------------------------------------------------->

// Functions (we can call a function before the function)
//----------

function greet(name) {
    console.log("Hello, " + name);
}
greet("John");

//we can store functions in variables (we can't call a function before the function)
const greetFunction = function(name) {
    console.log("Hello, " + name);
}
console.log(greetFunction("Makrious"));

//-------------------------------------------------------------->

// setTimeout function 
/*  - Function will be called after a certain amount of time
    - The function sets the timer and goes to run the next lines, it doesn't wait until the timer finishes and go to the next lines
*/
const setTimeoutFunc = setTimeout(function() {
    console.log("Hello from setTimeout");
}, 2000);

// clearTimeout function
clearTimeout(setTimeoutFunc);    // clear the timeout

//-------------------------------------------------------------->

// setInterval function
/*
    - It will keep calling the function every ...milliseconds (1000 millisecond = 1 sec)
*/
let func = setInterval(function() {
    console.log("Hello from setInterval");
}, 3000);

clearInterval(func);    // clear the interval

//-------------------------------------------------------------->

// Arrows function ( '=>' means function)
let arrowFunction = () => {
    console.log("This is an arrow function")
}
arrowFunction();


let multiply = (a, b) => a * b;
console.log(multiply(5, 7));

//---------------------------------------------------------------------------------------------------------->

// If statements

var age = 25;

if (age >= 18) {
    console.log("You are an adult");
} else if (age === 0){
    console.log("Invalid age");
} else {
    console.log("You are a child");
}

//OR

// ternary operator

//            condition        if true            if false 
var isAdult = age >= 18 ? "You are an adult" : "You are a child";
console.log(isAdult);

//---------------------------------------------------------------------------------------------------------->

// Swich

var grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Fail");
}

//---------------------------------------------------------------------------------------------------------->

// Mathmatic operators

var a = 5;
var z = 3;

console.log(a + z); // 8
console.log(a - z); // 2
console.log(a * z); // 15
console.log(a / z); // 1.6666666666666667
console.log(a % z); // 2
console.log(a ** z); // 125 (power)\

//---------------------------------------------------------------------------------------------------------->

// Objects

const person = {
    name: "John",
    age: 30,

    // nested object
    location: {
        country: "USA",
        city: "New York"
    },

    // method
    greet: function() {
        console.log("Hello, " + person.name);
    }
};
console.log(person);
console.log(person.location.city);
person.greet(); // Hello, John

// Accessing properties of an object
console.log(person.name); // John
//or
console.log(person["age"]); // 30

// Updating properties of an object
person.age = 31;
console.log(person);

// Deleting properties of an object
delete person.age;
console.log(person);

// Adding a new property
person.Married = false;
console.log(person);

// Checking if a property exists in an object
console.log("name" in person); // true
console.log("email" in person); // false

//refrencing 
/*
    - `person` and `person2` are two different references to the same object.
    - Changes made to one object will reflect in the other.
    - person2 is not a stored place for a new object it only copies the reference of the person object
*/
const person2 = person;
console.log(person2 === person); //true

//destructing
const {age} = person;
console.log(age);

//this  (doesnot work with arrow functions)
const person = {
    name: "Makrious",
    age: 30,
    greet: function() {
        console.log("Hello, " + name);  // the name here is not declared to which object so it wont work
    }
}

const person1 = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name); // the name here is declared to the person object so it works
    }
}
//---------------------------------------------------------------------------------------------------------->

// JSON (JavaScript Object Notation)
/*
    - All properties and values must be btw " ".
    - JSON is more universal, used when sending data among several computers.
    - Storing Data.
    - Doesnot support nested functions.
    - JSON type is string.
*/

// converting object to JSON
const jsonString = JSON.stringify(person);
console.log(typeof jsonString);

// converting JSON to object
const jsonObject = JSON.parse(jsonString);
console.log(typeof jsonObject);

//---------------------------------------------------------------------------------------------------------->

// Local Storage
/*
    - To save in local storage we must save the object as a JSON first
*/

// storing data to local storage in-order to retrieve it again
localStorage.setItem("person", person);

// retrieving data from local storage
localStorage.getItem("person");

// removing data from local storage
localStorage.removeItem("person");

//---------------------------------------------------------------------------------------------------------->

// Imbeded methods

console.log("Hello".length()); //count number of characters

console.log("Hello".toUpperCase()); //convert to uppercase

console.log("Hello".toLowerCase()); //convert to lowercase

console.log("Hello".charAt(0)); //get character at index

console.log("Hello".indexOf("l")); //get the index of the first occurrence of a character

console.log("Hello".lastIndexOf("l")); //get the index of the last occurrence of a character

console.log("Hello".split("")); //split the string into an array of characters

console.log("Hello World".split(" ")); //split the string into an array of words

console.log("Hello, World".replace("Hello", "Hi")); //replace a substring

console.log("Hello, World".concat("!")); //concatenating two strings

console.log("Hello, World".slice(0, 5)); //slice a portion of a string

console.log("Hello, World".substring(0, 5)); //substring of a string

console.log("Hello, World".trim()); //trim leading and trailing white spaces

console.log("Hello, World\n".repeat(3)); //repeat a string

console.log("Hello, World".includes("World")); //check if a string includes a substring

console.log("Hello, World".startsWith("Hello")); //check if a string starts with a substring

console.log("Hello, World".endsWith("World")); //check if a string ends with a substring

console.log("Hello, World".padStart(15,"0"));

console.log("Hello, World".padEnd(15,"0"));

//---------------------------------------------------------------------------------------------------------->

// Spread operator
/*
    - spreading the numbers in the array into numbers so we can use it in functions
    - spread operator can be used with arrays, strings, objects, and more.
    - spread operator is used in function calls, array literals, and destructuring.
*/

// getting the minimum from an array
const arr0 = [1, 2, 3];
//let minimum = Math.min(arr1); //error
console.log(Math.min(...arr1)); //1

// spreading string into an array of characters
let name = "Makrious";
let letters = [...name];
console.log(letters); // [ 'M', 'a', 'k', 'r', 'i', 'u', 'o','s' ]

//combining two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1,...arr2];
console.log(combinedArray); // [ 1, 2, 3, 4, 5, 6 ]

// copying array
let arr3 = [...arr1];
console.log(arr3); // [ 1, 2, 3 ]

//---------------------------------------------------------------------------------------------------------->

// rest operaator (the oposite of spread)
/*
    - rest operator is used to collect all remaining elements into an array.
    - rest operator is used in function calls, array literals, destructuring, and spread.
    - rest operator is used with parameters in function definitions, destructuring, and spread.
    - rest operator is used with destructuring.
*/

let food1 = 'pasta';
let food2 = 'pizza';
let food3 = 'burger';

function fridge(...foods){
    console.log(foods)
}
fridge(food1, food2, food3); // [ 'pasta', 'pizza', 'burger' ]

function sum(...numbers){
    let result = 0;
    numbers.forEach( num => {
        result += num;
    });
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));
//---------------------------------------------------------------------------------------------------------->

// DOM (Document Object Model)
//-----------------------------

/*
    document
            ---> <html>
                    |---> <head>
                    |           |---> <title>
                    |
                    |---> <body>
                                |---> elements....
*/           

// Element Selectors

// change body content
document.body.innerHTML = "This is a new page!";

//-------------------------------------------------------------->

// change title
document.title = "New Page Title";

//-------------------------------------------------------------->

// query selector => returns the first matching element

// select the first selector needed
document.querySelector('button');

// select the content of the typed selector
document.querySelector('button').innerHTML;

// select element by its id
document.querySelector('#idName ');

// select element by its class
document.querySelector('.ClassName'); 

// query selector all => returns the matching elements as an array

const elementsByQuery = document.querySelectorAll('li');
console.log(elementsByQuery[2]);

//-------------------------------------------------------------->

// select elements by their class
const elementsByClass = document.getElementsByClassName('className');
console.log(elementsByClass);

// select an element by id
const elementById = document.getElementById("myElement");
console.log(elementById);

// select elements by their tag name
const elementsByTag = document.getElementsByTagName('p');
console.log(elementsByTag);

//example  (Making an arrray for a group of list items)
const tags = document.getElementsByTagName('li');
Array.from(tags).forEach(() => {
    console.log(this.innerHTML);
});


//-------------------------------------------------------------->

// create a new element
const newElement = document.createElement('p');
newElement.innerHTML = "This is a new paragraph.";
document.body.appendChild(newElement);

//-------------------------------------------------------------->

// remove an element
const elementToRemove = document.getElementById("myElementToRemove");
document.body.removeChild(elementToRemove);

//-------------------------------------------------------------->

// change an attribute of an element
document.querySelector('img').src = "newImage.jpg";

// DOM Navigation
//----------------

// first element child
console.log(document.querySelector('body').firstElementChild);

// last element child
console.log(document.querySelector('body').lastElementChild);

// parent element
console.log(document.querySelector('body').parentElement);

// child elements
console.log(document.querySelector('body').children);

// previous sibling
console.log(document.querySelector('body').previousSibling);

// next sibling
console.log(document.querySelector('body').nextSibling);

// previous element sibling
console.log(document.querySelector('body').previousElementSibling);

// next element sibling
console.log(document.querySelector('body').nextElementSibling);

// child nodes
console.log(document.querySelector('body').childNodes);

// first child
console.log(document.querySelector('body').firstChild);

// last child
console.log(document.querySelector('body').lastChild);

// parent node
console.log(document.querySelector('body').parentNode);

// node type
console.log(document.querySelector('body').nodeType);

// node value
console.log(document.querySelector('body').nodeValue);

// text content
console.log(document.querySelector('body').textContent);

// inner text
console.log(document.querySelector('body').innerText);

// inner HTML
console.log(document.querySelector('body').innerHTML);

//---------------------------------------------------------------------------------------------------------->

// Event listeners
//-----------------

// click event
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked');
}); 

//-------------------------------------------------------------->

// keydown event
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
    }
});

//-------------------------------------------------------------->

// keyup event
document.addEventListener('keyup', function(event) {
    console.log(`Key = ${event.key}`);
});

//-------------------------------------------------------------->

// mouseover event
document.querySelector('button').addEventListener('mouseover', function() {
    console.log('Mouse over button');
});

//-------------------------------------------------------------->

// mouseout event
document.querySelector('button').addEventListener('mouseout', function() {
    console.log('Mouse out of button');
});

//-------------------------------------------------------------->

// mouseenter event
document.querySelector('button').addEventListener('mouseenter', function() {
    console.log('Mouse entered button');
});

//-------------------------------------------------------------->

// mouseleave event
document.querySelector('button').addEventListener('mouseleave', function() {
    console.log('Mouse left button');
});

//-------------------------------------------------------------->

// focus event
document.querySelector('input').addEventListener('focus', function() {
    console.log('Input field focused');
});

//-------------------------------------------------------------->

// blur event
document.querySelector('input').addEventListener('blur', function() {
    console.log('Input field blurred');
});

//-------------------------------------------------------------->

// input event
document.querySelector('input').addEventListener('input', function() {
    console.log('Input field value changed');
});

//-------------------------------------------------------------->

// change event
document.querySelector('input').addEventListener('change', function() {
    console.log('Input field value changed');
});

//-------------------------------------------------------------->

// submit event
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting
    console.log('Form submitted');
});

//-------------------------------------------------------------->

// animation event
document.querySelector('button').addEventListener('animationend', function() {
    console.log('Animation ended');
});

//-------------------------------------------------------------->

// transitionend event
document.querySelector('button').addEventListener('transitionend', function() {
    console.log('Transition ended');
});

//-------------------------------------------------------------->

// error event
document.querySelector('button').addEventListener('error', function(event) {
    console.log('An error occurred:', event.error);
});

//-------------------------------------------------------------->

// remove event listener 
const eventListener = () => {
    console.log('Button clicked');
};

document.querySelector('button').addEventListener('click', eventListener);

document.querySelector('button').removeEventListener('click', eventListener);

//---------------------------------------------------------------------------------------------------------->

// class list
//------------

//Add a class to an existing element
document.querySelector('button').classList.add('newClass');

//Remove a class from an existing element
document.querySelector('button').classList.remove('newClass');

//Toggle a class on an existing element
document.querySelector('button').classList.toggle('newClass');

//Check if an element has a specific class
console.log(document.querySelector('button').classList.contains('newClass'));

// replace a class with another one
document.querySelector('button').classList.replace('oldClass', 'newClass');

//---------------------------------------------------------------------------------------------------------->

//creating a new element
const newElement = document.createElement('p');

// set the text content of the new element
newElement.textContent = "This is a new paragraph.";

// append the new element to the body of the document
document.body.appendChild(newElement);

//---------------------------------------------------------------------------------------------------------->

// Add & Change HTML

// append HTML
const html = document.createElement("h1");
html.textContent = "This is a new heading";
document.querySelector('p').append(html);

// prepend HTML
const newHtml = document.createElement("p");
newHtml.textContent = "This is a new paragraph.";
document.querySelector('p').prepend(newHtml);

// insert before
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.querySelector('p').insertBefore('beforebegin', newParagraph);

// insert after
const newParagraphAfter = document.createElement("p");
newParagraphAfter.textContent = "This is a new paragraph after.";
document.querySelector('p').insertAfter('afterend', newParagraphAfter);

//---------------------------------------------------------------------------------------------------------->

// Arrays

const elements = [1,2,3,4,5];   // Type of Arrays are object 

// add an element to the end of the array
elements.push(6);

// remove an element from the end of the array
elements.pop();

// add an element to the beginning of the array
elements.unshift(0);

// remove an element from the beginning of the array
elements.shift();

// get the length of the array
const length = elements.length;

// get the element at a specific index
const elementAtIndex = elements[2];

// update the element at a specific index
elements[2] = 7;

// check if an element exists in the array
const exists = elements.includes(5);

// find the index of an element in the array
const index = elements.indexOf(5);

// remove an element by its index
const removed = elements.splice(0,1);   // splice(index that is wanted to be removed, no of elements to be removed from the starting index)

// remove an element by its value
const indexToRemove = elements.indexOf(5);
if (indexToRemove > -1) {
    elements.splice(indexToRemove, 1);
}

// sort the array in ascending order
elements.sort((a, b) => a - b);

// sort the array in descending order
elements.sort((a, b) => b - a);

// reverse the array
elements.reverse();

// filter the array
const filteredElements = elements.filter(element => element % 2 === 0);

// map the array
const mappedElements = elements.map(element => element * 2);

//reduce the array -> reduce the array to a single value
const sum = elements.reduce((previous, next) => previous + next, 0); //sum of the array

// slice array (copy the array elements into a new space )
const slicedElements = elements.slice(1);


//---------------------------------------------------------------------------------------------------------->

// Loop

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}

// for each
elements.forEach((values, Index) => {
    console.log(`${Index}: ${values}`);
});
//or
elements.forEach(function(values, Index){
    console.log(`${Index}: ${values}`);
});

// example
let nums = [1, 2, 3, 4, 5];

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element, index) {
    console.log(index + ':' + element);
}

// Double the values in the array
nums.forEach(double);

// Display the updated array
nums.forEach(display);



//---------------------------------------------------------------------------------------------------------->

// Generating HTML

const tasks = [];
let ToDOhtml = '';

PrintTasks();

function PrintTasks() {
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];
        const HTML = `<p>${tasks[i]} </p>`;
        ToDohtml += HTML;
        
    }
    document.querySelector('.INPUT').innerHTML = ToDohtml;
}


function addTask() {
    const taskInput = document.querySelector('.INPUT');
    const taskList = taskInput.value;
    
    tasks.push(taskList);
    taskInput.value = '';
    
    PrintTasks();
}
//---------------------------------------------------------------------------------------------------------->

// Data Attribute

// HTML code
<button class="add-to-cart-button button-primary" data-product-name="${product.name}">
Add to Cart
</button>

//script
document.querySelectorAll('.add-to-cart-button')
.forEach((button) => {
    button.addEventListener("click", () => {
        constproductName = button.dataset.productName;
        console.log(`Adding ${productName} to the cart...`);
    });
});


const element = document.querySelector('button');
element.setAttribute('data-id', '123');

const id = element.getAttribute('data-id');
console.log(id); // Output: 123

//---------------------------------------------------------------------------------------------------------->

// Modules
/*
    - adding type="module" attribute to the script link in the html code
    - This will allow the file with this attribute to access all variables from any file

    <script1 type="module" src="../." "></script1>

    - Inside script1.js
    import { variable1 as myVar } from "./script1.js";

    - Inside script2.js
    export const variable1 = "Hello from script1";

*/

//---------------------------------------------------------------------------------------------------------->

// External Libraries
/*
    - We can load any Js code from the internet to our file

    - In Html we write in the src the link of the js code
    import LibraruName from 'Link-Of-The-Library';
    
    - Then you can use it normally in your js file

    -Example of libraries
        - Hello (ESM version): https://unpkg.com/supersimpledev@1.0.1/hello.esm.js
        - DayJS (ESM version): https://unpkg.com/dayjs@1.11.10/esm/index.js
        
        - How to Put a Website on the Internet: https://youtu.be/p1QU3kLFPdg

        => ESM Version is version that uses modules to avoid multiple functions names
        
*/

// Dayjs library

//Get Today's Date
const today = dayjs();

// Format a Date    (for more formating see the library documentation https://day.js.org/)
const FormatedDay = today.format('YYYY-MM-DD'); 

// add days to the current date
const add7days =  FormatedDay.add(1, 'day');

//---------------------------------------------------------------------------------------------------------->

// Date (yaer, month, day, hour, minute, second, ms)

// Get Current Date and Time    
const date = new Date();
console.log(date);

// Get Year
const year = date.getFullYear();
console.log(year);

// Get Month
const month = date.getMonth() + 1; // Month is 0-based
console.log(month);

// Get Day
const day = date.getDate();
console.log(day);

// Get Hour
const hour = date.getHours(); // Correct method name
console.log(hour);

// Get Minute
const minute = date.getMinutes(); // Correct method name
console.log(minute);

// Get Day of the week
const dayOfTheWeek = date.getDay(); // Renamed variable for better readability
console.log(dayOfTheWeek);  

// setting year
const Setyear = date.setFullYear(2004);

//---------------------------------------------------------------------------------------------------------->

// OOP (Object Oriented Programming)

//Constructor
function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = () => console.log(`You drive ${this.model}`);
}

const car1 = new car("BMW", "m21", 2024, "red");
const car2 = new car("Mercedes", "halleloya", 2022, "blue");

console.log(car1.make); // Output: BMW
console.log(car2.make); // Output: Mercedes 

car1.drive(); // Output: You drive m21
car2.drive(); // Output: You drive m21

//-------------------------------------------------------------->

//Classes

class product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayProduct(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price.toFixed(2)}`);
        console.log(`Product Quantity: ${this.quantity}`);
    }

    calculateTax(salesTax){
        return (this.price + (this.price * salesTax)).toFixed(2);
    }
}

const product1 = new product("T-Shirt", 19.99, 100);
product1.displayProduct(); // Output: Product Name: T-Shirt, Product Price: $19.99, Product Quantity: 100
product1.calculateTax(0.14);  // Output: 22.79

//-------------------------------------------------------------->

//Static (we can call any static element without declaring an object from it)

class MathUtils {
    static PI = 3.14159;

    static calculateCircumference(radius) {
        return this.PI * 2 * radius;
    }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateCircumference(5)); // Output: 31.4159

//another example

class Car {
    static count = 0;

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.count++;
    }

    static getTotalCars() {
        return Car.count;
    }
}

const car3 = new Car("BMW", "m21", 2024, "red");
console.log(Car.getTotalCars());

//-------------------------------------------------------------->

// Inheritance 
/*
    - allows a new class to inherit properties and methods from another class
    - Parent class inherits properties and methods from the parent class
    - helps in code reusablity
*/ 

class Animal {
    isAlive = true;
    eat() {
        console.log(`The ${this.name} is eating`);
    }
    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}
//   child  <--   parent
class Dog extends Animal {
    name = "Dog";
} 
class Bird extends Animal {
    name = "bird";
} 
class Fish extends Animal {
    name = "Fish";
}

const dog = new Dog();
const bird = new Bird();
const fish = new Fish();

fish.isAlive = false;
fish.isAlive();

fish.eat();
bird.sleep();

//-------------------------------------------------------------->

// Super
/*
    - allows us to call the methods and properties of a parent class from a child class
    - super() is used to call the constructor of the parent class
*/

class Animal2 {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`${this.name} moves at a speed ${speed}`);
    }
}

class Dog extends Animal2 {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        super.move(this.runSpeed);
    }
}
class Bird extends Animal2 {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.runSpeed = flySpeed;
    }
    fly(){
        super.move(this.flySpeed);
    }
}
class Fish extends Animal2 {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.runSpeed = swimSpeed;
    }
    swim(){
        super.move(this.swimSpeed); 
    }
}

const dog2 = new Dog("Dog", 3, 20);
const bird2 = new Dog("Bird", 4, 30);
const fish2 = new Dog("Fish", 5, 15);

console.log(dog2.name); // Output: Dog
console.log(dog2.age); // Output: 3
console.log(dog2.runSeed); // Output: 20
console.log(dog2.run()); 

//-------------------------------------------------------------->

// setters and getters
/*
    - allow us to define custom getter and setter methods for a property
    - getter is a method that returns the value of a property
    - setter is a method that sets the value of a property
*/
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    
    set height(height){
        height > 0 ? this._height = height : console.error("Width must be a positive number")
    }
    set width(width){
        width > 0 ? this._width = width : console.error("Width must be a positive number")
    }

    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    
    get perimeter() {
        return 2 * (this.height + this.width);
    }
    get area() {
        return this.height * this.width;
    }
}

const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.perimeter); // Output: 30

rectangle1.width = 15;
console.log(rectangle1.width); // Output: 15

console.log(rectangle1.area); // Output: 75

//---------------------------------------------------------------------------------------------------------->

// Destructuring
/*
    - allows us to unpack values from arrays or objects into distinct variables
    - makes the code more readable and easier to maintain

    [] -> Array destructuring
    {} -> Object destructuring
*/

// example 1

let a = 1;
let d = 2;

[a, d] = [d, a]; // reversing a with d

console.log(a); // Output: 2
console.log(d); // Output: 1

// example 2

const person3 = {
    name: "John",
    age: 30,
    city: "New York"
};
const person4 = {
    name: "Mark",
    age: 30
};
function displayPerson({name, age, city="Not Stated"}){
    console.log(`Name: ${name}\n Age: ${age}\n City: ${city}`);
}

displayPerson(person3); // Output: Name: John, Age: 30, City: New York
displayPerson(person4); // Output: Name: Mark, Age: 30, City: undefined

// example 3
class student{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, state){
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

const student1 = new student("John", 30, "123 Main St", "New York", "NY");

//---------------------------------------------------------------------------------------------------------->

// Closure

/*
    - a closure is a function that has access to its outer function's variables even after the outer function has finished executing
    - it is created when a function is defined inside another function and has access to the variables of the outer function
    - a closure is useful for encapsulating data and behavior into a single object, making it easier to manage and reuse
*/

function outerFunction() {
    let outerVariable = "I am in the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

// example
function Game(){
    let score = 0;

    function increaseScore(){
        score++;
        console.log(`Current score: ${score}`);
    }
    function decreaseScore(){
        score--;
        console.log(`Current score: ${score}`);
    }
    function getScore(){
        console.log(`Current score: ${score}`);
    }
    return {
        increaseScore,
        decreaseScore,
        getScore
    }
}
const game = Game();

game.increaseScore(); // Output: Current score: 1
game.increaseScore(); // Output: Current score: 2
game.decreaseScore(); // Output: Current score: 1

game.getScore(); // Output: Current score: 1

//---------------------------------------------------------------------------------------------------------->

// Error handling

/*
    - try { } = Encloses code that might potentially cause an error
        Network errors
        Promise rejection
        Security errors

    - throw { } = Encloses code that might potentially cause an error
    - catch { } = Catch and handle any thrown Errors from try { }
    - finally { } = (optional) Always executes. Used mostly for clean up
        Close files
        Close Connections
        Release resources

*/

//example 1

try {
    let a = 10;
    let b = 0;
    let result = a / b;

    if (isNaN(result)) {
        throw new Error("Invalid input. Please enter a number.");
    }
    console.log(result);
} catch (error) {
    console.error("Error: Division by zero is not allowed.");
} finally {
    console.log("This code will always execute.");
}

//---------------------------------------------------------------------------------------------------------->

// Callback Hell
 
function walkDog(callback){
    setTimeout(() => {
        console.log("Dog is walking");
        callback();
    }, 2000);
}

function cookDinner(callback){
    setTimeout(() => {
        console.log("Dinner is being cooked");
        callback();
    }, 3000);
}

function cleanKitchen(callback){
    setTimeout(() => {
        console.log("cleaning the kitchen");
        callback();
    }, 1000);
}

walkDog(() => {
    cookDinner(() => {
        cleanKitchen(() => {
            console.log("All tasks are completed");
        });
    });
})

//---------------------------------------------------------------------------------------------------------->

// Promises

/*
    - a promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation
    - a promise has a status: pending, fulfilled, or rejected
    - promises are created using the Promise constructor function
    - promises can be chained together using the then() and catch() methods
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Dog is walking");
        }, 2000);
    });
}

function cookDinner(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dinner is being cooked");
        }, 3000);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cleaning the kitchen");
        }, 1000);
    });
}

walkDog().then(value => {console.log(value); return cookDinner()})
   .then(value => {console.log(value); return cleanKitchen()})
   .then(value => {console.log(value); console.log('Tasks are finished')})
   .catch(error => {console.error("Error:", error)});

//---------------------------------------------------------------------------------------------------------->

// Async/Await

/*
    - async/await is a syntactic sugar for promise-based JavaScript
    - Async => make a function returns a promise
    - Await => make an Async function wait for a promise
    - async function always returns a promise
    - await can only be used inside async function
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Dog is walking");
        }, 2000);
    });
}

function cookDinner(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dinner is being cooked");
        }, 3000);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cleaning the kitchen");
        }, 1000);
    });
}

async function main(){
    try{
        let dog = await walkDog();
        console.log(dog);
        let dinner = await cookDinner();
        console.log(dinner);
        let kitchen = await cleanKitchen();
        console.log(kitchen);

        console.log('Tasks are finished');
    }catch{
        console.error("Error:", error);
    }
}

main();

//---------------------------------------------------------------------------------------------------------->

// fetch

/*
    - fetch() is a built-in JavaScript function that makes HTTP requests
    - Response object has methods for reading the response body
    - fetch() options can be used to make GET, POST, PUT, DELETE requests

    fetch(url, {options})
*/

//example

fetch('https://api.example.com/data')
   .then(response => response.json())
   .then(data => {
        console.log(data);
    })

//---------------------------------------------------------------------------------------------------------->

// Main Idea Steps for JS
/*
    1- Save the data
    2- Generate the HTML
    3- Append the HTML to the DOM
    4- Make it interactive
    
*/

//---------------------------------------------------------------------------------------------------------->