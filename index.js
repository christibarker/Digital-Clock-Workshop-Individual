
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

setInterval (displayTime, 1000);



// change pictures for digital_clock
// create array for images

// for (var i=0; i<imageclock.digits.length; i++){ //preload images
// 		preloadimages[i]=new Image()
// 		preloadimages[i].src=imageclock.digits[i]
// 	}
