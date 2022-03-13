function add(a,b){
    return function(b){
        return a+b
    }
}

// Convert function having " n " arguments to one having only one argument. 

const add1 = add(1);
add1(5);

// Another way 

add(1)(5);

// another way
const add2 = a => b => a+b; // (a,b) => a+b