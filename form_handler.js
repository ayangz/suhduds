document.getElementById("submit").onclick = function() {
	var category = document.getElementById("category").value;
	var img_code = document.getElementById("img_code").value;
	var size = document.getElementById("size").value;

	chrome.storage.sync.set({'category': category, 'img_code': img_code, 'size': size}, function(){
		alert(category + img_code + size);
	});
}