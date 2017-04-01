$(document).ready(function(){



	var storage = chrome.storage.local;
	
	storage.get(null, function(items){

	    var words = Object.values(items);
	    console.log(words);

	    storage.get(null, function(data){
	    	var day = Object.keys(data);

	    	for (i = 0;i<day.length; i++){
	    		$("body").append("<b>"+day[i]+"</b><br><br>");
	    		$("body").append(words[i]+'<br>');
	    	}

	    });





	});

});