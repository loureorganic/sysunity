import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

console.log(document.getElementById('boxsale'));


document.getElementById("public").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxsale').style.display = "none";
})

document.getElementById("order").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "none";
	document.getElementById('boxsale').style.display = "flex";
})

document.getElementById("order2").addEventListener("click", function() {
	document.getElementById('boxdiscount-general').style.display = "flex";
	document.getElementById('boxpayment').style.display = "flex";
})

document.getElementById("public2").addEventListener("click", function() {
	document.getElementById('boxdiscount-general').style.display = "none";
	document.getElementById('boxpayment').style.display = "flex";
})

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	const dadosVenda = (document.getElementById("seller").value, document.getElementById('date').value,
	document.getElementById('total-general').value, document.getElementById('product').value,
	document.getElementById('type').value, document.getElementById('quantity').value,
	document.getElementById('price').value, document.getElementById('total').value,
	document.getElementById('total-value').value, document.getElementById('payment_method').value,
	document.getElementById('discount').value, document.getElementById('total-paid').value);
 
    
    let AlertaVendedor = document.getElementById("alerta_vendedor");
	let AlertaData = document.getElementById("alerta_data");
	let AlertaTotalGeral = document.getElementById("alerta_totalgeral");
	let AlertaProduto = document.getElementById("alerta_produto");
	let AlertaTipoProduto = document.getElementById("alerta_tipoproduto");
	let AlertaQuantidade = document.getElementById("alerta_quantidade");
	let AlertaPrecoUnidade = document.getElementById("alerta_precounidade");
	let AlertaTotal = document.getElementById("alerta_total");
	let AlertaValorTotal = document.getElementById("alerta_valortotal");
	let AlertaFormaPagamento = document.getElementById("alerta_formapagamento");
	let AlertaDesconto = document.getElementById("alerta_desconto");
	let AlertaTotalPago = document.getElementById("alerta_totalpago");
	

	if(document.getElementById('seller').value == "" || document.getElementById('seller').value == " "){
			document.getElementById('seller').style.borderColor = "red";
			document.getElementById('seller').focus();
			AlertaVendedor.style.display = "block";
	}
	if(document.getElementById('date').value == "" || document.getElementById('date').value == " "){
			document.getElementById('date').style.borderColor = "red";
			document.getElementById('date').focus();
			AlertaData.style.display = "block";
	}
	if(document.getElementById('total-general').value == "" || document.getElementById('total-general').value == " "){
			document.getElementById('total-general').style.borderColor = "red";
			document.getElementById('total-general').focus();
			AlertaTotalGeral.style.display = "block";
	}
	if(document.getElementById('product').value == "" || document.getElementById('product').value == " "){
			document.getElementById('product').style.borderColor = "red";
			document.getElementById('product').focus();
			AlertaProduto.style.display = "block";
	}
	if(document.getElementById('type').value == "" || document.getElementById('type').value == " "){
			document.getElementById('type').style.borderColor = "red";
			document.getElementById('type').focus();
			AlertaTipoProduto.style.display = "block";
	}
	if(document.getElementById('quantity').value == "" || document.getElementById('quantity').value == " "){
			document.getElementById('quantity').style.borderColor = "red";
			document.getElementById('quantity').focus();
			AlertaQuantidade.style.display = "block";
	}
	if(document.getElementById('price').value == "" || document.getElementById('price').value == " "){
			document.getElementById('price').style.borderColor = "red";
			document.getElementById('price').focus();
			AlertaPrecoUnidade.style.display = "block";
	}
	if(document.getElementById('total').value == "" || document.getElementById('total').value == " "){
			document.getElementById('total').style.borderColor = "red";
			document.getElementById('total').focus();
			AlertaTotal.style.display = "block";
	}

	if(document.getElementById('total-value').value == "" || document.getElementById('total-value').value == " "){
			document.getElementById('total-value').style.borderColor = "red";
			document.getElementById('total-value').focus();
			AlertaValorTotal.style.display = "block";
	}
	if(document.getElementById('payment_method').value == "" || document.getElementById('payment_method').value == " "){
			document.getElementById('payment_method').style.borderColor = "red";
			document.getElementById('payment_method').focus();
			AlertaFormaPagamento.style.display = "block";
	}
	if(document.getElementById('discount').value == "" || document.getElementById('discount').value == " "){
			document.getElementById('discount').style.borderColor = "red";
			document.getElementById('discount').focus();
			AlertaDesconto.style.display = "block";
	}
	if(document.getElementById('total-paid').value == "" || document.getElementById('total-paid').value == " "){
			document.getElementById('total-paid').style.borderColor = "red";
			document.getElementById('total-paid').focus();
			AlertaTotalPago.style.display = "block";
	}

});