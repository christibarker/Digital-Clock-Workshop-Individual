
// create digital_clock

function displayTime() {

	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

function displayTime() {
	
	var d= new Date();
	var h= d.getHours();
	var m= d.getMinutes();
	var s= d.getSeconds();
	var color = '#' + h + m + s;

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
	
	document.body.style.background = color;
	document.getElementById('clock').innerText = color;	
}

setInterval (displayTime, 1000);
