setInterval(function(){
	for(var i=0;i<10;i++){
		(function(){
			var startId = i+'00';
			$("div[id^="+startId+"]").remove()
		})(i)
	}

	while($('#1')[0] != null){
		$('#1').remove()
	}
},1000)

	
