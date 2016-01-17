// Create a 8x8 grid chess board with # and spaces. If i is odd, # starts first.
// If i is even, space starts first. 

var size = 8;
var str = '';
for(var i=0; i<size; i++){
	for(var j=0; j<size; j++){
		if((i+j)%2 === 0){
			str += ' ';
		}else{
			str += '#';
		}
	}
	str += '\n';
}
console.log(str);