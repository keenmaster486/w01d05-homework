//|----------------------------------------------------------|
//|                       w01d05-homework                    |
//|                       Collin Brockway                    |
//|                    3/22/2019 - 3/24/2019                 |
//|----------------------------------------------------------|


//A. Q&A
//1. Using let or const, for example: "let variable = 42;"
//2. Using the "=" operator, for example: "variable = 1776;"
//3. Also use "=" operator, e.g. "newvar = variable;"
//4. Wait, what?
//5. Pseudocode is highly human-readable text that has the structure
//   of code, and thus can serve as a guide to structuring the actual
//   code.
//6. Something like 3/4 thinking, 1/4 typing.

//|----------------------------------------------------------|
//|       Everything below is commented out so as not to     |
//|       spam the console, except for the current portion   |
//|       of code that is being tested                       |
//|----------------------------------------------------------|

/*

//B. Strings

//1.

let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "This is a string";
console.log(firstVariable);
console.log(secondVariable);

//Value of firstVariable ought to be now the same as secondVariable,
//since they now simply point to the same location in memory.
//(never mind, that is not the case: had to use "let" in order to
//not run into const redefinition errors, and now the final value of
//firstVariable is not tied to that of secondVariable (would it ever be?)

//2.

const yourName = "Collin Brockway";
console.log("Hello, my name is " + yourName);

//C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true != false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a != b > c);
console.log(a == a != d);
console.log(48 == '48');

//D. The Farm

//1.
const animal = "cow";

//2.
if (animal == "cow") {console.log("mooooo");}

//3.
if (animal != "cow") {console.log("Hey! You're not a cow.");}

//E. Driver's Ed

//1.
const personAge = 15;
//2.
if (personAge >= 16) {console.log("Here are the keys");}
//3.
if (personAge < 16) {console.log("Sorry, you're too young.");}



//II. Loops

//A. The Basics

for (let i = 0; i <= 10; i++)
{
	console.log(i);
}

for (let i = 10; i <= 400; i++)
{
	console.log(i);
}

for (let i = 12; i <= 4000; i = i + 3)
{
	console.log(i);
}

//B. Get even

//Print out the even numbers between 1 and 100
for (let i = 2; i <= 100; i = i + 2)
{
	console.log(i);
}

//Print out all numbers and put a message next to the even ones
for (let i = 1; i <= 100; i++)
{
	console.log(i + (!(i % 2) && "<-- is an even number"));
}



//C. Give me five

//1.
for (let i = 1; i <= 100; i++)
{
	if (!(i % 5)) {console.log(`I found a ${i}. High five!`);}
}

//2.
for (let i = 1; i <= 100; i++)
{
	if (!(i % 5)) {console.log(`I found a ${i}. High five!`);}
	if (!(i % 3)) {console.log(`I found a ${i}. Three is a crowd`);}
}



//D. Bank account

let bank_account = 0;

for (let i = 1; i <= 10; i++)
{
	bank_account = bank_account + i;
}

console.log(bank_account);

bank_account = 0;
//(apparently we spent all our money on coffee or something)

for (let i = 1; i <= 100; i++)
{
	bank_account = bank_account + (i * 2);
}

console.log(bank_account);



//E. Multiples of 3 and 5

//Newsflash, I already did it. Check homework 3 or 4? Whichever it was.

*/



//III. Arrays and Control Flow


//A. Talk about it:
//1. Elements
//2. No
//3. For example, a list of friends in a social media app (elements would
//   be objects)



//B. Easy does it:

const quotes = ["The quick brown fox jumps over the lazy dog", "Four score and seven years ago, our fathers brought forth upon this continent a new nation", "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy."];
