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

document.getElementById('label1').addEventListener("click", function() {
    let data = document.getElementById('unique').value;
    teste.secondData(data)
})

Number(document.getElementById('package01').value);
new Date(document.getElementById('fabricationdate').value);
new Date(document.getElementById('deadlinedate').value);

 
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let cadastrationDate = date;
let cadastrationHour = today.toLocaleTimeString();

let generalTimeBatch = cadastrationDate.toString()+ '-' + cadastrationHour.toString();
let batch = generalTimeBatch.replace(/:/g, '-').replace(/-/g, '')
document.getElementById('batch1').value = Number(batch);
    



document.getElementById("btn_cadastrar").addEventListener("click", function() {
   
    let production = {
        
        product: document.getElementById('unique').value, 
        type: document.getElementById('unique1').value,
        days: document.getElementById('days').value, 
        fabrication: document.getElementById('fabricationdate').value,
        deadline: document.getElementById('deadlinedate').value,
        packagequantity: Number(document.getElementById('unity').value),
        packageperunity: Number(document.getElementById('package01').value),
        initialdatavalidate: date,
        batch: Number(batch), 
        labelActiveDays: document.getElementById('deadline').checked,
        labelActiveValidate: document.getElementById('date').checked,
        totalquantity: Number(document.getElementById('unity').value) * Number(document.getElementById('package01').value)
        
    }

    if(production.days !== '' && production.labelActiveDays){

        // teste.daysProduction(production);

    }
    else if (production.fabrication !=='' && production.deadline !=='' && production.labelActiveValidate) {

        teste.validateProduction(production);
        
    }

});

// CAPTURAR O PRODUTO, O TIPO, O LOTE, A DATA DE PRODUCAO, A DATA DE VENCIMENTO E A UNIDADE