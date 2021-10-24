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
	let modal = document.getElementById("checked");

	let inputNome = document.getElementById("nome");
	let inputSobrenome = document.getElementById("sobrenome");
	let inputUsuario = document.getElementById("nomedeusuario");
	let inputEmail = document.getElementById("email");


	if(inputNome.value == ""){
		inputNome.style.borderColor = "red";
		inputNome.focus();
		msg.style.display = "block";
		modal.style.display = "block";
	}
	if(inputSobrenome.value == ""){
		inputSobrenome.style.borderColor = "red";
		inputSobrenome.focus();
		msg2.style.display = "block";
	}

	if(inputUsuario.value == ""){
		inputUsuario.style.borderColor = "red";
		inputUsuario.focus();
		msg3.style.display = "block";
	}

	if(inputEmail.value == ""){
		inputEmail.style.borderColor = "red";
		inputEmail.focus();
		msg4.style.display = "block";
	}

	if(	inputNome.value != "" &&	 
		inputSobrenome.value != "" && 
		inputUsuario.value != "" && 
		inputEmail.value != ""){
		data.createuser(inputNome.value,inputSobrenome.value, inputUsuario.value, inputEmail.value, document.getElementById('office').value, document.getElementById('access').value); 

		$('#checked').modal('show');
		 
	}
});