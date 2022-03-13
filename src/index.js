function sayHello(){
    return "Hello World"
}

// let fn = sayHello;  // Passed reference to the function not calling it.
// fn();

/* ****************Pass function as  an argument to another function****************** */

// function greet(fnmessage){
//     console.log(fnmessage());
// }

// greet(sayHello);

/* *****************returning function from a function******************* */ 

// function sayHello(){
//     return function(){
//         return "Hello World"
//     }
// }

// let fn = sayHello();
// let message = fn();

/* ************Higher Order Functions************** */ 

// those function which either return or has argument as a function are higher order function

// examples
// let  numbers = [1,2,3,4,5,6];
// numbers.map(number => number*2);    // map is a function itslef but have another fuction inside itself

// setTimeout(()=>console.log("Hello"));   // setTimeout is takig a function as an argument 



/* ****************Functional Component**************** */
// Example of non functional style
let input = "  javascript  ";
let output = "<div>" + input.trim() + "</div>";

// Functional 
/* ************Steps****************** */
// Trim 
const trim = str =>str.trim();
// Wrap inside a div tag
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));

/*************************Composing and Piping**************************/ 
