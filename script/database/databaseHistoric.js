var dados = "";
var var_lista = document.getElementById("tablebody");

export default class Historic{

    // CRIACAO DA TABELA
    historic() {

        const firebaseref = firebase.database().ref("historic");
        const userfirebaseref = firebase.database().ref("user");

        // CRIACAO E POPULAR OS DADOS NA TABELA
        firebaseref.once('value', function(all){

            all.forEach(

                function(curecord){
                
                    var historico = curecord.val();
                    let u = historico.userAction;
                    let a;
                    let b;
                    var tr = document.createElement('tr');
                    tr.classList.add('dot');

                    userfirebaseref.once('value', function(resultado){

                        resultado.forEach(element => {

                            if(element.key == u) {

                                if(historico.action === "cadastrarUser"){

                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Cadastrou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "editarUser") {

                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Editou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "deletarUser") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Deletou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "cadastrarSale") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Cadastrou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "editarSale") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Editou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "deletarSale") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Deletou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "cadastrarProduct") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Cadastrou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "editarProduct") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Editou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "deletarProduct") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Deletou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "cadastrarProduction") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Cadastrou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "editarProduction") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Editou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                                if(historico.action === "deletarProduction") {
                                    
                                    a = element.val().firstname;
                                    b = element.val().lastname;

                                    dados = "<td>" + historico.date + " às " + historico.hour + "</td>" + "<td>" + "Deletou um usuário" + "</td>" + "<td>" + a + " " + b + "</td>";

                                    tr.innerHTML = dados;
                                    var_lista.appendChild(tr);

                                }
                            }
                        })
                    })
                }
            )
        })
    }
}