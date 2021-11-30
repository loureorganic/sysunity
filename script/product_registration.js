import databasecreateproduct from "./database/databaseCreate-product.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();
const data = new databasecreateproduct();
data.data();
var data1;


document.getElementById('boxproduct').style.display = 'none';


document.getElementById('label1').addEventListener("click", function() {
  data1 = document.getElementById('unique').value;
})

// MOSTRAR OS INPUTS DO PRODUTO-TIPO
document.getElementById("produtoTipo").addEventListener("click", function() {
	document.getElementById('boxproduct').style.display = 'flex';
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxdate2').style.display = "none";
})

// MOSTRAR OS INPUTS DO TIPO
document.getElementById("tipo").addEventListener("click", function() {
	document.getElementById('boxproduct').style.display = 'flex';
	document.getElementById('boxdate').style.display = "none";
	document.getElementById('boxdate2').style.display = "flex";
})


document.getElementById("btn_cadastrar").addEventListener("click", function() {

	// VALIDAÇÃO DA OPÇÃO PRODUTO-TIPO
	if(document.getElementById("produtoTipo").checked){

		if(document.getElementById('name').value === ""){

		document.getElementById('name').style.borderColor = "red";
		document.getElementById('alertaproduto').style.display = 'flex';

		} else{

		document.getElementById('name').style.borderColor = "blue";
		document.getElementById('alertaproduto').style.display = "none";

		} if(document.getElementById('tipe').value === ""){
	
		document.getElementById('tipe').style.borderColor = "red";
		document.getElementById('alertatipoproduto').style.display = 'flex';

		} else{

		document.getElementById('tipe').style.borderColor = "blue";
		document.getElementById('alertatipoproduto').style.display = 'none';

		} if(document.getElementById("value").value === ""){

		document.getElementById('value').style.borderColor = "red";
		document.getElementById('alertavalorproduto').style.display = 'flex';

		} else if(document.getElementById('name').value != "" && document.getElementById('tipe').value != ""){

		data.createproduct(document.getElementById('name').value, document.getElementById('tipe').value, document.getElementById('value').value);
		}
	}

	// VALIDAÇÃO DA OPÇÃO TIPO
	if(document.getElementById("tipo").checked){
	
		if(document.getElementById("tipe1").value == ""){

		document.getElementById("tipe1").style.borderColor = "red";
		document.getElementById("alertatipoproduto1").style.display = "flex";
	
		} else{

		document.getElementById("tipe1").style.borderColor = "blue";
		document.getElementById("alertatipoproduto1").style.display = "none";

		} if(document.getElementById("value1").value == ""){
	
		document.getElementById("value1").style.borderColor = "red";
		document.getElementById("alertavalorproduto1").style.display = "flex";

		} else if(document.getElementById('tipe1').value != "" && document.getElementById('value1').value != ""){

		data.creatoption(data1, document.getElementById("tipe1").value, document.getElementById("value1").value );
		}
	}
});