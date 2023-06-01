fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.894444&lon=30.264168&appid=a6adee9c87947a50b972a53cc188e3e5&lang=ru')
	.then(function (resp) {
		return resp.json()
	})
	.then(function (data) {
		console.log(data);
		document.querySelector('.package-name').textContent = data.name;
		document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
		document.querySelector('.disclaimer').textContent = data.weather[0]['description'];

		document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	})
	.catch(function () {
		// catch any errors
	});