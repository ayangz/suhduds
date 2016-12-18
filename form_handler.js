document.getElementById("link").onclick = function() {
	chrome.tabs.create({url: "https://twitter.com/Coppinbots"});
}

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
	var cvv = document.getElementById("cvv").value;
	var exp_month = document.getElementById("exp_month").value;
	var exp_year = document.getElementById("exp_year").value;

	chrome.storage.sync.set({
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
		'cvv' : cvv,
		'exp_month': exp_month,
		'exp_year': exp_year,
		}, function(){
			var link = "http://www.supremenewyork.com/shop/all/" + category;
			chrome.tabs.update({url: link});
	});
}

document.getElementById("info").onclick = function() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var address = document.getElementById("address").value;
	var zip = document.getElementById("zip").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var card = document.getElementById("card").value;
	var number = document.getElementById("number").value;
	var cvv = document.getElementById("cvv").value;
	var exp_month = document.getElementById("exp_month").value;
	var exp_year = document.getElementById("exp_year").value;

	chrome.storage.sync.set({
		'name': name,
		'email': email,
		'tel': tel,
		'address': address,
		'zip': zip,
		'city': city,
		'state': state,
		'card': card,
		'number': number,
		'cvv' : cvv,
		'exp_month': exp_month,
		'exp_year': exp_year,
		}, function(){
			alert("info clicked!");
	});
	chrome.tabs.create({url: "test.html"});	
}

document.getElementById("item").onclick = function() {
	var category = document.getElementById("category").value;
	var img_code = document.getElementById("img_code").value;
	var size = document.getElementById("size").value;

	chrome.storage.sync.set({
		'category': category,
		'img_code': img_code,
		'size': size,
		}, function(){
			var link = "http://www.supremenewyork.com/shop/all/" + category;
			chrome.tabs.update({url: link});
	});
}