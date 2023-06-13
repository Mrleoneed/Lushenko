let a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add("Leo");
a.delete("Leo")
console.log(a)
console.log(a.size)
console.log(a.has(2))
console.log(a.has('2'))

for (let item of a) {
	console.log(item)
}

let arr = [1, 2, 3, 4, 5, 6, "Hello", 'bye', 1, 2, 3]

let b = new Set(arr)
console.log(b)
console.log(b.size)

let bArr = Array.from(b)
console.log(bArr)