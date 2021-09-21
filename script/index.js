import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

		if(document.getElementById('senha_login').value == ""){
			document.getElementById('senha_login').innerText = 'O campo precisa ser preenchido';
			document.getElementById('senha_login').style.borderColor = "red",
			document.getElementById('senha_login').focus();
		} else {
			new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}
});