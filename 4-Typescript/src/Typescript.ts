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
        - 
*/

//---------------------------------------------------------------------------------------------------------->

//Steps to initialize Typescript using Yarn
/*
    1- yarn add typescript ts-node -g 
        => This will create a tsconfig.json file in the "dependencies"

    2- yarn remove typescript ts-node
        => This will remove the package.json file

    3- yarn add typescript ts-node -D
        => This will create a tsconfig.json file in the "devdependencies"

    4- ts-node TypescriptFile.ts 
        => This will execute the file

    5- tsc TypescriptFile.ts
        => This will compile the ts file to js file

    6- tsc TypescriptFile.ts -w
        => This will open the watch mode and every change will be detected and compiled automatically

    7- tsc --init
        => This will create the tsconfig.js

    8- change the "rootDir" to the folder of the typescript files
        => This will make the configuration files of the ts files in this folder

    9- change the "outDir" to the folder where you want to output the compiled js files
        => This will make the compiled js files in this folder
*/

//---------------------------------------------------------------------------------------------------------->

/* Type Annotation  --->   let VariableName: type = Value;
   Type Inference   --->   if you assigned a value when declaring a variable, TS will automatically know the variable's type without assigning the data type.
*/

// string
let name: string = "Makrious";

// number  (integer / float)
let age: number = 20;   /* age.NumberFunctions; */ 

// Boolean 
let Married: boolean = false;

// any  (DONT USE IT !)
let anyType: any = "Hello";
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
let login = (name: string, password: string, isAdmin: boolean = false) => {
    console.log(`Welcome ${name}!`);
    console.log(`Your password is ${password}.`);
    console.log(`Is admin: ${isAdmin}`);
}
login("Makrious", "PASSWORD", true);
login("KOKOO", "PASS123");  //we defigned a default value for the isAdmin variable

//example 2
function addTwo (number: number){
    return number + 2;
}

//example 3
function displayProduct(): void {
    console.log("This is a displayProduct function");
}

//example 4
let heros = ["Superman", "Spiderman", "Batman"]
heros.map((heros): string => {
    return `You are ${heros}`;
}); 

//example 5
function addOne (number: number):{}{
    return number + 1;
} 

//example 6
function HandleEError(err: string): never{
    throw new Error(err);
}

//---------------------------------------------------------------------------------------------------------->

//objects

const user = {
    name: "Makrious",
    age: 20,
    isMarried: false
}

// We can use TS 's strength in defigning the type of each variable in the object
const user2: {
    name: string,
    age: number,
    isMarried: boolean
} = user; 

//---------------------------------------------------------------------------------------------------------->

// spread operator & Destructuring

const person = {
    name: "Makrious",
    age: 20,
    isMarried: false
};

const person2: { 
    name: string; 
    age: number; 
    isMarried: boolean; 
    address: string; 
} = { ...person, address: "Alexandria" };

//---------------------------------------------------------------------------------------------------------->

//Type Aliases
/*
    - create a new datatype.
    - it's a way to give a name to a type.
    - it's useful when we want to reuse a type or when we have complex types.
*/

type Person = {
    name: string,
    age: number,
    isMarried: boolean
}

function createPerson(person: Person){
    //code...
}

// : Person means that the return type must be a Person type`
function createNewPerson(pers: Person): Person{
    pers.name = "Makrious";
    pers.age = 20;
    pers.isMarried = false;
    return {...pers};
}
createNewPerson({name: "Mak", age: 20, isMarried:false});

//---------------------------------------------------------------------------------------------------------->

//interface
/*
    - It can be used to define the structure of an object.
    - Refers to a certain object with its properties and methods.
    - Avoid Repetetion
*/

interface Citizen {
    readonly _id: number;
    name: string;
    age: number;
    isMarried: boolean;
    drivingLicence?: boolean;
    greeting(): string;
    getLicence(carNumber: number): number;
}

//we can add on it externally
interface Citizen {
    nationality: string;
}

//inheritance
interface WhoAreYou extends Citizen {
    role: "Employee" | "Student" | "UnEmployed";
}

const citizen1: Citizen = {
    _id: 1,
    name: "Makrious",
    age: 20,
    isMarried: false, 
    nationality: "Egyptian",
    greeting: function () {
        return `Hello! My name is ${this.name}`;
    },
    getLicence: (carNumber: number) => {
        return 999 + carNumber;
    }
};

console.log(citizen1.greeting()); // Output: Hello! My name is Makrious
console.log(citizen1.getLicence(123)); // Output: 1122 (999 + 123)

//---------------------------------------------------------------------------------------------------------->

//readonly
/*
    - cannot change its value
    - use it when you want to prevent accidental changes.
    - use it when you want to create an object that is not meant to be changed after creation.
*/

type User = {
    readonly _id: number;   // cannot be changed
    name: string,
    age: number,
    isMarried: boolean
}

let user1: User = {
    _id: 1,
    name: "Makrious",
    age: 20,
    isMarried: false
}
user.name = "Ayman" // can be changed
//user1._id = 2;  //error: Cannot assign to '_id' because it is a read-only property.

//---------------------------------------------------------------------------------------------------------->

//optional

type people = {
    name: string,
    age: number,
    isMarried: boolean,
    credirCard?: number     //it is optional to have it or not
}

//---------------------------------------------------------------------------------------------------------->

//mixing data

type credirCardNumbers = {
    _id: number
}

type credirCardDate = {
    expiryDate: Date
}

type creditCardDetails = credirCardNumbers & credirCardDate & {
    name: string,
    age: number,
    isMarried: boolean
}

//---------------------------------------------------------------------------------------------------------->

//Arrays

/* Types of Arrays */
const SuperHeros1: string[] = [];
SuperHeros1.push("Superman");
//or
const SuperHeros2: Array<string> = [];
SuperHeros2.push("Batman");

/* Type Aliases Arrays */
type Model = {
    name: string,
    buildDate: string,
    weight: number
}
const Models: Model[] = [];
Models.push({name: "Superhero", buildDate:"20-12-2018", weight:150});

/* Two Dimwnsional Array */
const TwoDimensional: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/* Tuples */
let MyTuple:[number, string, boolean];  // The array must be strictly with this order
MyTuple = [1, "Hello", true];

//example
type man = [string, number];
let man1: man = ["Makrious", 20];
man1.push("Ayman");

//---------------------------------------------------------------------------------------------------------->

// Union (one variable with different data types)

/* Mixing Normal Data types */
let mixedType: any = "Hello";
mixedType = 10;
mixedType = false;

//or
let money: number | string;
money = 100;
money = "100 dollars";

/* Mixing Types Aliases */
type dog = {
    name: string,
    age: number
}

type cat = {
    name: string,
    age: number
}

let pet: dog | cat;
pet = {name: "Max", age: 5};

/* Mixing Arrays */
let data: (number | string)[] = [1, 2, "Dog", "Cat"];

/* Only certain values */
let payment: "VISA" | "Credit Card" | "Paypal";

//---------------------------------------------------------------------------------------------------------->

// Keyof 

interface Person2 {
    name: string,
    age: number,
    address: {
        street: string,
        city: string
    }
}

const per : Person2 = {
    name: "Makrious",
    age: 20,
    address: {
        street: "123 Main St",
        city: "New York"
    }
}

type personKeys = keyof Person2;

function getProperty(obj:Person2, key:personKeys){
    return obj[key];
}

console.log(getProperty(per, "name")); // Output: Makrious
console.log(getProperty(per, "age")); // Output: 20

//---------------------------------------------------------------------------------------------------------->

//Enums
const enum Payment {
    VISA,
    MasterCard,
    PayPal,
}
const paymentType = Payment.MasterCard;

//---------------------------------------------------------------------------------------------------------->

//OOP 

/* Classes */

class student {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const student1 = new student("Makrious", 20);   

/* Public   -   Private   -   protected        -    readonly */
/* All          class only    can be inherited      a variable cannot be updated or changed*/
class person3 {
    readonly nationality: string = "Egyptian";
    constructor (
        protected licence: number,
        private _id: number,
        public name: string,
        public age: number
    ){
        //code...
    }
}

class Army extends person3 {
    private _rank: string = "";

    // Instead of modifying the readonly `licence`, you can create a new property to hold the updated value.
    // You should not try to modify the `licence` property directly.
    public updatedLicence: number = this.licence + 99;
}

/* Setters and Getters */

class Student {

    constructor(private _id: number){
        this._id = _id;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        if(value > 0) {
            this._id = value;
        } else {
            throw new Error("ID must be a positive number");
        }
    }
}

/* Using Interface as a must */
interface TakePhoto1 {
    cameraMode: string;
    filter: string;
    iso: number;
}

//while missing some values when implementing the interface, the application will give an error until all interface data is considered 
class Camera implements TakePhoto1 {
    constructor (
        public cameraMode: string,
        public filter: string,
        public iso: number,
    ){
        //code...
    }
}

const samsung = new Camera("portrait", "normal", 150);

/* Abstract class => We cannot create an obeject from an abstract class*/

abstract class TakePhoto {
    constructor (        
        public cameraMode: string,
        public filter: string,
        public iso: number,){
            //code...
    }

    // abstract methods cannot have an implementation it only  is must for any class extends this abstract
    abstract displayinfo(): void
}

class Instagram extends TakePhoto {
    constructor (
        cameraMode: string,
        filter: string,
        iso: number,
        public caption: string,
        public location: string,
    ){
        // super is a must for declaring that these variables are from the abstract class 
        super(cameraMode, filter, iso);
        
        //code...
    }
    displayinfo(): void {
        console.log(`Camera Mode: ${this.cameraMode}`);
        console.log(`Filter: ${this.filter}`);
        console.log(`ISO: ${this.iso}`);
        console.log(`Caption: ${this.caption}`);
        console.log(`Location: ${this.location}`);
    }
}

//---------------------------------------------------------------------------------------------------------->

// Record
const person4: Record<string, string | number> = {
    name: "Makrious",
    age: 20
}

person4["Address"] = "Alexandria";
person4["postalCode"] = 21514;


//---------------------------------------------------------------------------------------------------------->

//Generics

/* Normal Function => Any type is accepted and also return any type weaher its different or not */
function identity(val: any): any{
    return val;
}

/* Generic Function => The type of the value you entered it will must be also the same type of return */
function genericIdentity<Type>(val: Type): Type {
    return val;
}
//or
function genericIdentity2<T>(val: T): T {
    return val;
}

/* Generic Array */
function genericArray<T>(arr: T[]): T {
    return arr[3];
}

/* Arrow Generic function */
const genericRowArray = <T>(arr: T[]): T =>{
    return arr[2];
}

//---------------------------------------------------------------------------------------------------------->

//Partial

/*
    - partial can choose the number of properties i want from an interface
    - it is useful when you want to update a property in an object
    - it helps to avoid passing unnecessary properties to the function
*/

interface Person5 {
    name: string,
    age: number,
    address: string
}

function updatePerson(person: Person5, updates: Partial<Person5>) {
    return {...person, ...updates};
}

const per1: Person5 = {
    name: "Makrious",
    age: 20,
    address: "Alexandria"
}

updatePerson(per1, {age: 21});

//---------------------------------------------------------------------------------------------------------->

// Index Signature

interface cities {
    [key: number]: string;
}

const cityDictionary: cities = {
    1: "Egypt",
    2: "France",
    3: "Germany"
}

console.log(cityDictionary[1]); // Output: Egypt

//---------------------------------------------------------------------------------------------------------->

// Type Narrowing

//ex 1
function typeNarrowing(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase();
    }
    return val.toFixed(2);
}

//ex 2
interface user{
    name: string,
    age: number
}

interface admin {
    name: string,
    age: number,
    isAdmin: boolean
}

function isAccountAdmin(user: user | admin){
    if("isAdmin" in user){
        return user.isAdmin;
    }
}
//---------------------------------------------------------------------------------------------------------->

export{}