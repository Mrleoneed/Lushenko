const a = {
	a: 5,
	b: "Hello",
	z2: "Hi",
}
a.yyyy = 555
a.b = 'uuu'
delete a.a
console.log(a)
console.log(a.z2)


a.b = 'uuu'
delete a.a
// document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a) {
	out += key + '---' + a[key] + '<br>'
}
document.querySelector('.out').innerHTML = out