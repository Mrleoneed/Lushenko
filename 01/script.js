let a = 5;
a = a * 2;
try {
	document.querySelector('.test').innerHTML = a;
} catch (err) {
	console.log(err)
} finally {
	console.log("Very good")
}
console.log(a)
t1()

function t1() {
	console.log("Hello")
}

