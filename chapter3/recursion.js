// Check if n is even or odd: 0 = even, 1 = odd, for other num N the evenness is same as N - 2
// Define recursive isEven which has a number parameter and returns a boolean

//Define a recursive function isEven corresponding to this description. The function should accept a 
//number parameter and return a Boolean. Test it on 50 and 75. See how it behaves on –1. Why? Can you think 
//of a way to fix this?

function isEven(number){
	if(number === 0){
		return true;
	}else if(number === 1){
		return false;
	}else if(number < 0){
		return isEven(-number);
	}else{
		return isEven(number - 2);
	}
}

console.log(isEven(-3));