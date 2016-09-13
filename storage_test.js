	document.getElementById("codeget").onclick = function() {
		chrome.storage.local.clear;
		alert("Data cleared!");
	}