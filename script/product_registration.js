import databasecreateproduct from "./database/databaseCreate-product.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();
const data = new databasecreateproduct();
data.data();
var data1;


document.getElementById('label1').addEventListener("click", function() {
  data1 = document.getElementById('unique').value;
})


document.getElementById("produtoTipo").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxdate2').style.display = "none";
})


document.getElementById("tipo").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "none";
	document.getElementById('boxdate2').style.display = "flex";
})



document.getElementById("btn_cadastrar").addEventListener("click", function() {
	
	data.creatoption(data1, document.getElementById('tipe1').value, document.getElementById('value1').value );
	// data.createproduct(document.getElementById('name').value, document.getElementById('tipe').value, document.getElementById('value').value)

    let AlertaProduto = document.getElementById("alertaproduto");
    let AlertaTipoProduto= document.getElementById("alertatipoproduto");
    let AlertaValorProduto = document.getElementById("alertavalorproduto");
	
	if(document.getElementById('name').value == "" || document.getElementById('name').value == " "){
		document.getElementById('name').style.borderColor = "red";
		document.getElementById('name').focus();
		AlertaProduto.style.display = "block";
	}
	
	else if(document.getElementById('tipe').value == "" || document.getElementById('tipe').value == " "){
		document.getElementById('tipe').style.borderColor = "red";
		document.getElementById('tipe').focus();
		AlertaTipoProduto.style.display = "block";
	}
	
	else if(document.getElementById('value').value == "" || document.getElementById('value').value == " "){
		document.getElementById('value').style.borderColor = "red";
		document.getElementById('value').focus();
		AlertaValorProduto.style.display = "block";
	}
	else {
		// data.createproduct(document.getElementById('name').value, document.getElementById('tipe').value, document.getElementById('value').value);
	}
	
});