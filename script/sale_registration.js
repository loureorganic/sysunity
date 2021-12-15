import databaseuser from "./database/databaseUser.js";
import databasecreatesale from "./database/databaseCreate-sale.js";
const dados = new databaseuser();
dados.objectuser();

const salesBackEnd = new databasecreatesale();
salesBackEnd.optionProducts();

document.getElementById("public").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "none";
})

document.getElementById("order").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "flex";
})

document.getElementById('productLabel').addEventListener("click", function() {
	let data = document.getElementById('productItems').value;
	salesBackEnd.typeSelect(data);
})

document.getElementById('typeLabel').addEventListener('click', function(){
	salesBackEnd.bestProduction(document.getElementById('productItems').value, document.getElementById('productType').value)
})

// document.getElementById("order2").addEventListener("click", function() {
// 	document.getElementById('boxdiscount-general').style.display = "flex";
// 	document.getElementById('boxpayment').style.display = "flex";
// })

// document.getElementById("public2").addEventListener("click", function() {
// 	document.getElementById('boxdiscount-general').style.display = "none";
// 	document.getElementById('boxpayment').style.display = "flex";
// })


let authUser = localStorage.getItem("id");
const firebaseref = firebase.database().ref("user");
firebaseref.once('value').then(function (snapshot) {

	snapshot.forEach(element => {
		if(element.key === authUser)
		{
		  document.getElementById('seller').value = element.val().firstname + ' ' + element.val().lastname;
		}
	});
});
	

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	let sale = {
		seller: document.getElementById('seller').value,
		date: document.getElementById('date').value,
		total_general: document.getElementById('total-general').value,
		product: document.getElementById('product').value,
		type: document.getElementById('type').value,
		quantity: document.getElementById('quantity').value,
		price: document.getElementById('price').value,
		total: document.getElementById('total').value,
		total_value: document.getElementById('total-value').value,
		payment_method: document.getElementById('payment_method').value,
		discount: document.getElementById('discount').value,
		total_paid: document.getElementById('total-paid').value
    }

});