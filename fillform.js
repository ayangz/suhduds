chrome.storage.local.get([
        'name',
        'email',
        'tel',
        'address',
        'zip',
        'city',
        'state',
        'card',
        'number',
        'exp_month',
        'exp_year',
        'cvv'
    ], 
    function(data) {
        function fillForm() {
          document.getElementById("order_billing_name").value = data.name;
          document.getElementById("order_email").value = data.email;
          document.getElementById("order_tel").value = data.tel;
          document.getElementById("bo").value = data.address;
          document.getElementById("order_billing_city").value = data.city;
          document.getElementById("order_billing_state").value = data.state;
          document.getElementById("order_billing_zip").value = data.zip;
          document.getElementById("cnb").value = data.number;
          document.getElementById("credit_card_month").value = data.exp_month;
          document.getElementById("credit_card_year").value = data.exp_year;
          document.getElementById("vval") = data.cvv;
          document.getElementsByClassName("iCheck-helper")[1].click();
        }

        fillForm();
        chrome.storage.local.clear();
    }
);
