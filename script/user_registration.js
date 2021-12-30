import databasecreateuser from "./database/databaseCreate-user.js";
import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

const data = new databasecreateuser();

document.getElementById("btn_cadastrar").addEventListener("click", function() {

	var select = document.getElementById("access");
    var value = select.options[select.selectedIndex].value;

	var select1 = document.getElementById("office");
    var value1 = select1.options[select1.selectedIndex].value;

	if(document.getElementById('nome').value === "") {

	document.getElementById('nome').style.borderColor = "red";
	document.getElementById('alerta_nome_usuario').style.display = 'flex';

	} else{

	document.getElementById('nome').style.borderColor = "blue";
	document.getElementById('alerta_nome_usuario').style.display = "none";

	} if(document.getElementById('sobrenome').value === "") {

	document.getElementById('sobrenome').style.borderColor = "red";
	document.getElementById('alerta_sobrenome').style.display = 'flex';

	} else{

	document.getElementById('sobrenome').style.borderColor = "blue";
	document.getElementById('alerta_sobrenome').style.display = "none";

	} if(document.getElementById('email').value === "") {

	document.getElementById('email').style.borderColor = "red";
	document.getElementById('alerta_email').style.display = 'flex';

	} else{

	document.getElementById('email').style.borderColor = "blue";
	document.getElementById('alerta_email').style.display = 'none';

	} if(document.getElementById("nomedeusuario").value === "") {

	document.getElementById('nomedeusuario').style.borderColor = "red";
	document.getElementById('alerta_usuario').style.display = 'flex';

	} else{

	document.getElementById('nomedeusuario').style.borderColor = "blue";
	document.getElementById('alerta_usuario').style.display = 'none';
	
	} if(value === "") {

		document.getElementById('access').style.borderColor = "red";

	} else {

		document.getElementById('access').style.borderColor = "blue";

	} if(value1 === "") {

		document.getElementById('office').style.borderColor = "red";

	} else {

		document.getElementById('office').style.borderColor = "blue";

	}

	let user = {
		nome: document.getElementById('nome').value,
		sobrenome: document.getElementById('sobrenome').value,
		nomedeusuario: document.getElementById('nomedeusuario').value,
		email: document.getElementById('email').value
    }

	if(user.nome!= "" && user.nome != " " && user.sobrenome!= "" && user.sobrenome != " " && user.nomedeusuario != "" && user.nomedeusuario != " " && user.email != "" && user.email != " "){
		const modal = document.getElementById("modal-reg");

		if(modal){

		modal.classList.add('mostrar');

		modal.addEventListener("click", (e) => {
			if(e.target.id == "modal-reg" || e.target.className == 'fechar'){
			modal.classList.remove('mostrar');
			}
			if(e.target.id == 'deny') {
			modal.classList.remove('mostrar');
			}
		})
		}
		data.createuser(user.nome,user.sobrenome, user.nomedeusuario, user.email, document.getElementById('office').value, document.getElementById('access').value);
	}


});