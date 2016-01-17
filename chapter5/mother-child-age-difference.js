//Using the example data set from this chapter, compute the average age difference between mothers and children 
//(the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
//Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, 
//which makes it easy to find a person’s object from their name, might be useful here.

// age of mother when child born = child born - mother born;

function average(array){ 
	function plus(a, b){ 
		return a + b; 
	} 
	return array.reduce(plus) / array.length; 
}

var byName = {}; 
ancestry.forEach(function(person){ byName[person.name] = person; });

var ageDiff = ancestry.map(function(child){ 
	if(byName[child.mother]){
		return child.born - byName[child.mother]['born'];
	}
}).filter(function(age){ return age !== undefined });
console.log(average(ageDiff));