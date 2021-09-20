import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	if(dadosdosusuario == "")
	{
		dadosdosusuario.focus();
		dadosdosusuario.class.Name += ' input_erro';
	} else {
		dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}

});