chrome.storage.local.get('size',function(data){
  console.log(data.size);
  var mysize = data.size;
  function addToCart() {
    var sizesList = document.getElementById("size");
    for (var i = 0; i < sizesList.length; i++){
      console.log(sizesList.options[i].text);
      if(sizesList.options[i].text == mysize) {
        //console.log("we found the size " + sizesList.options[i].text);
        sizesList.selectedIndex = i;
      }
    }

    document.getElementById("add-remove-buttons").childNodes[0].click();
    setTimeout(function(){document.getElementsByClassName("button checkout")[0].click();}, 180);

  }

  addToCart();
});