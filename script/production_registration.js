document.getElementById("btn_cadastrar").addEventListener("click", function() {

    const dadosProducao = (document.getElementById("name").value, document.getElementById("tipe").value, document.getElementById("batch").value,
		document.getElementById("prazo").value, document.getElementById("data").value, 
		document.getElementById('days').value, document.getElementById('fabrication').value, 
		document.getElementById('pay').value, document.getElementById('unit').value, 
		document.getElementById('package_checkbox').value, document.getElementById('package').value);


    let AlertaNomeProduto = document.getElementById("alertaproduto");
    let AlertaTipoProduto = document.getElementById("alertatipoproduto");
    let AlertaLote = document.getElementById("alertavalorproduto");
    let AlertaDiasVálidos = document.getElementById("alerta_dias");
    let AlertaDataFabricação = document.getElementById("alerta_data_fabricacao");
    let AlertaDataVencimento = document.getElementById("alerta_data_vencimento");
    let AlertaPacotes = document.getElementById("alerta_pacotes");

	if(document.getElementById('name').value == "" || document.getElementById('name').value == " "){
			document.getElementById('name').style.borderColor = "red";
			document.getElementById('name').focus();
			AlertaNomeProduto.style.display = "block";
	}

	if(document.getElementById('tipe').value == "" || document.getElementById('tipe').value == " "){
			document.getElementById('tipe').style.borderColor = "red";
			document.getElementById('tipe').focus();
			AlertaTipoProduto.style.display = "block";
	}

	if(document.getElementById('batch').value == "" || document.getElementById('batch').value == " "){
			document.getElementById('batch').style.borderColor = "red";
			document.getElementById('batch').focus();
			AlertaLote.style.display = "block";
	}

    if(document.getElementById('days').value == "" || document.getElementById('days').value == " "){
        document.getElementById('days').style.borderColor = "red";
        document.getElementById('days').focus();
        AlertaDiasVálidos.style.display = "block";
    }

    if(document.getElementById('fabrication').value == "" || document.getElementById('fabrication').value == " "){
            document.getElementById('fabrication').style.borderColor = "red";
            document.getElementById('fabrication').focus();
            AlertaDataFabricação.style.display = "block";
    }

        if(document.getElementById('pay').value == "" || document.getElementById('pay').value == " "){
            document.getElementById('pay').style.borderColor = "red";
            document.getElementById('pay').focus();
            AlertaDataVencimento.style.display = "block";
    }

    if(document.getElementById('package').value == "" || document.getElementById('package').value == " "){
            document.getElementById('package').style.borderColor = "red";
            document.getElementById('package').focus();
            AlertaPacotes.style.display = "block";
    }

	function TipoValidade(){

        const checkboxPrazo = document.getElementById("deadline")
        const inputDiasVálidos = document.getElementById("days");

        const checkboxData = document.getElementById("date")
        const inputDataFabricacao = document.getElementById("fabrication");
        const inputDataVencimento = document.getElementById("pay");

        if(checkboxPrazo.checked == true){
            inputDiasVálidos.style.display = "block";
        } else {
            inputDiasVálidos.style.display = "none";
        }

        if(checkboxData.checked == true){
            inputDataFabricacao.style.display = "block";
            inputDataVencimento.style.display = "block";
        } else {
            inputDataFabricacao.style.display = "none";
            inputDataVencimento.style.display = "none";
        }
    }

});