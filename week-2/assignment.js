AppWorks School / Front-End Class #1
Assignments Week 2




Assignment 1: Function and Array
Complete function below to calculate sum of the passing numbers. You may refer to this MDN document about rest parameters of function.
function sum(...numbers){
	// your code here
}
sum(1, 2, 4, 5); // result to 12
sum(5, 2, 7, 1, 6); // result to 21


Answer 
---------------------------------------------------------

function sum(...numbers) {
  return numbers.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2, 4, 5);
sum(5, 2, 7, 1, 6);
---------------------------------------------------------







Assignment 2: Object
In JavaScript, there are different sets of syntax for creating objects. In the code below, function parameters are encapsulated into an object, try using at least two ways to call calculate function correctly.
function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
// Try to call calculate function correctly
/*
	For example, if we have an add function like this:
		function add(args){
			return args.n1+args.n2;
		}
	We can call it by:
		add({n1:3, n2:4});
*/

Answer 
---------------------------------------------------------
01
    class Cal{
         constructor(n1, n2, op){
          this.n1 = n1;
          this.n2 = n2;
          this.op = op;
    }}
    var c = new Cal( 3, 2, '+' );
    console.log(calculate(c));


02 - 1
    var args = { n1: 3, n2: 2, op:’-’};
    console.log(calculate(args));

02 - 2
    console.log(calculate( {n1:2, n2:3, op:’+’}));

---------------------------------------------------------
