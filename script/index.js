import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {
	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	dadosdosusuario = validacao();
	
	function validacao(){
		if(dadosdosusuario == "")
		{
			return "O campo precisa ser preechido";
		} else {
			return dadosdosusuario = new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}
	}	
});