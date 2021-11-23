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
console.log(document.getElementById('batch1').value)



teste.signup();


document.getElementById('label1').addEventListener("click", function() {
  
        console.log(document.getElementById('unique').value);

})

document.getElementById("btn_cadastrar").addEventListener("click", function() {
    
    
    let AlertaNomeProduto = document.getElementById("alertaproduto");
    let AlertaTipoProduto = document.getElementById("alertatipoproduto");
    let AlertaLote = document.getElementById("alertavalorproduto");
    let AlertaDiasVálidos = document.getElementById("alerta_dias");
    let AlertaDataFabricação = document.getElementById("alerta_data_fabricacao");
    let AlertaDataVencimento = document.getElementById("alerta_data_vencimento");
    let AlertaUnidade = document.getElementById("alerta_unidade");
    
	if(document.getElementById('name').value == "" || document.getElementById('name').value == " "){
        document.getElementById('name').style.borderColor = "red";
        document.getElementById('name').focus();
        AlertaNomeProduto.style.display = "block";
	}
    
	if(document.getElementById('tipe').value == "" || document.getElementById('tipe').value == " "){
        document.getElementById('tipe').style.borderColor = "red";
        document.getElementById('tipe').focus();
        AlertaTipoProduto.style.display = "block";
	}

	if(document.getElementById('batch1').value == "" || document.getElementById('batch1').value == " "){
			document.getElementById('batch1').style.borderColor = "red";
			document.getElementById('batch1').focus();
			AlertaLote.style.display = "block";
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
    
    if(document.getElementById('unity').value == "" || document.getElementById('unity').value == " "){
        document.getElementById('unity').style.borderColor = "red";
        document.getElementById('unity').focus();
        AlertaUnidade.style.display = "block";
    }
    
    
});

