// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/**
 * because when it doesn't find the variable inside the fucntion the the scope goes outside to look for it.
 */

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  for(let i = 0;i < number;i++){
    let counter = i;
    if(counter === number){
      let sum = counter + number;
      return sum 
      
      
    }
   
  }
  
}
summation(4)