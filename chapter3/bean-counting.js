// write countBs function that takes a string as argument and returns a number
// that indicates how many uppercase B characters are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument 
//that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
//Rewrite countBs to make use of this new function.

function countChar(string, character){
	var count = 0;
	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) === character){
			count++;
		}
	}
	return count;
}

function countBs(string){
	return countChar(string, 'B');
}

console.log(countChar('BBalskdjf', 'a'));