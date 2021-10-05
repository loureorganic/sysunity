document.getElementById("btn_cadastrar").addEventListener("click", function() {

	const dadosProduto = (document.getElementById('name').value, document.getElementById('tipe').value, document.getElementById('value').value);

    let msg = document.getElementById("msgErro");
    let msg2 = document.getElementById("msgErro2");
    let msg3 = document.getElementById("msgErro3");

		if(document.getElementById('name').value == "" || document.getElementById('name').value == " "){
			document.getElementById('name').style.borderColor = "red";
			document.getElementById('name').focus();
			msg.style.display = "block";
		}

        if(document.getElementById('tipe').value == "" || document.getElementById('tipe').value == " "){
			document.getElementById('tipe').style.borderColor = "red";
			document.getElementById('tipe').focus();
			msg2.style.display = "block";
		}

        if(document.getElementById('value').value == "" || document.getElementById('value').value == " "){
			document.getElementById('value').style.borderColor = "red";
			document.getElementById('value').focus();
			msg3.style.display = "block";
		}

});