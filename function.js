let num = 12;

if (num % 3 === 0 && (num + 1 === 15 || num - 1 === 12)) {
  console.log("SAFE");
} else {
  console.log("UNSAFE");
}


 let string = "1";

 if (string) {
  console.log("string is not empty");
 } else {
  console.log("string is empty");
 }

let num;
if (num) {
  console.log("num is not empty");
} else {
  console.log("number is empty");
}



let num = [1, 2, 3, 4];
let final = num.reduce((res, el) => {
 console.log(res);
 return res + el; 
}); 
console.log(final);

// Function declaration / function statment : - using normal funstion key 
function fnc() {
  console.log("Mayank");
}
fnc();

//Function expression : - using let , var , const

 

// Fat arrow function : - ()=>{}

let num = ()=> {
  console.log("36");
}
num();
 
//parameters / arguments 

let f = function(v1, v2) {
  console.log(v1 + v2);
}

f(22, 33);

//default

let D = function(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}
D(1, 2);

//Rest :- it is only use in function 

let R = function( a, b, c, ...V) {
  console.log(a, b, c, V);
}

R(1, 2, 3, 4, 5, 6);

//Return :- jaha se aaye ho vahi daal denge

function ab(m) {
  return 12 + m;  
}

let r = ab(13);
console.log(r);

//First class function => Functionn ko value ki tarah treat kar sakte he;

function A(val) {
   val();
}
A(function(){
  console.log("hi");
})

//hof wo hota jo return kare function ya fir accept kare ek function apne perameter me

function fnc() {
  return function(){
      console.log("hello how are you");
  }
}

fnc()();

// pure vs impure function 
//aisa fnc jo ki bahar ki value ko na badle wo hai pure function.
let a = 12;
function abc(){
  console.log("HEllO");          
}
abc();

function plus(){
  a++;
}
//aisa function jo ki bahar ki value ko badal de wo hai impure function.

//Closures 
//ek function jo return kare ek aur  function aur return hone wala function hamesha use karega perent function ka koi variable

function xyz(){
  let x = 12;
  return function(){
    console.log(x);
  }
}
xyz()();
 

//Q1 = What's the difference between function declaration and expression in terms of hoisting ?

//ye hoist hota he.
abc();
function abc(){
  console.log("Mayank");
}


// //Q2 = log kya karega?
// //out put =  Hello

// // ye hoist nahi hota he. 


let abcd = function(){
  console.log("HEllO");
}
abcd();

//Q3 = arrow function me convert karna he .

let multi = (a,b)=> {
  return(a * b);
}
console.log(multi(10, 20));

// // use rest parameter to accept any number of scores  and return the total.

function getScore(...scores){
  let total = 0;
  scores.forEach(function(val){
    total = total + val;
  });
  return total;
}
console.log(getScore(10, 20, 30,));

 // Q 9 function if
function checkage(age) {
 if(age < 18) return "Too young";
    return "Allowed";
}

console.log(checkage(20));

//Q10 

function z(){
  return;
}
console.log(z());

// Pass a function into another function and execute it inside.

function ma(val){
  val();
}

ma(function(){
  console.log("HEllO");
})

// what is high order function.
// in uper code the ma is high order function

//convert this normal function into IIFE.
(function M(){
  console.log("initialized");
})();

let p = prompt("Enter marks");
function marks(val){
    if(val <= 100 && val >= 90) return "A+";
    else if(val <= 89 && val >= 80) return "A";
    else if(val <= 79 && val >= 70) return "B";
    else if(val <= 69 && val >= 60) return "c";
    else if(val <= 59 && val >= 50) return "d";
    else if(val <= 32) return "Fail";
    else return "Invelid number";
}
marks(p);

let user = prompt("enter user choise");

let computer = prompt("enter computer's choise");

function game(user , computer){
      if(user === computer) return "Draw";
      if(user === "rock" && computer === "scissor") return "user is winner";
      if(user === "scissor" && computer === "paper") return "user is winner";
      if(user === "paper" && computer === "rock") return "user is winner";
      else
        return "computer is winner";
    }
console.log(game(user, computer));

