import databaseuser from "./database/databaseUser.js";
import createsale from "./database/databaseCreat-sale.js"

const sale = new createsale();
sale.createsale();
const dados = new databaseuser();
dados.objectuser();

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
	document.getElementById('selectProdutoVendas').value, document.getElementById('selectTipoVendas').value,
	document.getElementById('quantity').value, document.getElementById('price').value, document.getElementById('total').value, 
	document.getElementById('total-general-id').value, document.getElementById('total-general-id-2').value,
	document.getElementById('selectPagamentoVendas').value, document.getElementById('total-value-id').value, 
	document.getElementById('discount').value, document.getElementById('total-paid-input').value);
 
    
    let AlertaVendedor = document.getElementById("alerta_vendedor");
	let AlertaData = document.getElementById("alerta_data");
	let AlertaTotalGeral = document.getElementById("alerta_totalgeral");
	let AlertaTotalGeral = document.getElementById("alerta_totalgeral_2");
	let AlertaQuantidade = document.getElementById("alerta_quantidade");
	let AlertaPrecoUnidade = document.getElementById("alerta_precounidade");
	let AlertaTotal = document.getElementById("alerta_total");
	let AlertaValorTotal = document.getElementById("alerta_valortotal");
	let AlertaDesconto = document.getElementById("alerta_desconto");
	let AlertaTotalPago = document.getElementById("total-paid-p");
	

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

	if(document.getElementById('total-general-id').value == "" || document.getElementById('total-general-id').value == " "){
		document.getElementById('total-general-id').style.borderColor = "red";
		document.getElementById('total-general-id').focus();
		AlertaTotalGeral.style.display = "block";
	}

	if(document.getElementById('discount').value == "" || document.getElementById('discount').value == " "){
		document.getElementById('discount').style.borderColor = "red";
		document.getElementById('discount').focus();
		AlertaDesconto.style.display = "block";
	}

	if(document.getElementById('total-general-id-2').value == "" || document.getElementById('total-general-id-2').value == " "){
		document.getElementById('total-general-id-2').style.borderColor = "red";
		document.getElementById('total-general-id-2').focus();
		AlertaTotalGeral.style.display = "block";
	}

	if(document.getElementById('total-value-id').value == "" || document.getElementById('total-value-id').value == " "){
			document.getElementById('total-value-id').style.borderColor = "red";
			document.getElementById('total-value-id').focus();
			AlertaValorTotal.style.display = "block";
	}

	if(document.getElementById('total-paid-input').value == "" || document.getElementById('total-paid-input').value == " "){
			document.getElementById('total-paid-input').style.borderColor = "red";
			document.getElementById('total-paid-input').focus();
			AlertaTotalPago.style.display = "block";
	}

});