//Write a function arrayToList that builds up a data structure like the previous one when given 
//[1, 2, 3] as an argument, and write a listToArray function that produces an array from a list.
//Also write the helper functions prepend, which takes an element and a list and creates a new list 
//that adds the element to the front of the input list, and nth, which takes a list and a number and 
//returns the element at the given position in the list, or undefined when there is no such element.
//If you haven’t already, also write a recursive version of nth.

//Building up a list is best done back to front. So arrayToList could iterate over the array backward 
//(see previous exercise) and, for each element, add an object to the list. You can use a local variable to 
//hold the part of the list that was built so far and use a pattern like list = {value: X, rest: list} to add 
//an element. 

// To run over a list (in listToArray and nth), a for loop specification like this can be used: 
	//for (var node = list; node; node = node.rest) {} 
//Can you see how that works? Every iteration of the loop, node points to the current sublist, and the body can 
//read its value property to get the current element. At the end of an iteration, node moves to the next sublist. 
//When that is null, we have reached the end of the list and the loop is finished.

// The recursive version of nth will, similarly, look at an ever smaller part of the “tail” of the list and at 
//the same time count down the index until it reaches zero, at which point it can return the value property of the
// node it is looking at. To get the zeroeth element of a list, you simply take the value property of its 
//head node. To get element N + 1, you take the N th element of the list that’s in this list’s rest property.

function arrayToList(arr){
	var list;
	if(arr.length > 0){
		list = {};
		list.value = arr.shift();
		list.rest = arrayToList(arr);
	}else{
		list = null;
	}
	return list;
}

function listToArray(list){
	var arr = [];
	for(var node = list; node !== null; node = node.rest){
		arr.push(node.value);
	}
	return arr;
}

function prepend(elem, list){
	var newList = {};
	newList.value = elem;
	newList.rest = list;
	return newList;
}

function nth(n, list){
	if(n === 0){
		return list ? list.value : undefined;
	}else{
		return nth(n-1, list.rest);
	}
}

console.log(nth(1, arrayToList([1,2,3])));