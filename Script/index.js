function $(id) {
  return document.querySelector(id);
}

function isRequired(value) {
  return value.length === 0;
}

function isNumber(number) {
  return /^\d$/.test(number);
}

function handleOnload() {
  var customerType = $("#customer-type");
  var subtotal = $("#subtotal");
  var percent = $("#percent");
  var discount = $("#discount");
  var total = $("#total");
  var subtotalError = $("#subtotal-error");

  var discountPercent;
  var calculateButton = $("#Calculate");

  function calculateDiscount() {
    switch (customerType.value) {
      case "vip":
        percent.value = "20.00";
        discountPercent = 0.2;
        break;
      case "subvip":
        percent.value = "10.00";
        discountPercent = 0.1;
        break;
      case "normal":
        percent.value = "5.00";
        discountPercent = 0.05;
        break;
      default:
        percent.value = "0.00%";
        discountPercent = 0;
    }
  }

  function calculateTotal() {
    if (!isRequired(subtotal.value) && !isRequired(customerType.value)) {
      var subtotalValue = parseFloat(subtotal.value);
      var discountAmount = subtotalValue * discountPercent;
      discount.value = discountAmount;
      total.value = subtotalValue - discountAmount;
    }
  }

  customerType.addEventListener("change", calculateDiscount);
  calculateButton.addEventListener("click", calculateTotal);
}

window.onload = handleOnload;
