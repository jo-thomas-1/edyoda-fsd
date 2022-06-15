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

function pattern_1(argument)
{
	// body...
}

//===================================================================================

// Answer 3
console.log("Answer 3 -----------------------------------");



//===================================================================================

// Answer 4
console.log("Answer 4 -----------------------------------");



//===================================================================================

// Answer 5
console.log("Answer 5 -----------------------------------");

