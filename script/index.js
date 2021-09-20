import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {
	const dadosdosusuario =  new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	const campoUsuario_dados = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	if(campoUsuario_dados == "")
	{
		campoUsuario_dados.className += " #usuario_login, #usario_senha"; 
		campoUsuario_dados.focus();
	} else {
		return dadosdosusuario =  new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}
});