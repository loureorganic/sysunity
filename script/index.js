import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosUsuario = (document.getElementById('usuario_login').value);
	const dadosdosusuario;

	if(dadosUsuario == "")
	{
		dadosUsuario.focus();
		dadosUsuario.class.Name += ' input_erro';
	} else {
		return dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}

});