import Login from "./database/databaseLogin.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	let AlertaSenhaLogin = document.getElementById("alertalogin");
	let AlertaUsuarioLogin = document.getElementById("alertausuario");
	if(document.getElementById('usuario_login').value == "" || document.getElementById('usuario_login').value == " "){
		document.getElementById('usuario_login').style.borderColor = "red";
		document.getElementById('usuario_login').focus();
		AlertaUsuarioLogin.style.display = "block";
	}

		if(document.getElementById('senha_login').value == "" || document.getElementById('senha_login').value == " "){
			document.getElementById('senha_login').style.borderColor = "red";
			document.getElementById('senha_login').focus();
			AlertaSenhaLogin.style.display = "block";
		} else {
			new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}

});