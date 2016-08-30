function fillForm() {
  document.getElementById("order_billing_name").value = "Anton Yang";
  document.getElementById("order_email").value = "antonya34@gmail.com";
  document.getElementById("order_tel").value = "7348838281";
  document.getElementById("bo").value = "2608 Cook Creek Ct.";
  document.getElementById("order_billing_city").value = "Ann Arbor";
  document.getElementById("order_billing_zip").value = "48103";
  document.getElementById("cnb").value = "1234567812345678";
  document.getElementById("credit_card_month").selectedIndex = 2;
  document.getElementById("credit_card_year").selectedIndex = 3;
  //document.getElementById("vval") = "1234";
  document.getElementsByClassName("iCheck-helper")[1].click();
}

fillForm();

