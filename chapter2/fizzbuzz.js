// Print number from 1 to 100. If the number is divisible by 3 (num % 3 === 0) print fizz
// if divisible by 5 print buzz. if divisible by both print fizzbuzz

for(var i=1; i<=100; i++){
	var word = i%3 === 0 && i%5 === 0 ? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i;
	console.log(word);
}