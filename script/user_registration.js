import databasecreateuser from "./database/databaseCreate-user.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

const data = new databasecreateuser();

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	let AlertaNomeUsuario = document.getElementById("alerta_nome_usuario");
	let AlertaSobrenome = document.getElementById("alerta_sobrenome");
	let AlertaUsuario = document.getElementById("alerta_usuario");
	let AlertaEmail = document.getElementById("alerta_email");
	let modal = document.getElementById("checked");

	if(document.getElementById('nome').value == "" || document.getElementById('nome').value == " "){
		document.getElementById('nome').style.borderColor = "red";
		document.getElementById('nome').focus();
		AlertaNomeUsuario.style.display = "block";
		modal.style.display = "block";
	}
	if(document.getElementById('sobrenome').value == "" || document.getElementById('sobrenome').value == " "){
		document.getElementById('sobrenome').style.borderColor = "red";
		document.getElementById('sobrenome').focus();
		AlertaSobrenome.style.display = "block";
	}

	if(document.getElementById('nomedeusuario').value == "" || document.getElementById('usuario').value == " "){
		document.getElementById('nomedeusuario').style.borderColor = "red";
		document.getElementById('nomedeusuario').focus();
		AlertaUsuario.style.display = "block";
	}

	if(document.getElementById('email').value == "" || document.getElementById('email').value == " "){
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('email').focus();
		AlertaEmail.style.display = "block";
	}

	if(document.getElementById('nome').value != "" && document.getElementById('nome').value != " " && document.getElementById('sobrenome').value != "" && document.getElementById('sobrenome').value != " " && document.getElementById('nomedeusuario').value != "" && document.getElementById('nomedeusuario').value != " " && document.getElementById('email').value != "" && document.getElementById('email').value != " "){
		data.createuser(document.getElementById('nome').value,document.getElementById('sobrenome').value , document.getElementById('nomedeusuario').value, document.getElementById('email').value, document.getElementById('office').value, document.getElementById('access').value); 
	}


});