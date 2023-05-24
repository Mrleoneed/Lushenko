// let a = 5
//
// if (a != 9) {
// 	console.log("Yes")
// } else {
// 	console.log("No")
// }


const button = document.querySelector("button");
const input = document.querySelector(".age");

button.onclick = () => {
	let num = +input.value;
	if (num >= 16 && num <= 60) {
		console.log("Welcome")
	} else if (num > 60) {
		console.log("Older")
	} else {
		console.log("Bye")
	}
	switch (num) {
		case 15:
			console.log("потерпи")
			break;
		case 18:
			console.log("можно пить алкоголь")
			break;
		default:
			console.log("Okey")
	}
}

