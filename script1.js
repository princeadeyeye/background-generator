
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

alert("Make a Addition");
var fnum = prompt("What is your first num");
var snum = prompt("what is a second num");
var sum = Number(fnum) + Number(snum);
alert ("The sum is " + sum);

alert("Make a subtraction");
var anum = prompt("What is your first num");
var bnum = prompt("what is your second num");
var subs = Number(anum) - Number(bnum);
alert ("The subtraction is " + subs);

alert("Make a Multiplication");
var cnum = prompt("What is your first num");
var dnum = prompt("what is your second num");
var multp = Number(cnum) * Number(dnum);
alert ("The Multiplication is " + multp);

alert("Make a division");
var gnum = prompt("What is your first num");
var hnum = prompt("what is your second num");
var divis = Number(gnum) / Number(hnum);
alert ("The division is " + divis);