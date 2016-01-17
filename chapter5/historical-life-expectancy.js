//Compute and output the average age of the people in the ancestry data set per century. A person is assigned 
//to a century by taking their year of death, dividing it by 100, and rounding it up, as in 
//Math.ceil( person.died / 100).

//For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments
// an array and a function that computes the group for an element in the array and returns an object that maps 
//group names to arrays of group numbers.

//During the grouping process, keep an object that associates century names (numbers) with arrays of either person
//objects or ages. Since we do not know in advance what categories we will find, we’ll have to create them on the 
//fly. For each person, after computing their century, we test whether that century was already known. If not, add 
//an array for it. Then add the person (or age) to the array for the proper century.

function average(array){ 
	function plus(a, b){ 
		return a + b; 
	} 
	return array.reduce(plus) / array.length; 
}

var obj = {};

var people = ancestry.map(function(person){
	return {
		age: person.died - person.born,
		century: Math.ceil(person.died/100)
	};
})

people.forEach(function(person){
	if(!obj[person.century]){
		obj[person.century] = [];
		obj[person.century].push(person.age);
	}else{
		obj[person.century].push(person.age);
	}
});

for(var prop in obj){
	obj[prop] = average(obj[prop]);
}

console.log(obj);