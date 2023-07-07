/*Declare 2 variables a and b, such that a > b, and define values for them. Output their
a. sum
b. difference (between a and b)
c. product
d. quotient (between a and b)
e. remainder (between a and b)
Input Output
14, 5 19 9 70 2.8 4
99, 11 110 88 1089 9 0
81, 16 97 65 1296 5.0625 1 */
 
let a = 14 ;
let b = 5 ;
let sum = a + b ;
let difference = a - b ;
let product = a * b ;
let quotient = a / b ;
let remainder = a % b ;

 console.log(a);
 console.log(b);
 console.log(sum);
 console.log(difference);
 console.log(product);
 console.log(quotient);
 console.log(remainder);
   
 /*Print your name and age in the following format: “My name is ____, I am ____*/
 let name = Gayane;
 let age = 33;
 console.log('My name is ${name},I am ${age}');

 
   
 /*Declare a variable with defined value. Print the last digit of the number.
 Input Output
 
 78756 6
 -122 -2
 8 8
 0 0*/

let number1 = 78756;
let lastdigit1 =number1 % 10;
let number2 = -122;
let lastdigit2 = number2 % 10;
let number3 = 8;
let lasdigit3 = number3 % 10;
let number4 = 0;
let lastdigit4 = number4 % 10;
console.log(lastdigit1);
console.log(lastdigit2);
console.log(lastdigit3);
console.log(lastdigit4);



/* Check whether a given number is negative. Print “yes”, if it is negative, print “no”
otherwise.

Input Output

0 “no”
-71 “yes”
89 “no” */
let c = 0;
let d = -71;
let e = 89;
if (c < 0) { 
    console.log("yes")
}else{
        console.log("no")
    }


if (d < 0){
    console.log("yes")
}else{ 
        console.log("no")
    }

if(e < 0){
    console.log("yes")
}else{
        console.log("no")
    }
