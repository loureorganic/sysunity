import databaseuser from "./database/databaseUser.js";
import databasecreatesale from "./database/databaseCreate-sale.js";
const dados = new databaseuser();
dados.objectuser();

let id = 0;
let idPayment = 0;
var myArray = [];
let order;
let publics;
var activedButton = false;
const salesBackEnd = new databasecreatesale();
salesBackEnd.optionProductsNew(id)
salesBackEnd.paymentWay(idPayment);

document.getElementById('payment-tab').disabled = true;

document.getElementById('container').style.display = 'none';

document.getElementById('buttonAddPayment').addEventListener('click', function(){
	idPayment++;
salesBackEnd.paymentWay(idPayment);
})
document.getElementById("public").addEventListener("click", function() {
	publics = true;
	activedButton = true;
	document.getElementById('payment-tab').disabled = true;
	order = false;
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "none";
	document.getElementById('productsTitle').style.display = "none";
	document.getElementById('buttonsBar').style.display = "none";
	document.getElementById('totalGeneralOrder').style.display = "flex";
	document.getElementById('totalGeneralOne').style.display = "none";
	document.getElementById('labelDateDelivery').style.display = "none";
})
document.getElementById('btn_confirmar_payment').addEventListener('click', function(){
		salesBackEnd.valueFinal(idPayment);
})
document.getElementById("order").addEventListener("click", function() {
order = true; 
activedButton = true;
publics = false;

	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "flex";
	document.getElementById('productsTitle').style.display = "flex";
	document.getElementById('buttonsBar').style.display = "flex";
	document.getElementById('totalGeneralOrder').style.display = "none";
	document.getElementById('totalGeneralOne').style.display = "flex";
	document.getElementById('labelDateDelivery').style.display = 'flex';
})


document.getElementById('btn_confirmar').addEventListener('click', function(){

			salesBackEnd.valueGeneral(id);
		
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

document.getElementById('buttonAdd').addEventListener("click", function(){
	id++; 
	salesBackEnd.optionProductsNew(id);
})

document.getElementById('buttonDel').addEventListener("click", function(){
	salesBackEnd.optionProductsRemove(id);
	id--;
})

document.getElementById('buttonDelPayment').addEventListener("click", function(){
	salesBackEnd.removePaymentWay(idPayment);
	idPayment--;
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
	// console.log({id})
	if(order){
		salesBackEnd.createSaleOrder(id , idPayment);
	}else if(publics){
		salesBackEnd.createSalePublic(idPayment);
	}

});

// Função para alterar as abas

let paymentAba = document.querySelector("#payment-tab");
let productAba = document.querySelector("#product-tab");
let paymentContent = document.querySelector("#payment");
let productContent = document.querySelector("#product");



function handleArrowNext(){

	paymentAba.className = "nav-link active";
	paymentContent.className = "tab-pane fade active show";
	
	productAba.className = "nav-link";
	productContent.className = "tab-pane fade";

}
function handleArrowPrevious(){
	
	paymentAba.className = "nav-link";
	paymentContent.className = "tab-pane fade";
	
	productAba.className = "nav-link active";
	productContent.className = "tab-pane fade active show";

}

document.querySelector("#btn_setinha_1").addEventListener("click", handleArrowNext);
document.querySelector("#btn_setinha_2").addEventListener("click", handleArrowPrevious);