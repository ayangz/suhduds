	document.getElementById("codeget").onclick = function() {

		chrome.storage.sync.get('img_code', function(data){
			alert(data.img_code);
		});
		window.location.replace("http://www.supremenewyork.com/shop/all/" + chrome.storage.sync.get('category', function(){}));
	}