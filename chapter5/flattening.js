//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a 
//single array that has all the elements of the input arrays.

var arrays = [[1,2,3], [4,5], [6]];
var flatten = arrays.reduce(function(acc, curr){
	return acc.concat(curr);
}, []);
console.log(flatten);