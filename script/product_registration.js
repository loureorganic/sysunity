import databasecreateproduct from "./database/databaseCreate-product.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();
const data = new databasecreateproduct();
data.data();
var data1;
var productActive ;


document.getElementById('boxproduct').style.display = 'none';


document.getElementById('label1').addEventListener("click", function() {
  data1 = document.getElementById('unique').value;
})
document.getElementById("produtoTipo").addEventListener("click", function() {
	document.getElementById('boxproduct').style.display = 'flex';
	document.getElementById('boxdate').style.display = "flex";
	document.getElementById('boxdate2').style.display = "none";
})
document.getElementById("tipo").addEventListener("click", function() {
	document.getElementById('boxproduct').style.display = 'flex';
	document.getElementById('boxdate').style.display = "none";
	document.getElementById('boxdate2').style.display = "flex";
})
document.getElementById("produto-tipo").addEventListener("click", function(){
	productActive = document.getElementById("produtoTipo").checked;
})
document.getElementById("btn_cadastrar").addEventListener("click", function() {
 if(productActive){
	 data.createproduct(document.getElementById('name').value, document.getElementById('tipe').value, document.getElementById('value').value)
 } else {
	 data.creatoption(data1, document.getElementById('tipe1').value, document.getElementById('value1').value );
 }
});