import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const dadosdosusuario = (document.getElementById('usuario_login').value, document.getElementById('senha_login').value);

	let msg = document.getElementById("msgErro").innerText;

		if(document.getElementById('senha_login').value == "" || document.getElementById('senha_login').value == " "){
			document.getElementById('senha_login').style.borderColor = "red";
			document.getElementById('senha_login').focus();
			document.getElementById('senha_login') = mostraMsg();
		} else {
			new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}

		function mostraMsg(){
			if(msg = "none")
			{
				document.getElementById("msgErro").style.display = "inline"
			} else {
				document.getElementById("msgErro").style.display = "none";
			}
		}
});