console.clear();

// Answer 1
console.log("Answer 1 -----------------------------------");

// Write a program to search if a number exists in an array.
// If the number exists then return the position.
// If it exists multiple time then return an array with all the positions.
// If the number doesn't exist then return -1;

function search_all(input_array, search_element)
{
	var found = [];

	for(var i = 0 ; i < input_array.length ; i++)
	{
		if(input_array[i] == search_element) found.push(i);
	}

	if(found.length < 1) return -1;
	else if(found.length == 1) return found[0];
	else return found;
}

console.log(search_all([1, 2, 3, 4, 5, 1, 3], 1));

//===================================================================================

// Answer 2
console.log("Answer 2 -----------------------------------");

// Write a program to print following pattern in the console.

// 54321
// 5432
// 543
// 54
// 5

function pattern_1(value)
{
	for(var i = 0 ; i < value ; i++)
	{
		var temp = "";
		for(var j = value ; j > i ; j--)
		{
			temp = temp + j;
		}
		console.log(temp);
	}
}

pattern_1(8);

//===================================================================================

// Answer 3
console.log("Answer 3 -----------------------------------");

// Write a JavaScript program to sort an array in ascending order

function sort_asscending(array)
{
	array.sort(function(a, b) { return a - b; });
	return array;
}

console.log(sort_asscending([3, 2, 1, 4, 5, 45]));

//===================================================================================

// Answer 4
console.log("Answer 4 -----------------------------------");

// Write a JavaScript program to check if two strings are anagrams.
// Anagram string are such two strings which can be rearranged to create one another.

function anagram(str_1, str_2)
{
	if(str_1.length == str_2.length)
	{
		for(var i = 0 ; i < anagram.length ; i++)
		{
			if(!str_2.includes(str_1[i])) return false;
		}

		return true;
	}
	return false;
}

if(anagram("HELLO", "JELLO")) console.log("True");
else console.log("False");

//===================================================================================

// Answer 5
console.log("Answer 5 -----------------------------------");

// Write a JavaScript program to reverse a string without using inbuilt methods.

function reverse_string(str)
{
	var temp = "";
	for(var i = str.length - 1 ; i >= 0 ; i-- )
	{
		temp = temp + str[i];
	}

	return temp;
}

console.log(reverse_string("Hello"));