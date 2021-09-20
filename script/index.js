import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {
	const  dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		
	const inputdadosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	if(inputdadosusuario != "")
	{
		return dadosdosusuario;
		inputdadosusuario.className += ' erro'; 
		inputdadosusuario.focus();
	}
});