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

Number(document.getElementById('package01').value);
new Date(document.getElementById('fabricationdate').value);
new Date(document.getElementById('deadlinedate').value);

document.getElementById("btn_cadastrar").addEventListener("click", function() {
    
    i++;
    console.log(i);
    document.getElementById('batch1').value = i;
   
    let AlertaLote =  document.getElementById("alertavalorproduto");
    let AlertaDiasValidos = document.getElementById("alerta_dias");
    let AlertaUnidade = document.getElementById("alerta_unidade");
    let AlertaDataFabricacao = document.getElementById("alerta_data_fabricacao");
    let AlertaDataVencimento = document.getElementById("alerta_data_vencimento");
    console.log(document.getElementById('unique').value)
    console.log(document.getElementById('unique1').value)

    console.log(document.getElementById('fabricationdate').value)
    console.log(document.getElementById('deadlinedate').value)
    console.log(document.getElementById('package01').value)

    if(document.getElementById('batch1').value == "" || document.getElementById('batch1').value == " "){
		document.getElementById('batch1').style.borderColor = "red";
		document.getElementById('batch1').focus();
		AlertaLote.style.display = "block";
	}
    if(document.getElementById('days').value == "" || document.getElementById('days').value == " "){
		document.getElementById('days').style.borderColor = "red";
		document.getElementById('days').focus();
		AlertaDiasValidos.style.display = "block";
	}
    if(document.getElementById('unity').value == "" || document.getElementById('unity').value == " "){
		document.getElementById('unity').style.borderColor = "red";
		document.getElementById('unity').focus();
		AlertaUnidade.style.display = "block";
	}

});

