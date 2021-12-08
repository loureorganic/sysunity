import Login from "./database/databaseLogin.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	let AlertaSenhaLogin = document.getElementById("alertalogin");
	let AlertaUsuarioLogin = document.getElementById("alertausuario");
	let inputSenha = document.getElementById('senha_login');
	let inputLogin = document.getElementById('usuario_login');

	if(inputLogin.value == "" || inputLogin.value == " "){
		inputLogin.style.borderColor = "red";
		inputLogin.focus();
		AlertaUsuarioLogin.style.display = "block";
	}else{
		AlertaUsuarioLogin.style.display = "none";
		inputLogin.style.borderColor = "black";
	}
	inputLogin.addEventListener('change', function(){
		if(inputLogin.value == "" || inputLogin.value == " "){
			inputLogin.style.borderColor = "red";
			inputLogin.focus();
			AlertaUsuarioLogin.style.display = "block";
		}else{
			AlertaUsuarioLogin.style.display = "none";
			inputLogin.style.borderColor = "black";
		}
	}) 
	if(inputSenha.value == "" || inputSenha.value == " "){
		inputSenha.style.borderColor = "red";
		inputSenha.focus();
		AlertaSenhaLogin.style.display = "block";
	} else {
		inputSenha.style.borderColor = "black";
		AlertaSenhaLogin.style.display = "none";
	}
	inputSenha.addEventListener('change', function(){
		if(inputSenha.value == "" || inputSenha.value == " "){
			inputSenha.style.borderColor = "red";
			inputSenha.focus();
			AlertaSenhaLogin.style.display = "block";
		} else {
			inputSenha.style.borderColor = "black";
			AlertaSenhaLogin.style.display = "none";
		}
	}) 
	if(inputSenha.value != "" && inputLogin.value != "")
	new Login(inputLogin.value, inputSenha.value);
});