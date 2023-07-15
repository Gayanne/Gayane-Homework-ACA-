/*1. Given an array of numbers. Write a function to separate odd and even numbers in
different arrays.
Input Output
[45, 12, 3, 6, 17, 0] [45, 3, 17]
[12, 6, 0]
[1, 3, 5, 9] [1, 3, 5, 9]
[] */
let arr1 = [45, 12, 3, 6, 17, 0];
let arr2 = [1, 3, 5, 9, ]

function count(arr) {
  let oddNumbers = [];
  let evenNumbers = [];

  for (let number of arr) {
    if (number % 2 === 1) {
      oddNumbers.push(number)

    } else {

      evenNumbers.push(number)
    }

  }
  return evenNumbers,oddNumbers
 
}
console.log(count(arr1));

/*2.Write a function that calculates sum, difference, multiplication and division between
given array elements depending on passed operation symbol. Write appropriate function
for each operation.*/


function countSum(arr) {
    let sum = 0;
    for (let number of arr) {
      sum += number;
  
    }
    return sum;
  }
  
  function countDifference(arr) {
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
      result -= arr[i];
    }
    return result;
  }
  let array = [1, 2, 8, 9];
  console.log(countDifference(array));
  
  function countMultipication(arr) {
    let multipresult = 1;
    for (let number of arr) {
      multipresult *= number;
    }
    return multipresult;
  }
  console.log(countMultipication(array));
  
  function resultDivision(arr) {
    let divisionResult = arr[0];
    for (let i = 1; i < arr.length; i++) {
      divisionResult /= arr[i]
    }
    return divisionResult;
  }
  console.log(resultDivision(array));
  
 /*Given an object. Invert it (keys become values and values become keys). If there is
more than key for that given value create an array.

Input Output

{ a: ‘1’, b: ‘2’ } { 1: ‘a’, 2: ‘b’ }
{ a: ‘1’, b: ‘2’, c: ‘2’  } { 1: ‘a’, 2: [‘b’, ‘c’] }fof
{ a: ‘1’, b: ‘2’, c: ‘2’, d: ‘2’  } { 1: ‘a’, 2: [‘b’, ‘c’, ‘d’] }*/
let obj1 = {
    a: '1',
    b: '2',
  }
  let obj2 = {
    a: '1',
    b: '2',
    c: '2',
  }
  let obj3 = {
    a: '1',
    b: '2',
    C: '2',
    d: '2',
  }
  
  
  function invertKey(obj) {
    let newobj = {}
    
    for (let key in obj) {
    let value = obj[key];
      if (newobj[value] === undefined) {
        newobj[value] = key
  
      } else {
        if (typeof newobj[value] === 'string') {
          newobj[value] = [newobj[value]]
          newobj[value].push(key)
        }
      }
  
    }
    return newobj;
  
  }
  console.log(invertKey(obj2));
  /*Given two objects. Write a function that performs shallow compare.
Input Output

var a = { a: ‘1’ };
var b = { a: ‘1’};
shallowCompare(a, b)

true

var a = { a: ‘1’ };
var b = { a: ‘1’, b: ‘2’ };
shallowCompare(a, b)

false

var a = { };
var b = { };
shallowCompare(a, b)

true */
let a ={
    a:'1',
    };
    let b ={
    a:'1',
    b:'2'
    }
    
    let c = {
    a:'1'
    }
    
    function shallowCompare(obj1,obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if(keys1.length !==keys2.length){
    return false;
    }
    for(let key of keys1){
    if(obj1[key] !== obj2[key]){
    return false;
    }
    }return true;
    }
    
    
    console.log(shallowCompare(a,c))
    /*Write a function which receives two strings and removes appearances of the second
string from the first one.*/
function removeRepeatstr(string, removestr) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      let isMutch = false;
      for (let j = 0; j < removestr.length; j++) {
        if(string[i+j]!==removestr[j]){
        isMutch = true;
        break;
        }
        
      }
      if(!isMutch){
      i += removestr.length-1
      }else{
      result += string[i]
      }
    }
    return result;
  }
  let string1 = "This is some text";
  let string2 = "is";
  console.log(removeRepeatstr(string1,string2));