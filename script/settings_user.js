Number(document.getElementById('telefone').value);
Number(document.getElementById('senhaAlterada').value);
Number(document.getElementById('confirmaSenhaAlterada').value);

document.getElementById("btn_salvar").addEventListener("click", function() {

	let settings_user = {
		nome: document.getElementById('nome').value,
		email: document.getElementById('email').value,
		telefone: document.getElementById('telefone').value,
		senhaAlterada: document.getElementById('senhaAlterada').value,
		confirmaSenhaAlterada: document.getElementById('confirmaSenhaAlterada').value
    }
});