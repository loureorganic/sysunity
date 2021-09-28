document.getElementById("btn_cadastrar").addEventListener("click", function() {

	const dadosUsuario = (document.getElementById('nome').value, document.getElementById('usuario').value, document.getElementById('email').value);

	let msg = document.getElementById("msgErro");
    let msg2 = document.getElementById("msgErro2");
    let msg3 = document.getElementById("msgErro3");

		if(document.getElementById('nome').value == "" || document.getElementById('nome').value == " "){
			document.getElementById('nome').style.borderColor = "red";
			document.getElementById('nome').focus();
			msg.style.display = "block";
		}
        if(document.getElementById('usuario').value == "" || document.getElementById('usuario').value == " "){
			document.getElementById('usuario').style.borderColor = "red";
			document.getElementById('usuario').focus();
			msg2.style.display = "block";
		}

       if(document.getElementById('email').value == "" || document.getElementById('email').value == " "){
			document.getElementById('email').style.borderColor = "red";
			document.getElementById('email').focus();
			msg3.style.display = "block";
		}


});

function valorSelect(){
    
    let item = document.getElementById("cargo").value;
    let item2 = document.getElementById("nvl").value;

}