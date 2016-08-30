var size = "Large";
function addToCart() {
  var sizesList = document.getElementById("size");
  for (var i = 0; i < sizesList.length; i++){
    console.log(sizesList.options[i].text);
    if(sizesList.options[i].text == size) {
      //console.log("we found the size " + sizesList.options[i].text);
      sizesList.selectedIndex = i;
    }
  }
  /*setTimeout(function(){*/document.getElementById("add-remove-buttons").childNodes[0].click();//}, 0);
  setTimeout(function(){document.getElementsByClassName("button checkout")[0].click();}, 200);
}

addToCart();

//setTimeout(function(){addToCart();}, 1000);