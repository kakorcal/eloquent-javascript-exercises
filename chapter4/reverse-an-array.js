//reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as an argument and produces 
//a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the 
//reverse method does: it modifies the array given as argument in order to reverse its elements. 
//Neither may use the standard reverse method.

function reverseArray(arr){
	var result = [];
	for(var i = arr.length-1; i >= 0; i--){
		result.push(arr[i]);
	}
	return result;
}

function reverseArrayInPlace(arr){
	for(var i = arr.length-1; i >= 0; i--){
		arr.push(arr[i]);
	}
	return arr.slice(Math.floor(arr.length/2));
}

console.log(reverseArrayInPlace([5,2,1,4,4,3,6]));