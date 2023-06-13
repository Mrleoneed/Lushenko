document.querySelector('.one').onclick = function (e) {

	console.log('click');
}

document.querySelector('.two').onclick = function () {
	console.log('click2');
}

document.querySelector('.two').oncontextmenu = () => {
	console.log('right button')
	return false
}

// let w = 75;
// document.querySelector('.three').onmousemove = () => {
// 	document.querySelector('.three').style.width = w + 'px'
// 	w++
//
// }

document.querySelector('.three').onmouseenter = () => {
	document.querySelector('.three').style.background = 'red'
}

document.querySelector('.three').onmouseleave = () => {
	document.querySelector('.three').style.background = 'white'
}

document.querySelector('.three').onmousedown = () => {
	document.querySelector('.three').style.background = 'pink'
}

document.querySelector('.three').onmouseup = () => {
	document.querySelector('.three').style.background = 'yellow'
}
p = 10
document.querySelector('button').onclick = () => {
	p = p + 10;
	document.querySelector("progress").value = p
}