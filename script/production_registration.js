import databaseuser from "./database/databaseUser.js";
import databasecreateproduction from "./database/databaseCreate-production.js";

const teste = new databasecreateproduction();
const dados = new databaseuser();

dados.objectuser();
teste.data();
document.getElementById("deadline").addEventListener("click", function() {
    document.getElementById('boxday').style.display = "flex";
	document.getElementById('boxfabrication').style.display = "none";
})

document.getElementById("date").addEventListener("click", function() {
    document.getElementById('boxday').style.display = "none";
	document.getElementById('boxfabrication').style.display = "flex";
	
})

Number(document.getElementById('inputUnity').value);
Number(document.getElementById('inputBatch').value);


teste.secondData(document.getElementById('unique').value);
document.getElementById("btn_cadastrar").addEventListener("click", function() {
    
    const dadosProducao = (document.getElementById("selectNomeProducao").value, document.getElementById("selectTipoProducao").value, 
        document.getElementById("inputBatch").value, document.getElementById("deadline").value, document.getElementById("date").value, 
        document.getElementById('inputDays').value, document.getElementById('fabrication').value, document.getElementById('pay').value, 
        document.getElementById('inputUnity').value, document.getElementById('package').value);

    let AlertaLote = document.getElementById("alertavalorproduto");
    let AlertaDiasVálidos = document.getElementById("alerta_dias");
    let AlertaDataFabricação = document.getElementById("alerta_data_fabricacao");
    let AlertaDataVencimento = document.getElementById("alerta_data_vencimento");
    let AlertaUnidade = document.getElementById("alerta_unidade");

	if(document.getElementById('inputBatch').value == "" || document.getElementById('inputBatch').value == " "){
			document.getElementById('inputBatch').style.borderColor = "red";
			document.getElementById('inputBatch').focus();
			AlertaLote.style.display = "block";
	}

    if(document.getElementById('inputDays').value == "" || document.getElementById('inputDays').value == " "){
        document.getElementById('inputDays').style.borderColor = "red";
        document.getElementById('inputDays').focus();
        AlertaDiasVálidos.style.display = "block";
    }

    if(document.getElementById('fabrication').value == "" || document.getElementById('fabrication').value == " "){
            document.getElementById('fabrication').style.borderColor = "red";
            document.getElementById('fabrication').focus();
            AlertaDataFabricação.style.display = "block";
    }

        if(document.getElementById('pay').value == "" || document.getElementById('pay').value == " "){
            document.getElementById('pay').style.borderColor = "red";
            document.getElementById('pay').focus();
            AlertaDataVencimento.style.display = "block";
    }

    if(document.getElementById('inputUnity').value == "" || document.getElementById('inputUnity').value == " "){
        document.getElementById('inputUnity').style.borderColor = "red";
        document.getElementById('inputUnity').focus();
        AlertaUnidade.style.display = "block";
    }
    

});