import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {
	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	if(dadosdosusuario != "")
	{
		dadosdosusuario.className += " #usuario_login, #usuario_senha"; 
		dadosdosusuario.focus();
	} else {
		return dadosdosusuario;
	}
});