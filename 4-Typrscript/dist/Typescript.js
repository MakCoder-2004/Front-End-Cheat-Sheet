"use strict";
/* Typescript Guide Sheet
    - TypeScript is a strongly typed superset of JavaScript that adds static typing to JavaScript.

    Common Usages of TypeScript:
        Web Development: Used in frameworks like Angular, React, and Vue for scalable applications.
        Backend Development: Works with Node.js for building APIs and services.

    By: Makrious Ayman
        - LinkedIn:"https://www.linkedin.com/in/makrious-ayman-84985621b/"
    
    Source :
        - TS documentation
        - freeCodeCamp youtube course "https://www.youtube.com/watch?v=30LWjhZzg50&t=2361s"
*/
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------------------------------------------------------------------------------------->
//Steps to initialize Typescript
/*
    1- tsc --init
        => This will create a tsconfig.json file
    2- npm init -y
        => This will create a package.json file
    3- mkdir src dist
        => This will create a dist folder for js files
        => This will create a src folder for ts files
    4- In the tsconfig.json file change the (line 61) outDir: ".\" to the dist folder
    5- When finidhing writing you TS code
        => In the terminal; tsc -w
    6- In package.json file change the (line 7) "test" to "start" : "lite-server"
    7- npm i lite-server
        => This will do as the live server
*/
//---------------------------------------------------------------------------------------------------------->
/* Types Syntax  --->   let VariableName: type = Value;
    - if you assigned a value when declaring a variable, typescript will automatically know the variable's type without assigning the data type.
*/
// string
let name = "Makrious";
// number  (integer / float)
let age = 20; /* age.NumberFunctions; */
// Boolean 
let Married = false;
// any  (DONT USE IT !)
let anyType = "Hello";
anyType = 10;
anyType = false;
//---------------------------------------------------------------------------------------------------------->
//Functions
/*

    //Method 1
        let FuncName = (VariableName: type) => {
            //code...
        }
        
    //Method 2
        function FuncName(VariableName: type){
            //code...
        }
            
    //reading only
        function FuncName(): void {
            //code...
        }
        
    //must return a value
        function FuncName(VariableName: type): returnType {
            //code...
            return ...;
        }
    //or
        function FuncName(VariableName: type):{}{
            //code...
            return ...;
        }

    //never returns a value --> mostly used for handling errors
        function FuncName(VariableName: type): never {
            //code...
        }
*/
//example 1
let login = (name, password, isAdmin = false) => {
    console.log(`Welcome ${name}!`);
    console.log(`Your password is ${password}.`);
    console.log(`Is admin: ${isAdmin}`);
};
login("Makrious", "PASSWORD", true);
login("KOKOO", "PASS123"); //we defigned a default value for the isAdmin variable
//example 2
function addTwo(number) {
    return number + 2;
}
//example 3
function displayProduct() {
    console.log("This is a displayProduct function");
}
//example 4
let heros = ["Superman", "Spiderman", "Batman"];
heros.map((heros) => {
    return `You are ${heros}`;
});
//example 5
function addOne(number) {
    return number + 1;
}
//example 6
function HandleEError(err) {
    throw new Error(err);
}
//---------------------------------------------------------------------------------------------------------->
//objects
const user = {
    name: "Makrious",
    age: 20,
    isMarried: false
};
function createPerson(person) {
    //code...
}
// : Person means that the return type must be a Person type`
function createNewPerson(pers) {
    pers.name = "Makrious";
    pers.age = 20;
    pers.isMarried = false;
    return Object.assign({}, pers);
}
createNewPerson({ name: "Mak", age: 20, isMarried: false });
const citizen1 = {
    _id: 1,
    name: "Makrious",
    age: 20,
    isMarried: false,
    nationality: "Egyptian",
    greeting: function () {
        return `Hello! My name is ${this.name}`;
    },
    getLicence: (carNumber) => {
        return 999 + carNumber;
    }
};
console.log(citizen1.greeting()); // Output: Hello! My name is Makrious
console.log(citizen1.getLicence(123)); // Output: 1122 (999 + 123)
let user1 = {
    _id: 1,
    name: "Makrious",
    age: 20,
    isMarried: false
};
user.name = "Ayman"; // can be changed
//---------------------------------------------------------------------------------------------------------->
//Arrays
/* Types of Arrays */
const SuperHeros1 = [];
SuperHeros1.push("Superman");
//or
const SuperHeros2 = [];
SuperHeros2.push("Batman");
const Models = [];
Models.push({ name: "Superhero", buildDate: "20-12-2018", weight: 150 });
/* Two Dimwnsional Array */
const TwoDimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
/* Tuples */
let MyTuple; // The array must be strictly with this order
MyTuple = [1, "Hello", true];
let man1 = ["Makrious", 20];
man1.push("Ayman");
//---------------------------------------------------------------------------------------------------------->
// one variable with different data types
/* Mixing Normal Data types */
let mixedType = "Hello";
mixedType = 10;
mixedType = false;
//or
let money;
money = 100;
money = "100 dollars";
let pet;
pet = { name: "Max", age: 5 };
/* Mixing Arrays */
let data = [1, 2, "Dog", "Cat"];
/* Only certain values */
let payment;
const paymentType = 1 /* Payment.MasterCard */;
//---------------------------------------------------------------------------------------------------------->
//OOP 
/* Classes */
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const student1 = new student("Makrious", 20);
/* Public   -   Private   -   protected        */
/* All          class only    can be inherited*/
class person {
    constructor(licence, _id, name, age) {
        this.licence = licence;
        this._id = _id;
        this.name = name;
        this.age = age;
        this.nationality = "Egyptian";
        //code...
    }
}
class Army extends person {
    constructor() {
        super(...arguments);
        this._rank = "";
        this.licence = this.licence + 99;
    }
}
/* Setters and Getters */
class Student {
    constructor(_id) {
        this._id = _id;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        if (value > 0) {
            this._id = value;
        }
        else {
            throw new Error("ID must be a positive number");
        }
    }
}
//while missing some values when implementing the interface, the application will give an error until all interface data is considered 
class Camera {
    constructor(cameraMode, filter, iso) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.iso = iso;
        //code...
    }
}
const samsung = new Camera("portrait", "normal", 150);
/* Abstract class => We cannot create an obeject from an abstract class*/
class TakePhoto {
    constructor(cameraMode, filter, iso) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.iso = iso;
        //code...
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, iso, caption, location) {
        // super is a must for declaring that these variables are from the abstract class 
        super(cameraMode, filter, iso);
        this.caption = caption;
        this.location = location;
        //code...
    }
    displayinfo() {
        console.log(`Camera Mode: ${this.cameraMode}`);
        console.log(`Filter: ${this.filter}`);
        console.log(`ISO: ${this.iso}`);
        console.log(`Caption: ${this.caption}`);
        console.log(`Location: ${this.location}`);
    }
}
//---------------------------------------------------------------------------------------------------------->
//Generics
/* Normal Function => Any type is accepted and also return any type weaher its different or not */
function identity(val) {
    return val;
}
/* Generic Function => The type of the value you entered it will must be also the same type of return */
function genericIdentity(val) {
    return val;
}
//or
function genericIdentity2(val) {
    return val;
}
/* Generic Array */
function genericArray(arr) {
    return arr[3];
}
/* Arrow Generic function */
const genericRowArray = (arr) => {
    return arr[2];
};
//---------------------------------------------------------------------------------------------------------->
// Type Narrowing
//ex 1
function typeNarrowing(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val.toFixed(2);
}
function isAccountAdmin(user) {
    if ("isAdmin" in user) {
        return user.isAdmin;
    }
}
