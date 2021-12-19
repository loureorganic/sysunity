import databaseuser from "./database/databaseUser.js";
import databasecreatesale from "./database/databaseCreate-sale.js";
const dados = new databaseuser();
dados.objectuser();

let id = 0;
var myArray = [];
let order;
let publics;
const salesBackEnd = new databasecreatesale();
salesBackEnd.optionProductsNew(id)



document.getElementById('container').style.display = 'none';


document.getElementById("public").addEventListener("click", function() {
	publics = true;
	order = false;
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "none";
})

document.getElementById("order").addEventListener("click", function() {
order = true; 
publics = false;

	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "flex";
})


document.getElementById('btn_confirmar').addEventListener('click', function(){
	console.log({id})
	salesBackEnd.valueGeneral(id);
	console.log({order, publics});
})

document.getElementById('options').addEventListener('click', function(){
	if(order){
		document.getElementById('container').style.display = 'flex';
	}
	else if(publics){
		document.getElementById('container').style.display = 'flex';
	}
	else{
		document.getElementById('container').style.display = 'none';
	}
})

document.getElementById('payment-tab').addEventListener("click", () => {
	if(order){
	document.getElementById('boxdiscount-general').style.display = "flex";
	document.getElementById('boxpayment').style.display = "flex";
	}
	else if (publics){
	document.getElementById('boxdiscount-general').style.display = "none";
	document.getElementById('boxpayment').style.display = "flex";
	}
})
// document.getElementById("order2").addEventListener("click", function() {
// 	document.getElementById('boxdiscount-general').style.display = "flex";
// 	document.getElementById('boxpayment').style.display = "flex";
// })

// document.getElementById("public2").addEventListener("click", function() {
// 	document.getElementById('boxdiscount-general').style.display = "none";
// 	document.getElementById('boxpayment').style.display = "flex";
// })
document.getElementById('buttonAdd').addEventListener("click", function(){
	id++; 
	salesBackEnd.optionProductsNew(id);
})

document.getElementById('productLabel').addEventListener("click", function() {
	let productsSelected = document.querySelectorAll('.productItems');
	for (var i = 0; i < productsSelected.length; i++) {

		productsSelected[i].addEventListener("click", function(data) {
			salesBackEnd.typeSelect(document.getElementById(data.path[0].id).value, data.path[0].id, id)
		})
	}

	// console.log({myArray});
	// myArray.map((item)=> {
	// 	item.addEventListener('click', function(){
	// 		console.log(item);
	// 		//  salesBackEnd.typeSelect()
	// 	})
	// })
})

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