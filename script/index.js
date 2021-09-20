import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario;

	if(dadosdosusuario == ""){
		dadosdosusuario.class.Name += ' #input_erro';
		dadosdosusuario.focus();
	} else {
		dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}

});