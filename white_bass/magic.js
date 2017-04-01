

/*
document.addEventListener("change", function(){

	var inputs, index;
	var longstring;

	inputs = document.getElementsByTagName('input');
	for (index = 0; index<inputs.length; ++index){
		var txt = inputs[index].value
		console.log(txt)
		longstring += txt
	}


	

});
*/

//TRY CONTENT SCRIPTING!!!
chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab){


	console.log("Activated!")
	console.log(changeInfo.status)
	console.log(changeInfo.url)



	elements = document.querySelectorAll("input[type='text']")



	var inputs, index;
	var longstring;

	inputs = document.getElementsByTagName('input');
	for (index = 0; index<inputs.length; ++index){
		var txt = inputs[index].value
		console.log(txt)
		longstring += txt
	}



});






