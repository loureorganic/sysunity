import databaseuser from "./database/databaseUser.js";

const dados = new databaseuser();
dados.objectuser();

Number(document.getElementById('telefone').value);
Number(document.getElementById('senhaAlterada').value);
Number(document.getElementById('confirmaSenhaAlterada').value);

document.getElementById("btn_salvar").addEventListener("click", function() {

	const dadosUsuario = (document.getElementById('nome').value, document.getElementById('email').value, 
        document.getElementById('telefone').value,document.getElementById('senhaAlterada').value,document.getElementById('confirmaSenhaAlterada').value);

    let AlertaNomeUsuario = document.getElementById("alerta_nome_usuario");
    let AlertaEmailUsuario = document.getElementById("alerta_email");
    let AlertaTelefoneUsuario = document.getElementById("alerta_telefone");
    let AlertaSenhaUsuario = document.getElementById("alerta_senha");
    let AlertaConfirmarSenha = document.getElementById("alerta_confirmar_senha");

		if(document.getElementById('nome').value == "" || document.getElementById('nome').value == " "){
			document.getElementById('nome').style.borderColor = "red";
			document.getElementById('nome').focus();
			AlertaNomeUsuario.style.display = "block";
		}

        	if(document.getElementById('email').value == "" || document.getElementById('email').value == " "){
			document.getElementById('email').style.borderColor = "red";
			document.getElementById('email').focus();
			AlertaEmailUsuario.style.display = "block";
		}

        	if(document.getElementById('telefone').value == "" || document.getElementById('telefone').value == " "){
			document.getElementById('telefone').style.borderColor = "red";
			document.getElementById('telefone').focus();
			AlertaTelefoneUsuario.style.display = "block";
		}
		if(document.getElementById('senhaAlterada').value == "" || document.getElementById('senhaAlterada').value == " "){
			document.getElementById('senhaAlterada').style.borderColor = "red";
			document.getElementById('senhaAlterada').focus();
			AlertaSenhaUsuario.style.display = "block";
		}
		if(document.getElementById('confirmaSenhaAlterada').value == "" || document.getElementById('confirmaSenhaAlterada').value == " "){
			document.getElementById('confirmaSenhaAlterada').style.borderColor = "red";
			document.getElementById('confirmaSenhaAlterada').focus();
			AlertaConfirmarSenha.style.display = "block";
		}


});