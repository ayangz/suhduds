	document.getElementById("codeget").onclick = function() {
		var category = "";
		chrome.storage.sync.get('category', function(data){
			alert(data.category);
			category = data.category;
		});
		console.log(category);

		var link = "http://www.supremenewyork.com/shop/all/" + category;

		//chrome.tabs.update({url: link});
	}