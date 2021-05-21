function calcTip() {
	var subtotalElem = document.getElementById("subtotal");
	var tipElem = document.getElementById("tip");
	var totalElem = document.getElementById("total");
	var subtotal = subtotalElem.value;
	var tip = tipElem.value;
	var total =  subtotal  * (1 + (tip * 0.01));
	totalElem.innerHTML = '$' + total;
    console.log(total);
}
