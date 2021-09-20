import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	dadosdosusuario = validarSenha();

	function validarSenha(){
		if(!dadosdosusuario == ""){
			dadosdosusuario.className += ' input_erro';
			dadosdosusuario.focus();
			return false;
		} else {
			dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}
	}
});