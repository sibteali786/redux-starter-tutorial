// import {compose , pipe} from "lodash/fp";
// import {Map} from "immutable";
// import {produce} from "immer";

// function sayHello(){
//     return "Hello World"
// }

// // let fn = sayHello;  // Passed reference to the function not calling it.
// // fn();

// /* ****************Pass function as  an argument to another function****************** */

// // function greet(fnmessage){
// //     console.log(fnmessage());
// // }

// // greet(sayHello);

// /* *****************returning function from a function******************* */ 

// // function sayHello(){
// //     return function(){
// //         return "Hello World"
// //     }
// // }

// // let fn = sayHello();
// // let message = fn();

// /* ************Higher Order Functions************** */ 

// // those function which either return or has argument as a function are higher order function

// // examples
// // let  numbers = [1,2,3,4,5,6];
// // numbers.map(number => number*2);    // map is a function itslef but have another fuction inside itself

// // setTimeout(()=>console.log("Hello"));   // setTimeout is takig a function as an argument 



// /* ****************Functional Component**************** */
// // Example of non functional style
// let input = "  javascript  ";
// // let output = "<div>" + input.trim() + "</div>";

// // Functional 
// /* ************Steps****************** */
// // Trim 
// // const trim = str =>str.trim();
// // // Wrap inside a div tag
// // const wrapInDiv = str => `<div>${str}</div>`;
// // const toLowerCase = str => str.toLowerCase();

// // const result = wrapInDiv(toLowerCase(trim(input))); // looks to much messy what if we can compose them into one 

// /*************************Composing and Piping**************************/ 
// // let transform = compose(wrapInDiv, toLowerCase,trim);   // It has nw issue of only the order of functions being executed
// // transform(input);

// // let transform = pipe(trim, toLowerCase, wrapInDiv);   // It has nw issue of only the order of functions being executed
// // transform(input);



// /* ********************Currying********************* */

// const trim = str =>str.trim();
// const toLowerCase = str => str.toLowerCase();
// const wrap = type => str =>`<${type}>${str}</${type}>`;

// const result = pipe(trim, toLowerCase, wrap("span")); // looks to much messy what if we can compose them into one 
// console.log(result(input));
// /* this has a problem i.e. we are only passing on argument to wrap while it needs two arguments.
// This is where concept of currying helps us */


// /************************ Pure Functions ***********************/
// // A function which returns same result for given argument is Pure  

// /***********Updating Objects**********************/
// const person = {name:"John"};
// /**********************Old method*************************/ 
// // const updated = Object.assign({},person,{name:"Bob",age:30});
// /**********************Spread oerpator method*******************/
// const updated = {...person, name:"Bob"};
// console.log(updated); 

// /***********************Updating Arrays**************************/
// const numbers = [1,2,3];
// // adding 4 before a specific index element 
// const index = numbers.indexOf(2);
// const added = [
//     ...numbers.slice(0,index),
//     4,
//     ...numbers.slice(index)
// ];
// console.log(added);

// // Removing a specific number 
// const removed = numbers.filter(n => n !== 2);
// console.log(removed);

// //  Updated 
// const updated_array = numbers.map(n => n === 2 ? 20:n);
// console.log(updated_array);

// /* *****************Imuutable.js**************************/




// // let book = Map({
// //     title:"Harry Potter"
// // });

// // function publish(book){
// //     return book.set("isPublished",true);
// // }

// // book = publish(book);   // re assigining as object is immutable thus needs to return and 
// // // re assign to book again 
// // // console.log(book.get("title")); 
// // console.log(book.toJS()); 









// /********************* Immer ********************************** */

// let book = {
//     title : "Harry Potter "
// };

// function publish(book){
//     return produce(book,draftBook => {
//         draftBook.isPublished = true;
//     });
// }

// let updated_book = publish(book);
// console.log(updated_book);
// console.log(book); 


import store from "./store";

// Observing Chnages made in the store 
const unsubscribe = store.subscribe(()=>{
    console.log("Store Changed !", store.getState());
})
// Adding dispatch 
store.dispatch({
    type:"bugAdded",
    payload:{
        description:"Bug1", 
    }
})

unsubscribe();

// Removing Dispatch
store.dispatch({
    type:"bugRemoved",
    payload:{
        id:1
    }
})

console.log(store.getState());

 
