
	document.getElementById("codeget").onclick = function() {

		chrome.storage.sync.get('img_code', function(data){
			alert(data.img_code);
		});
	}
