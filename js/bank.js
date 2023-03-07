document.getElementById("btn-apply").addEventListener("click", function () {
  // step 1:get the number from text

  const priceStringValue = document.getElementById("price");
  const priceInnerText = priceStringValue.innerText;
  const priceConvertValue = parseFloat(priceInnerText);
  console.log(priceConvertValue);

  // step 2:get the discount code

  const discountStringValue = document.getElementById("discount-field");
  const discountValue = discountStringValue.value;
  discountStringValue.value='';

  // const discountConvertNumber=parseFloat(discountValue);
  // console.log(typeof discountValue);
if(discountValue=='' ||  discountValue!='string')
{
  alert("Please enter valid Valid Code,Not Use number")

}
  // Step 3: Discount find
  else if (discountValue == "DISC30") {
    const afterMultiplyValueIs = 0.3 * priceConvertValue;
    const discountValueIS = priceConvertValue - afterMultiplyValueIs;
    console.log(discountValueIS);

    // Step 4: set the discount value in the text field
    const payField = document.getElementById("pay-tk");
    payFieldInnerText = payField.innerText;
    payField.innerText = discountValueIS;
  } else {
    alert('Next time please use to discount code to save money')
    const payField = document.getElementById("pay-tk");
    payField.innerText = priceConvertValue;
  }
});

