var currency_input = document.getElementById('currency-input');
var currency_output = document.getElementById('currency-output');
function convertCurrency() {
	 currency_output.innerHTML = parseFloat(currency_input.value) * 1.3;
}
