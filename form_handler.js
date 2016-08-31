
	document.getElementById("submit").onclick = function() {
		var category = document.getElementById("category");
		var img_code = document.getElementById("img_code");
		var size = document.getElementById("size");
		alert("suh");

		chrome.storage.sync.set({'category': category, 'img_code': img_code, 'size': size}, function(){
			alert("fuck yeah");
		});
	}
