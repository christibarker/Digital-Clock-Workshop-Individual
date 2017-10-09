

function displayTime() {
	
	var d= new Date();
	var h= d.getHours();
	var m= d.getMinutes();
	var s= d.getSeconds();
	var color = '#' + h + m + s;
	

	if(s < 10) s = '0' + s;
	if(m < 10) m = '0' + m;
	if(h < 10) h = '0' + h;

	
	document.body.style.background = color;
	document.getElementById('clock').innerText = color;	

}

setInterval (displayTime, 1000);

// displayTime();

// function displayTime()
// {
//     x = 1;  // x = seconds
//  	var d = new Date()
//  	var h = d.getHours();
//  	var m = d.getMinutes();
//  	var s = d.getSeconds();
 	
//  	if (h<=9) {h = '0'+h};
//  	if (m<=9) {m = '0'+m};
// 	if (s<=9) {s = '0'+s};
	
//  	// var	color = '#'+h+m+s;
 	
//   //   ("div.background").css("center", color );
//   //   ("p#hex").text(color);
     
//     setInterval(refreshData, x*1000);
// }
  
// refreshData(); // execute function