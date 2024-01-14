/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN!');


let firstName = "Pristine Eirene";
console.log (firstName);


let javaScript = true;

console.log (typeof javaScript);


javaScript = 'Javascript is Fun!';
console.log (typeof javaScript);

*/

// let can be change and is global. If you change it. I will affect all the variable assigned to it.
// let age = 30;
// age = 33;


// const cannot be change but needs an initial value unlike 'let' that you can leave it blank / undefined then place a value at a later time.
// const birthYear = 1990;

/*
const now = 2024;
const ageNerbs = now - 1990;
const agePaz = now - 1989;
console.log (ageNerbs, agePaz);

const firstName = 'Nerbert';
const lastName = 'Bulaquena';
console.log (firstName + ' ' + lastName);



// STRING AND TEMPLATE LITERALS

const firstName = 'Nerbert';
const job = 'Network Engineer';
const birthYear = 1990;
const year = 2024;
const nerbs = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const nerbsNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log (nerbs);
console.log (nerbsNew);

*/

// IF ELSE STATEMENT

const age = 17;
const isOldEnough = age >= 18;

// if (returns a boolean / true or false statement) {}
if (isOldEnough){
    console.log ('Sarah can start driving lessons.🚗')
} else {
    const yearsLeft = 18 - age;
    console.log (`Sarah is too young. Wait another ${yearsLeft} year(s) :)`);
}

const birthYear = 1990;
let century;

if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

