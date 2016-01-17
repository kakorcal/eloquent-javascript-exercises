//Write two functions, every and some, that behave like the array every and some methods, 
//except that they take the array as their first argument rather than being a method.

function every(arr, fcn){
	for(var i = 0; i < arr.length; i++){
		if(fcn(arr[i]) === false){
			return false;
		}
	}
	return true;
}

function some(arr, fcn){
	for(var i = 0; i < arr.length; i++){
		if(fcn(arr[i]) === true){
			return true;
		}
	}
	return false;
}