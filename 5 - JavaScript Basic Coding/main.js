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