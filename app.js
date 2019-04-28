(function(){
	var clock = document.getElementById('clock');
	var hexColor  = document.getElementById('hexColor');


	function hexClock(){
		var time = new Date();
		var hours = (time.getHours() %12).toString();
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();


		if(hours.length < 2){
			hours = "0" + hours;
		}

		if(minutes.length < 2){
			minutes = "0" + minutes;
		}

		if(seconds.length < 2){
			seconds = "0" + seconds;
		}



		var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
		var colorStr = '#' + hours + minutes + seconds;
		clock.textContent = clockStr;
		hexColor.textContent = colorStr;


		document.body.style.background = colorStr;

	}
	hexClock();
	setInterval(hexClock, 1000)
})();