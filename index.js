
// create digital_clock

function displayTime() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if(s < 10) s = '0' + s;
	if(m < 10) m = '0' + m;
	if(h < 10) h = '0' + h;

	var time = h + ':' + m + ':' + s;


document.getElementById('digital_clock').innerHTML = time;

	if (h > 24) { 
		document.getElementById('text').innerText = 'Good Morning';
	}

	else if (h < 24) {
		document.getElementById('text').innerText = 'Afternoon';
	}

}

displayTime();
setInterval (displayTime, 1000);

function hex_clock() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if(s < 10) s = '0' + s;
	if(m < 10) m = '0' + m;
	if(h < 10) h = '0' + h;

	var color = '#' + h + m + s;

	document.body.style.background = color;
	document.getElementById('clock').innerText = color;	

}

setInterval (hex_clock, 1000);
