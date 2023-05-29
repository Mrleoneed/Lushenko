let a = [1, 2, 3, 4]
console.log(a)

let t = a[0] // 1
a[0] = a[a.length - 1]
a[a.length - 1] = t
console.log(a)

let out = ''
for (let i = 0; i < a.length; i++) {
	if (a[i] % 2 === 0) {
		out += a[i] + ' '
	}
}
document.querySelector('.out-1').innerHTML = out


let b = [4, 2, 5, 6, 7, 8, 44, 66, 77, 88, 9, 200, 1]
let max = b[0]; //4

for (let i = 0; i < b.length; i++) {
	if (b[i] > max) {
		max = b[i]
	}

}
console.log(max)


// sum

let sum = 0;
for (let i = 0; i < b.length; i++) {
	sum = sum + b[i]
}