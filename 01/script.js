let f1 = document.querySelector(".f1")

function one() {
	console.log("work")
}

f1.onclick = () => {
	console.log("Hello")
}


function two() {
	console.log("work 2222")
	return 54;
}

two()

console.log(1 + two())

let a = 9
let b = 10

function mult() {
	console.log(a * b)
	return a * b
}

mult()
let c1 = mult()
let c2 = 10 * mult()
console.log(c1, c2)

function mult2(x = 50, y = 50) {
	return x * y
}

console.log(mult2(1, 2))

document.querySelector(".f2").onclick = () => {
	console.log("+++")
}




