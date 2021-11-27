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

document.getElementById("btn_cadastrar").addEventListener("click", function() {
	
});