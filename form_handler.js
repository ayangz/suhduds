document.getElementById("submit").onclick = function() {
	var category = document.getElementById("category").value;
	var img_code = document.getElementById("img_code").value;
	var size = document.getElementById("size").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var address = document.getElementById("address").value;
	var zip = document.getElementById("zip").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var card = document.getElementById("card").value;
	var number = document.getElementById("number").value;
	var exp_month = document.getElementById("exp_month").value;
	var exp_year = document.getElementById("exp_year").value;

	chrome.storage.local.set({
		'category': category,
		'img_code': img_code,
		'size': size,
		'name': name,
		'email': email,
		'tel': tel,
		'address': address,
		'zip': zip,
		'city': city,
		'state': state,
		'card': card,
		'number': number,
		'exp_month': exp_month,
		'exp_year': exp_year,
		'cvv': cvv
		}, function(){
	});

	var link = "http://www.supremenewyork.com/shop/all/" + category;

	chrome.tabs.update({url: link});
}