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
})
document.getElementById('btn_confirmar_payment').addEventListener('click', function(){

	if(document.getElementById('total-value0').value == '') {

		document.getElementById('total-value0').style.borderColor = "red";
		document.getElementById('alerta_valortotal').style.display = 'flex';

	} else {

		document.getElementById('total-value0').style.borderColor = "blue";
		document.getElementById('alerta_valortotal').style.display = 'none';

	}
	if (document.getElementById('payment_method0').value == '' || document.getElementById('payment_method0').value == null){
		
		document.getElementById('payment_method0').style.borderColor = "red";
		document.getElementById('alerta_formapagamento').style.display = 'flex';

	}
	else {

		document.getElementById('payment_method0').style.borderColor = "blue";
		document.getElementById('alerta_formapagamento').style.display = 'none';
		
	}
	if (document.getElementById('total-paid').value == ''){
		
		document.getElementById('total-paid').style.borderColor = "red";
		document.getElementById('total-paid-alerta').style.display = 'flex';

	}
	else {

		document.getElementById('total-paid').style.borderColor = "blue";
		document.getElementById('total-paid-alerta').style.display = 'none';
		
	}
	if (document.getElementById('totalpendente').value == ''){
		
		document.getElementById('totalpendente').style.borderColor = "red";
		document.getElementById('totalpendente-alerta').style.display = 'flex';

	}
	else {

		document.getElementById('totalpendente').style.borderColor = "blue";
		document.getElementById('totalpendente-alerta').style.display = 'none';
		
	}
	if(document.getElementById('total-value0').value !== '' && document.getElementById('payment_method0').value == '' && document.getElementById('total-paid').value !== '' && document.getElementById('totalpendente').value !== '') {

		salesBackEnd.valueFinal(idPayment);

	}
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
})


document.getElementById('btn_confirmar').addEventListener('click', function(){

	if(publics == true) {

		if(document.getElementById('total-general-order').value == '') {

            document.getElementById('total-general-order').style.borderColor = "red";
            document.getElementById('alerta_totalgeral').style.display = 'flex';

        } else {

            document.getElementById('total-general-order').style.borderColor = "blue";
            document.getElementById('alerta_totalgeral').style.display = 'none';

        }
		if(document.getElementById('date').value == '') {

            document.getElementById('date').style.borderColor = "red";
            document.getElementById('alerta_data').style.display = 'flex';

        } else {

            document.getElementById('date').style.borderColor = "blue";
            document.getElementById('alerta_data').style.display = 'none';

        }
		if(document.getElementById('total-general-order').value !== '' && document.getElementById('date').value !== '') {
	
			salesBackEnd.valueGeneral(id);
	
		}
	}

	if(order == true) {

		if(document.getElementById('date').value == '') {

            document.getElementById('date').style.borderColor = "red";
            document.getElementById('alerta_data').style.display = 'flex';

        } else {

            document.getElementById('date').style.borderColor = "blue";
            document.getElementById('alerta_data').style.display = 'none';

        }
        if(document.getElementById('quantity0').value == '') {

            document.getElementById('quantity0').style.borderColor = "red";
            document.getElementById('quantity-0').style.display = 'flex';

        } else {

            document.getElementById('quantity0').style.borderColor = "blue";
            document.getElementById('quantity-0').style.display = 'none';

        }
        if(document.getElementById('0').value == '') {

            document.getElementById('0').style.borderColor = "red";
            document.getElementById('produto-00').style.display = 'flex';

        } else {

            document.getElementById('0').style.borderColor = "blue";
            document.getElementById('produto-00').style.display = 'none';

        }
        if(document.getElementById('type0').value == '') {

            document.getElementById('type0').style.borderColor = "red";
            document.getElementById('tipo-00').style.display = 'flex';

        } else {

            document.getElementById('type0').style.borderColor = "blue";
            document.getElementById('tipo-00').style.display = 'none';

        }
		if(document.getElementById('price0').value == '') {

            document.getElementById('price0').style.borderColor = "red";
            document.getElementById('alerta_precounidade').style.display = 'flex';

        } else {

            document.getElementById('price0').style.borderColor = "blue";
            document.getElementById('alerta_precounidade').style.display = 'none';

        }
		if(document.getElementById('pricetotal0').value == '') {

            document.getElementById('pricetotal0').style.borderColor = "red";
            document.getElementById('alerta_total').style.display = 'flex';

        } else {

            document.getElementById('pricetotal0').style.borderColor = "blue";
            document.getElementById('alerta_total').style.display = 'none';

        }
		if(document.getElementById('date').value !== '' && document.getElementById('quantity0').value !== '' && document.getElementById('0').value && document.getElementById('type0').value !== '' && document.getElementById('price0').value !== '' && document.getElementById('pricetotal0').value !== '') {
	
			salesBackEnd.valueGeneral(id);
	
		}
	}
	
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
	console.log({id})
	if(order){
		salesBackEnd.createSaleOrder(id , idPayment);
	}else if(publics){
		salesBackEnd.createSalePublic(idPayment);
	}

});