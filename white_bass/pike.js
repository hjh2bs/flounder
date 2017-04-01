

document.addEventListener('DOMContentLoaded', function() {

	$('#logs').click(function(){

		chrome.tabs.create({'url': chrome.extension.getURL('index.html')});

	});

	$('#clear').click(function(){

		var storage = chrome.storage.local;
		storage.clear();

	});

});



