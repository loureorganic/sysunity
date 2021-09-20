import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosUsuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	const dadosdosusuario;

	dadosUsuario.addEventListener("input", function (event){

		if(dadosUsuario.validity,typeMismatch){
	
			dadosUsuario.setCustomValidity("O campo precisa ser preenchido");
		} else {
			return dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}
	});
/*
	if(dadosUsuario == "")
	{
		dadosUsuario.focus();
		dadosUsuario.class.Name += ' input_erro';
	} else {
		return dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
	}*/

});