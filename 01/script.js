const one = document.querySelector(".one");

one.style.width = '150px'

one.classList.add('two', 'three')
one.classList.remove('three')


const toggle = document.querySelector(".toggle");

toggle.onclick = function () {
	this.classList.toggle('three')
}

// атрибуты

console.log(one.getAttribute('data'))
one.setAttribute('data-num', 6);


let gas = document.querySelectorAll(".gas");
for (let i = 0; i < gas.length; i++) {
	gas[i].onclick = function () {
		let gallons = document.querySelector(".gallons").value
		let price = this.getAttribute("data")
		console.log(gallons * price)
	}
}

let a = document.createElement('div')
a.innerHTML = "Hello"