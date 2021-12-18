import databaseuser from "./database/databaseUser.js";
import databasesettings from "./database/databaseSettings-user.js";

const conf = new databasesettings;
conf.settingsuser();
const dados = new databaseuser();
dados.objectuser();

// Number(document.getElementById('telefone').value);
// Number(document.getElementById('senhaAlterada').value);
// Number(document.getElementById('confirmaSenhaAlterada').value);

document.getElementById("btn_salvar").addEventListener("click", function() {
	
	if(document.getElementById('nome').value === "") {

	document.getElementById('nome').style.borderColor = "red";
	document.getElementById('alerta_nome_usuario').style.display = 'flex';

	} else{

	document.getElementById('nome').style.borderColor = "blue";
	document.getElementById('alerta_nome_usuario').style.display = "none";

	} if(document.getElementById('sobrenome').value === "") {

	document.getElementById('sobrenome').style.borderColor = "red";
	document.getElementById('alerta_sobrenome').style.display = 'flex';

	} else{

	document.getElementById('sobrenome').style.borderColor = "blue";
	document.getElementById('alerta_sobrenome').style.display = "none";

	} if(document.getElementById('email').value === "") {

	document.getElementById('email').style.borderColor = "red";
	document.getElementById('alerta_email').style.display = 'flex';

	} else{

	document.getElementById('email').style.borderColor = "blue";
	document.getElementById('alerta_email').style.display = 'none';

	} if(document.getElementById("senhaAlterada").value === "") {

	document.getElementById('senhaAlterada').style.borderColor = "red";
	document.getElementById('alerta_senha').style.display = 'flex';

	} else{

	document.getElementById('senhaAlterada').style.borderColor = "blue";
	document.getElementById('alerta_senha').style.display = 'none';
	
	} if(document.getElementById("confirmaSenhaAlterada").value === "") {

	document.getElementById('confirmaSenhaAlterada').style.borderColor = "red";
	document.getElementById('alerta_confrimar_senha').style.display = 'flex';
	
	} else{

	document.getElementById('confirmaSenhaAlterada').style.borderColor = "blue";
	document.getElementById('alerta_confrimar_senha').style.display = 'none';
		
	}

	if(document.getElementById('senhaAlterada').value !== document.getElementById('confirmaSenhaAlterada').value) {

		console.log("As senhas estão diferentes")

	} else if(document.getElementById('nome').value !== "" && document.getElementById('email').value !== "" && document.getElementById("senhaAlterada").value !== "" && document.getElementById("confirmaSenhaAlterada").value !== "" && document.getElementById('sobrenome').value !== "") {

		const modal = document.getElementById("modal-reg");

			if(modal){

				modal.classList.add('mostrar');

				modal.addEventListener("click", (e) => {
					if(e.target.id == "modal-reg" || e.target.className == 'fechar'){
					modal.classList.remove('mostrar');
					}
					if(e.target.id == 'deny') {
					modal.classList.remove('mostrar');
					}
				})
			}

		let settings_user = {
			nome: document.getElementById('nome').value,
			email: document.getElementById('email').value,
			sobrenome: document.getElementById('sobrenome').value,
			// senhaAlterada: document.getElementById('senhaAlterada').value,
			confirmaSenhaAlterada: document.getElementById('confirmaSenhaAlterada').value
		}


		// conf.funUp(settings_user);

	}
});