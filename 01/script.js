let a = [4, 5, 12, 2000, 1, 0, -2]


let b = a.map(item => item * 5)
console.log(b)

let c = a.filter((item, index) => {
	if (item % 2 === 0) {
		return true;
	}
})

console.log(c)
