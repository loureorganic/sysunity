import databasecreateuser from "./database/databaseCreate-user.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

const data = new databasecreateuser();

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	
	let msg = document.getElementById("msgErro");
    let msg2 = document.getElementById("msgErro2");
    let msg3 = document.getElementById("msgErro3");
	let msg4 = document.getElementById("msgErro4");

	if(document.getElementById('nome').value == "" || document.getElementById('nome').value == " "){
		document.getElementById('nome').style.borderColor = "red";
		document.getElementById('nome').focus();
		msg.style.display = "block";
	}
	if(document.getElementById('sobrenome').value == "" || document.getElementById('sobrenome').value == " "){
		document.getElementById('sobrenome').style.borderColor = "red";
		document.getElementById('sobrenome').focus();
		msg2.style.display = "block";
	}

	if(document.getElementById('usuario').value == "" || document.getElementById('usuario').value == " "){
		document.getElementById('usuario').style.borderColor = "red";
		document.getElementById('usuario').focus();
		msg3.style.display = "block";
	}

	if(document.getElementById('email').value == "" || document.getElementById('email').value == " "){
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('email').focus();
		msg4.style.display = "block";
	}

	if(document.getElementById('nome').value != "" && document.getElementById('nome').value != " " && document.getElementById('sobrenome').value != "" && document.getElementById('sobrenome').value != " " && document.getElementById('nomedeusuario').value != "" && document.getElementById('nomedeusuario').value != " " && document.getElementById('email').value != "" && document.getElementById('email').value != " "){
		data.createuser(document.getElementById('nome').value,document.getElementById('sobrenome').value , document.getElementById('nomedeusuario').value, document.getElementById('email').value, document.getElementById('office').value, document.getElementById('access').value); 
	}
});