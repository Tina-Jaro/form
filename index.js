// alert("Hello World!"); // brings up a pop up dialog

// console.log("Hello World!"); // displays in the console in the browser through developer tools from chrome

// console.error("This is an error"); //to display an error through the console

// console.warn("This is a warning");// to display a warning through the console


//variables in js; we use var(globally scoped), let(reassign values) and const(cannot be initialized, cannot be changed, it is a constant)( both of them are block level scope)

//primitive datatype = string, numbers, null, undefined, boolean
//typeOf: to check the type of datatype

// const name = 'Tina';

//concatenation
// const name = 'Tina';
// const age = '20';

// console.log('My name is ' + name + ' and I am ' + age + ' years old');

// Template String 

// console.log( `My name is ${name} and I am ${age} years old`);
// const hello = `My name is ${name} and I am ${age} years old`;
// console.log(hello);

//number of length in a character
// const s = 'Hello World';
// console.log(s.length);

// to upper case
// const s = 'Hello World';
// console.log(s.toUpperCase());

// to upper case
// const s = 'Hello World';
// console.log(s.toLowerCase());

//to substring
// const s = 'Hello World';
// console.log(s.substring(1, 9));

//to substring to upper
// const s = 'Hello World';
// console.log(s.substring(1, 9).toUpperCase());

//to split a text with quote
// const s = 'Hello World';
// console.log(s.split(''))

//to split words with quote
// const s = 'Cat, Dog, Goat, Sheep';
// console.log(s.split(','))

//Arrays are variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'oranges', 'pears']
// //

// fruits.push('mango');// add a new item to the list
// fruits.unshift('strawberries'); //add a new item to the top of the list
// fruits.pop(); // deletes the last item from an array
// console.log(fruits);

// console.log(Array.isArray(fruits)); // checks whether it is an array

// const todos =  [
//     {
//         id: 1,
//         Text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         Text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         Text: 'island party',
//         isCompleted: true
//     }

   
// ];

//looping in an array
// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].Text);
// }

// for(let todo of todos){
//     console.log(todo.Text)
// }


// console.log(todos);

//FOR LOOPS 
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

//while loop
// let i = 0;
// while(i < 10){
//     console.log(i);
// }

// for each, map


// if statement 
// const x = 10;

// if (x === 20){
//     console.log('x is 20');
// } else if(x > 10){
//     console.log('x is greater 20');
// } else {
//     console.log('x is less than 20');
// }


// const x = 10;
// const y = 11;

// if (x > 5 || y > 10 ){
//     console.log('x is more than 5 or y is more than 10')
// }

//tenary operator ? for then and : for else
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch cases
// const color = 'red '
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//     console.log('color is not red or blue'); 
//         break;
// }

//functions
// function addNums(num1, num2) { // adding parameters 
//     console.log(num1 + num2);
// }

// addNums(5, 4); // calling the function and passing the parameter 

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob;
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
// }

// //instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const ujperson2 = new Person('John', 'Doe', '4-3-1980');

// console.log(person1.dob);

// console.log(window);
// alert(1);

//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
                                                                                                                                                                                