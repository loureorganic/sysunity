import databasecreateuser from "./database/databaseCreate-user.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

const data = new databasecreateuser();

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	let user = {
		nome: document.getElementById('nome').value,
		sobrenome: document.getElementById('sobrenome').value,
		nomedeusuario: document.getElementById('nomedeusuario').value,
		email: document.getElementById('email').value
    }

	if(user.nome!= "" && user.nome != " " && user.sobrenome!= "" && user.sobrenome != " " && user.nomedeusuario != "" && user.nomedeusuario != " " && user.email != "" && user.email != " "){
		data.createuser(user.nome,user.sobrenome, user.nomedeusuario, user.email, document.getElementById('office').value, document.getElementById('access').value); 
	}


});