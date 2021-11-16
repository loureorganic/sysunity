import databasecreateproduct from "./database/databaseCreate-product.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();
const data = new databasecreateproduct();


document.getElementById("produtoTipo").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxdate2').style.display = "none";
})

document.getElementById("tipo").addEventListener("click", function() {
	document.getElementById('boxdate').style.display = "none";
	document.getElementById('boxdate2').style.display = "flex";
})

Number(document.getElementById('inputValue').value);

document.getElementById("btn_cadastrar").addEventListener("click", function() {
	
    let AlertaProduto = document.getElementById("alertaproduto");
    let AlertaTipoProduto= document.getElementById("alertatipoproduto");
    let AlertaValorProduto = document.getElementById("alertavalorproduto");
	
	if(document.getElementById('inputName').value == "" || document.getElementById('inputName').value == " "){
		document.getElementById('inputName').style.borderColor = "red";
		document.getElementById('inputName').focus();
		AlertaProduto.style.display = "block";
	}
	
	else if(document.getElementById('inputTipe').value == "" || document.getElementById('inputTipe').value == " "){
		document.getElementById('inputTipe').style.borderColor = "red";
		document.getElementById('inputTipe').focus();
		AlertaTipoProduto.style.display = "block";
	}
	
	else if(document.getElementById('inputValue').value == "" || document.getElementById('inputValue').value == " "){
		document.getElementById('inputValue').style.borderColor = "red";
		document.getElementById('inputValue').focus();
		AlertaValorProduto.style.display = "block";
	}

	else if(document.getElementById('inputTipe2').value == "" || document.getElementById('inputTipe2').value == " "){
		document.getElementById('inputTipe2').style.borderColor = "red";
		document.getElementById('inputTipe2').focus();
		AlertaTipoProduto.style.display = "block";
	}

	else if(document.getElementById('inputValue2').value == "" || document.getElementById('inputValue2').value == " "){
		document.getElementById('inputValue2').style.borderColor = "red";
		document.getElementById('inputValue2').focus();
		AlertaValorProduto.style.display = "block";
	}

	else {
		data.createproduct(document.getElementById('inputName').value, document.getElementById('inputTipe').value, document.getElementById('inputValue').value, 
		document.getElementById('selectNameProduto').value, document.getElementById('inputTipe2').value, document.getElementById('inputValue2').value);
	}
	
});