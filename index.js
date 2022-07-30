let myName = 'Jasmine';
console.log(myName);

// -- variables cannot start with a number such as 1stname
let firstName = 'Jasmine';
let lastName = 'San Juan';

// -- Constants --
const interestRate = 0.3;
console.log(interestRate);

// -- primatives
// string, numbers, boolean, undefined, null
let friendsName = 'Mike';
let friendAge = 9000;
let isApproved = false;
let firendAddress = null;

// -- Objects
let person = {
    name: 'Greg',
    age: 69,
};
console.log(person);

// -- Dot notation
person.name = 'Steve';
person.age= 420;

// -- Bracket Notation
person['name']= 'Mary';
person['age'] = 58;

let selection = 'name';
person[selection] = 'Jane';
console.log(person);

// -- Arrays
let selectedColors = ['Red', 'Orange', 'Yellow'];
selectedColors[3] = 21;
console.log(selectedColors[3]);

// -- functions
function greet(fName, lName){
    console.log("Welcome " + fName + ' ' + lName);
}
greet(firstName, lastName);

// -- types of functions

// -- Performing a task (prints to terminal)
function greet(fName, lName){
    console.log("Welcome " + fName + ' ' + lName);
}

// -- Calculating a value
function square(value){
    return value * value;
}
console.log(square(2));
//alert('test');

// -- console logging
console.log('%c You can contain items like so, don\'t forget {}\'s', 'color: red; font-weight: bold' )
console.log({person,firstName,lastName});

// -- tables
console.log('%c you can set things as tables such as', 'color: teal')
console.table(person);

const foo = {name: 'Peanut', age: 3, breed: 'Labrador'};
const bar = {name: 'Pepper', age: 5, breed: 'Dachshund'};
const baz = {name: 'Lammy', age: 9, breed: 'Pug'};

console.table({foo, bar, baz});

// -- Console.time
console.time('looper');
let i = 0;
while (i < 42069000) {
    i++;
}
console.timeEnd('looper');

// -- Stack Trace Logs
// Tells the user on what lines the trace was triggered
const deleteMe = () => console.trace('Deleted database');

deleteMe();
deleteMe();

// -- object destructureing
// this is used so you can use '.functions' without writing the name of the object
// Such as animal.name, animal.meal, animal diet.
let meal = 13;
let diet = 'bacon';

function feed({name, meal, diet}){
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
// or
function feed(animal){
    const {name, meal, diet} = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// template literals
const horse ={
    name: 'Jeff',
    size: 'thicc',
    skill: 'thrusting',
    age: 69
};
// ❌ Bad way of doing it
console.log(horse.name + ' is a ' + horse.size + ', ' + horse.age + ' year old with a skill of ' + horse.skill);
// 🐴 better way of doing it
const {name,size,skill,age} = horse;
console.log(`${name} is a ${size}, ${age} year old with a skill of ${skill}`);
// function with advance tags
function horseAge(str, age){
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This Stud is ${horse.age}`;
console.log(bio2);

// Template Literals
const slot1 = {name: 'Pikachu'};
const stats = {hp: 90, attack: 40, defense: 30};

const lvl10 = {...slot1,...stats};
console.log(lvl10);

pkmnParty = ['Skitty', 'Wurmple', "Zigzagoon"];
pkmnParty = [...pkmnParty, 'Sandshrew', 'Blaziken', 'Mew'];