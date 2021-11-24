import databaseuser from "./database/databaseUser.js";
import databasecreateproduction from "./database/databaseCreate-production.js";

const teste = new databasecreateproduction();
const dados = new databaseuser();

teste.data();
dados.objectuser();
document.getElementById("deadline").addEventListener("click", function() {
    document.getElementById('boxday').style.display = "flex";
	document.getElementById('boxfabrication').style.display = "none";
})

document.getElementById("date").addEventListener("click", function() {
    document.getElementById('boxday').style.display = "none";
	document.getElementById('boxfabrication').style.display = "flex";
	
})

Number(document.getElementById('unity').value);
let i = 10000;



document.getElementById('batch1').value = i;

teste.signup();

document.getElementById('label1').addEventListener("click", function() {
    let data = document.getElementById('unique').value;
    teste.secondData(data)
})

document.getElementById("btn_cadastrar").addEventListener("click", function() {
    
    i++;
    console.log(i);
    document.getElementById('batch1').value = i;

    let AlertaLote =  document.getElementById("alerta_lote");
    let AlertaDiasValidos = document.getElementById("alerta_dias");
    let AlertaUnidade = document.getElementById("alerta_unidade");
    let AlertaDataFabricacao = document.getElementById("alerta_data_fabricacao");
    let AlertaDataVencimento = document.getElementById("alerta_data_vencimento");

    if(document.getElementById('inputBatch').value == "" || document.getElementById('inputBatch').value == " "){
		document.getElementById('inputBatch').style.borderColor = "red";
		document.getElementById('inputBatch').focus();
		AlertaLote.style.display = "block";
	}
    if(document.getElementById('inputDays').value == "" || document.getElementById('inputDays').value == " "){
		document.getElementById('inputDays').style.borderColor = "red";
		document.getElementById('inputDays').focus();
		AlertaDiasValidos.style.display = "block";
	}
    if(document.getElementById('inputUnity').value == "" || document.getElementById('inputUnity').value == " "){
		document.getElementById('inputUnity').style.borderColor = "red";
		document.getElementById('inputUnity').focus();
		AlertaUnidade.style.display = "block";
	}

});

