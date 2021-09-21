import Login from "./database/login.js";


document.getElementById("btn_Entrar").addEventListener("click", function() {

	const usuario = document.getElementById('usuario_login').value;
	const senha = document.getElementById('senha_login').value;

		if(document.getElementById('usuario_login').value == ""){
			document.getElementById('usuario_login').value.style.borderColor = "red",
			document.getElementById('usuario_login').value.focus();
		} else if (document.getElementById('senha_login').value){
			document.getElementById('senha_login').value.style.borderColor = "red",
			document.getElementById('senha_login').value.focus();
		}else{	
			new Login(document.getElementById('usuario_login').value, document.getElementById('senha_login').value);
		}
});