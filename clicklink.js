chrome.storage.sync.get('img_code', function(data){

	function findLink(link) {
	var image = "img[alt='" + data.img_code+ "']";
	var pic = document.getElementById("container").querySelector(image);
	console.log(data.img_code);
	 console.log(typeof pic);
	  if(pic != null){
	  	var link = "http://www.supremenewyork.com" + pic.parentNode.getAttribute("href");
	  	console.log(link);
	  	location.replace(link);
	  } else {
	  	setTimeout(function(){ location.reload()}, 800);
	  }
	}

	findLink();
});


