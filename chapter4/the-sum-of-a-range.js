//Write a range function that takes two arguments, start and end, and returns an array containing 
//all the numbers from start up to (and including) end.

function range(start, end, step){
	var result = [];
	var a = start < end ? start : end;
	var b = start < end ? end : start;
	if(step === undefined) step = 1;
	for(var i = a; i <= b; i += step){
		result.push(i);
	}
	return start < end ? result : result.reverse();
}

function sum(arr){
	return arr.reduce(function(acc, curr){ return acc + curr; });
}

console.log(range(5,2,1));