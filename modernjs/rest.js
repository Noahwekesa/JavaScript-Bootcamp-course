//using rest and spread operator to calculate the sum of a list
const mSUm = (...args) => {
	let sum = 0
	for(let i = 0; i<args.length; i++){
	sum += args[i]
	}
	console.log(sum);
}
mSUm(1, 2, 3, 4, 5)
