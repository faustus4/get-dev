$(document).ready(function(){
	var counter = 0

	var checkerLoading = setInterval(function(){
		
		var bodyText = $('body').children(":visible").text()
		var bodyImg = $('body').children(":visible").html()
		var patt = /\bloading/gi;
		var result = patt.test(bodyText);
		if(result || (bodyImg.indexOf('src="loading') > -1)){
			console.log('loading...')
		} else if(counter >= 5){
			console.log('done')
			stopChecker()
		}
		counter++
	}, 1000);

	function stopChecker(){
		clearInterval(checkerLoading);
	}
	
})