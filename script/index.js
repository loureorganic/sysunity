import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	if(dadosdosusuario == "")
	{
		dadosdosusuario.focus();
		dadosdosusuario.class.Name += ' usuario_login, senha_login';
	} else {
		dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}

});