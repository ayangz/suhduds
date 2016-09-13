chrome.storage.sync.get(['keyword', 'color'], function(data){

	function findLink(link) {
	var image = "img[alt='" + data.img_code+ "']";
	var items = document.getElementsByClassName("inner-article");

	for(var i = 0; i < items.length; i++){
		if(items[i].childNodes[1].text == data.keyword){
			if(items[i].childNodes[2].text == data.color){
				var link = "http://www.supremenewyork.com" + items[i].childNodes[0].getAttribute("href");
				location.replace(link);
			}
		}
	}



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


