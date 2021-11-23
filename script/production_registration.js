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
});

