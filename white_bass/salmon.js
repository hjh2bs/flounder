
$(document).ready(function(){
	var str1 = "";
	var storage = chrome.storage.local;
	var d = new Date();
	var day = d.getDate();
	var month_num = d.getMonth();

	var calendar = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var month = calendar[month_num];
	//console.log(month);
	var date = month +'-' + day;

	//console.log(date);
	//storage.clear();


	storage.get(null, function(value){

		var content = Object.keys(value);
		//console.log('asldkfjlwejrk');
		//console.log(content);
		for(var x in content){
			//console.log(content[x]);
			var y = content[x].indexOf("-");
			var number = content[x].substring(y+1);

			if(day - number >=3 ){
				storage.remove(content[x]);
			}
			if(day==1 & number <= 29){
				storage.remove(content[x]);
			}

			if(day==2 & number <= 30){
				storage.remove(content[x]);
			}
			if(day==3 & number <=31){
				storage.remove(content[x]);
			}
			//console.log(number);

		}
	});

	storage.get([date], function(value){
		var content = Object.values(value);
		//console.log('retrieved');
		if(content[0] != undefined){
			//console.log('content exists');
			//console.log(content[0]);
		}
		else{
			//console.log('content nonexistent');
			storage.set({[date]: ''}, function(){
	    		//console.log('saved');
	    		str1 = "";
	    	});
		}			
	});


	//New logging function

	document.onkeypress = function(e) {
		var letter = e.key;

		if (letter == 'Enter'){
			if(str1 != ''){
	    	//storage.set(
	    	//	{[str1]: [str1, month, day]}, function(){
	    	//	console.log('saved');
	    	//	str1 = "";
	    	//});

		    	storage.get([date], function(items){
		    		var words = Object.values(items);
		    		var numbers = Object.keys(items);
		    		//console.log('Get Beginning');
		    		//console.log(numbers);
		    		//console.log(words);
	    			//console.log(str1);
		    		//words = words + '<br>' + str1;
		    		var str2 = words[0];
	    			str2 = str2.concat(str1);
	    			str2 = str2.concat('<br>');
		    		//console.log(str2);
		    		storage.set({[date]: str2}, function(){
	    				//console.log('saved');
	    				str1 = "";
	    			});
	    		});
	    	}	
	    }

	    else{
			str1 = str1.concat(letter);
		}


		$(window).change(function(){
	    	storage.get([date], function(items){
	    		var words = Object.values(items);
	    		//console.log(words);
	    		var str2 = words[0];
	    		str2 = str2.concat(str1);
	    		str2 = str2.concat('<br>');
	    		storage.set({[date]: str2}, function(){
	    			//console.log('saved');
	    			str1 = "";
	    		})
	    	});
		});
	}




/*Old logging function
	document.onkeypress = function(e) {
	    var letter = e.key;	    
	    //var code = e.keyCode;
	    //console.log(code);

	    if (letter == 'Enter'){

	    	storage.set(
	    		{[str1]: [str1, month, day]}, function(){
	    		console.log('saved');
	    		str1 = "";
	    	});

	    	storage.get(null, function(items){
	    		var words = Object.keys(items);
	    		console.log(words);
	    	});

	    }

	    else{
			str1 = str1.concat(letter);
		}


		$(window).change(function(){

			storage.set(
	    		{[str1]: [str1, month, day]}, function(){
	    		console.log('saved');
	    		str1 = "";
	    	});

		});


		//console.log(str1);
	}

*/



/*
	storage.get('#!@today*&#', function(value){
		//var num1 = Object.keys(value)
		var num = Object.values(value);
		if (num != day){
			console.log('#!@today*&# '+ num);
			
			storage.set(
			{'#!@today*&#': day}, function(){
				console.log('new date set');
			});

			storage.get(null, function(items){

	    		var words = Object.values(items);
	    		 
	    		console.log(words);

	    		for(var x in words){

	    			//console.log(words[x][0]+' '+words[x][1]);

	    			if (Math.abs(words[x][2] - day) > 3){
	    				console.log('deleted ' + words[x][0]);
	    				storage.remove(words[x][0]);
	    			}
	    		}
	    	});
		}
	});
*/


});


/*	    chrome.storage.local.get('log', function(value){
	    	console.log(value);
	    });
	    
	    chrome.storage.local.getBytesInUse('log',function(size){
	    	console.log(size);
	    });

	    */