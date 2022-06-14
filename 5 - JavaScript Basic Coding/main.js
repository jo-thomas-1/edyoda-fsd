console.clear();

// Answer 1
console.log("Answer 1 -----------------------------------");

var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';

// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var result = str1.trim() + " " + str2.trim() + " " + str3.trim();

console.log("Result: " + result);

//-----------------------------------------------------------------------------------

// Answer 2
console.log("Answer 2 -----------------------------------");

var enteredAlphabet = 'z';
enteredAlphabet = enteredAlphabet.toLowerCase();

// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

if(enteredAlphabet >= 'a' && enteredAlphabet <= 'z')
{
	switch(enteredAlphabet)
	{
		case 'a':
			console.log("Vowel");
			break;
		case 'e':
			console.log("Vowel");
			break;
		case 'i':
			console.log("Vowel");
			break;
		case 'o':
			console.log("Vowel");
			break;
		case 'u':
			console.log("Vowel");
			break;
		default:
			console.log("Consonant");
			break;
	}
}
else
{
	console.log("non-alphabet");
}

//-----------------------------------------------------------------------------------

// Answer 3
console.log("Answer 3 -----------------------------------");

// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations
// (add, subtract, multiply and divide) using switch case.
// The calculator should input two numbers and an operator: '+', '-', '\*', '/' from the user.
// It should perform operation according to the operator entered and must take input in given format.

var number_1 = parseInt(prompt("Enter the first value"));
var operator = prompt("Enter the operation to perform [+, -, *, /]");
var number_2 = parseInt(prompt("Enter the second value"));

switch(operator)
{
	case '+':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 + number_2));
		break;
	case '-':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 - number_2));
		break;
	case '*':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 * number_2));
		break;
	case '/':
		console.log(number_1 + " " + operator + " " + number_2 + " = " + (number_1 / number_2));
		break;
	default:
		console.log("Invalid operation entered");
		break;
}

//-----------------------------------------------------------------------------------

// Answer 4
console.log("Answer 4 -----------------------------------");

// Write a JavaScript program to input sides of a triangle
// check whether a triangle is equilateral, scalene or isosceles triangle using if else.

var side_1 = parseInt(prompt("Enter value for first side"));
var side_2 = parseInt(prompt("Enter value for second side"));
var side_3 = parseInt(prompt("Enter value for third side"));

if(side_1 == side_2 && side_1 == side_3)
{
	console.log("Equilateral Triangle");
}
else if(side_1 == side_2 || side_1 == side_3 || side_2 == side_3)
{
	console.log("Isosceles Triangle");
}
else
{
	console.log("Scalene Triangle");
}

//-----------------------------------------------------------------------------------

// Answer 5
console.log("Answer 5 -----------------------------------");

// Write a JavaScript program to input electricity unit charge
// calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill.

var units = parseFloat(prompt("Enter number of electricity units"));
var bill = 0;

// For first 50 units Rs. 0.50/unit
if(units <= 50 && units > 0)
{
	bill = bill + (units * 0.50);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (50 * 0.50);
	units = units - 50;
}

// For next 100 units Rs. 0.75/unit
if(units <= 100 && units > 0)
{
	bill = bill + (units * 0.75);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (100 * 0.75);
	units = units - 100;
}

// For next 100 units Rs. 1.20/unit
if(units <= 100)
{
	bill = bill + (units * 1.20);
	units = 0;
}
else if(units > 0)
{
	bill = bill + (100 * 1.20);
	units = units - 100;
}

// For unit above 250 Rs. 1.50/unit
if(units > 0)
{
	bill = bill + (units * 1.50);
}

// An additional surcharge of 20% is added to the bill.
bill = bill + (bill * 0.2);

console.log("Total Bill: ", bill);