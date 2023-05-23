let inputIn = document.querySelector(".inputIn");
let button = document.querySelector("button");
let div = document.querySelector(".out")

button.onclick = () => {
	let b = +inputIn.value
	div.innerHTML = b;
	inputIn.value = ""
}
