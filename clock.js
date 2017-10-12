function displayTime() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if(s < 10) s = '0' + s;
	if(m < 10) m = '0' + m;
	if(h < 10) h = '0' + h;

	var time = h + ':' + m + ':' + s;



document.getElementById('clock').innerHTML = time;

	if (h > 24) { 
		document.getElementById('text').innerText = 'Good Morning';
	}

	else if (h < 24) {
		document.getElementById('text').innerText = 'Afternoon';
	}

}

displayTime();
setInterval (displayTime, 1000);

function displayImg() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if(s < 10) s = '0' + s;
	if(m < 10) m = '0' + m;
	if(h < 10) h = '0' + h;

	if(date.getHours() < 8) {
		var imgOne = document.getElementById('bayuo');
	}

	else(date.getHours() < 12) {
		var imgTwo = document.getElementById('full_moon');
	}
	else(date.getHours() < 16) {
		var imgThree = document.getElementById('paris');
	}

	else(date.getHours() < 23) {
		var imgTwo = document.getElementById('trees');
	}
}
displayImg();
setInterval (displayImg, 6000);