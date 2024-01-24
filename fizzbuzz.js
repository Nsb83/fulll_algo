function evaluateNumber(n) {
	let result = ''
	if (n % 3 === 0) result = 'Fizz'
	if (n % 5 === 0) result += 'Buzz'
	return result || n.toString()
}
function fizzbuzz(maxNumber) {
	const results = []
	for (let i = 1; i <= maxNumber; i++) {
		results.push(evaluateNumber(i))
	}
	return results
}
function run() {
	let maxNumber = process.argv[2] ? parseInt(process.argv[2]) : 20
	console.log('Fizzbuzz: ')
	console.dir(fizzbuzz(maxNumber), {'maxArrayLength': null})
}

run()
