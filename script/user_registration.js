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

	if(document.getElementById('nome').value != "" && document.getElementById('nome').value != " " && document.getElementById('sobrenome').value != "" && document.getElementById('sobrenome').value != " " && document.getElementById('nomedeusuario').value != "" && document.getElementById('nomedeusuario').value != " " && document.getElementById('email').value != "" && document.getElementById('email').value != " "){
		data.createuser(document.getElementById('nome').value,document.getElementById('sobrenome').value , document.getElementById('nomedeusuario').value, document.getElementById('email').value, document.getElementById('office').value, document.getElementById('access').value); 
	}


});