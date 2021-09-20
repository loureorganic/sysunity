import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const usuario = document.querySelector('usuario_login');

	if(usuario == ""){
		usuario.class.Name += ' input_erro';
		usuario.focus();
	} else {
		dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}

	const dadosdosusuario;

});