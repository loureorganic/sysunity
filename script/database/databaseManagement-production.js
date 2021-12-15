var dados = ""
var var_lista = document.getElementById("tablebody");

var btnsee = '<button id="btnSee" class="button button2" ></button>';
var btnedit = '<button id="btnEdit" class="button button2" ></button>';
var btndelete = '<button id="btnDelete" class="button button2" ></button>';

export default class databasemanagementproduction {

  // CRIACAO DA TABELA
  managementproduction() {

    var self = this;

    const firebaseref = firebase.database().ref("production");

    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaseref.once('value', function(all){

      all.forEach(
        
        function(curecord){

          var producao = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          tr.setAttribute("id",curecord.key);
          dados = 
          "<td id='nomeProduct'>" + producao.product + "</td>" + "<td id='typeProduct'>" + producao.type + 
          "</td>" + "<td id='batchProduct'>" + producao.batch + "</td>" + "<td "+"id='gridModal'>" + btnsee + btnedit + btndelete + "</td>";
          tr.innerHTML = dados;
          var_lista.appendChild(tr);
          
        })
      
      // VALIDACAO DO MODAL CLICADO
      var everclass = document.querySelectorAll(".dot td");
      for(var i = 0; i < everclass.length; i++){
        
        everclass[i].addEventListener("click", function(data){

          var parent = this.parentNode;
          var div = document.createElement('div');

          if(data.path[0].id === 'btnDelete'){
            self.iniciaModal("modal-delete", parent.getAttribute('id')); 
          }

          else if(data.path[0].id === 'btnSee'){
            self.iniciaModal("modal-see", parent.getElementsByTagName('td')[1].innerHTML, parent.getElementsByTagName('td')[0].innerHTML);
          }

          else if(data.path[0].id === 'btnEdit'){
            self.iniciaModal("modal-edit", parent.getElementsByTagName('td')[1].innerHTML, parent.getElementsByTagName('td')[0].innerHTML);
          }
        })
      }
    })
  }

  // CRIACAO DO MODAL
  iniciaModal(modalID, product, nproduct) {

    const modal = document.getElementById(modalID);

    if(modal){

      modal.classList.add('mostrar');

      modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
          modal.classList.remove('mostrar');
        }
        if(e.target.id == 'deny') {
          modal.classList.remove('mostrar');
        }
      })
    }

    if(modalID == "modal-see") {
      this.funcmodalsee(product, nproduct);
    } 
    else if(modalID == "modal-edit") {
      this.funcmodaledit(product, nproduct);
    } 
    else if(modalID == "modal-delete") {
      this.funcmodaldelete(product)
    }
  }

  // MODAL DE VISUALIZAR
  funcmodalsee(dados, nomep){
    
    const firebaseref = firebase.database().ref("production");
    const pfirebaseref = firebase.database().ref("product");
    const usfirebaseref = firebase.database().ref("user");
    let u;
    let vl;

    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {
        
        if(element.child("type").val() == dados) {
          
          u = element.val().user;
          vl = element.val().totalquantity;

          document.getElementById("produto").value = element.val().product;
          document.getElementById("tipo").value = element.val().type;
          document.getElementById("lote").value = element.val().batch;
          document.getElementById("pacotes").value = element.val().packagequantity;
          document.getElementById("unidades").value = element.val().packageperunity;
          document.getElementById("quantidade").value = element.val().totalquantity;
          document.getElementById("funcionario").value = element.val().user;
          

          if(typeof element.val().fabricationdate === "undefined" && typeof element.val().deadlinedate === "undefined") {

            document.getElementById("dataproducao").value = "Não existe";
            document.getElementById("datavencimento").value = "Não existe";

          } else if(element.val().fabricationdate === "" && element.val().deadlinedate === "") {

            document.getElementById("dataproducao").value = "Não existe";
            document.getElementById("datavencimento").value = "Não existe";

          }
          else {
            document.getElementById("dataproducao").value = element.val().fabricationdate;
            document.getElementById("datavencimento").value = element.val().deadlinedate;
          }

          if(typeof element.val().validate === "undefined") {

            document.getElementById("prazo").value = "Não existe";

          } else if(element.val().validate === "") {

            document.getElementById("prazo").value = "Não existe";

          }
          else {

            document.getElementById("prazo").value = element.val().validate;

          }
          
        }
        
      });

      // GAMBIARRA
      pfirebaseref.once('value', function(all){

        let abe = all.val()[nomep];

        Object.keys(abe).forEach(function(item) {
  
          let cab = abe[item].value;

          document.getElementById("valortotalprocucao").value = cab * vl;
        })
      })
      // GAMBIARRA
      
      // GAMBIARRA
      usfirebaseref.once('value',(resultado)=>{
  
        resultado.forEach(element => {
  
          if(element.key == u) {
            document.getElementById("funcionario").value = element.val().firstname + " " + element.val().lastname;
          }
              
        });
      
      })
      // GAMBIARRA

    })

  }

  // MODAL DE EDITAR
  funcmodaledit(a, nomep){

    const pfirebaseref = firebase.database().ref("product");
    var self = this;
    let vl;

    const firebaseref = firebase.database().ref("production");

    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("type").val() == a) {

          vl = element.val().totalquantity;

          if(typeof element.val().fabricationdate === "undefined" && typeof element.val().deadlinedate === "undefined") {
            document.getElementById("dataproducao2").placeholder = "Não existe";
            document.getElementById("datavencimento2").placeholder = "Não existe";
            document.getElementById("dataproducao2").disabled = true;
            document.getElementById("datavencimento2").disabled = true;
          } else if(element.val().fabricationdate === "" && element.val().deadlinedate === "") {
            document.getElementById("dataproducao2").placeholder = "Não existe";
            document.getElementById("datavencimento2").placeholder = "Não existe";
            document.getElementById("dataproducao2").disabled = true;
            document.getElementById("datavencimento2").disabled = true;
          }
          else {
            document.getElementById("dataproducao2").placeholder = element.val().fabricationdate;
            document.getElementById("datavencimento2").placeholder = element.val().deadlinedate;
            document.getElementById("dataproducao2").disabled = false;
            document.getElementById("datavencimento2").disabled = false;
          }

          if(typeof element.val().validate === "undefined") {
            document.getElementById("prazo2").placeholder = "Não existe";
            document.getElementById("prazo2").disabled = true;
          } else if(element.val().validate === "") {
            document.getElementById("prazo2").placeholder = "Não existe";
            document.getElementById("prazo2").disabled = true;
          }
          else {
            document.getElementById("prazo2").placeholder = element.val().validate;
            document.getElementById("prazo2").disabled = false;
          }

          document.getElementById("produto2").placeholder = element.val().product;
          document.getElementById("tipo2").placeholder = element.val().type;
          document.getElementById("lote2").placeholder = element.val().batch;
          document.getElementById("pacotes2").placeholder = element.val().packagequantity;
          document.getElementById("unidades2").placeholder = element.val().packageperunity;
          document.getElementById("quantidade2").placeholder = element.val().totalquantity;

          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){

            var produto = document.getElementById("produto2").value;
            var tipo = document.getElementById("tipo2").value;
            var lote = document.getElementById("lote2").value;
            var pacotes = document.getElementById("pacotes2").value;
            var unidades = document.getElementById("unidades2").value;
            var quantidade = document.getElementById("quantidade2").value;
            var funcionario = document.getElementById("funcionario2").value;
            var dataproducao = document.getElementById("dataproducao2").value;
            var datavencimento = document.getElementById("datavencimento2").value;
            var valortotalprocucao = document.getElementById("valortotalprocucao2").value;
            var prazo = document.getElementById("prazo2").value;

            if(produto === ""){
              produto = element.val().product;
            }
            if(tipo === ""){
              tipo = element.val().type;
            }
            if(lote === ""){
              lote = element.val().batch;
            }
            if(pacotes === ""){
              pacotes = element.val().packagequantity;
            }
            if(unidades === ""){
              unidades = element.val().packageperunity;
            }
            if(quantidade === ""){
              quantidade = element.val().totalquantity;
            }
            // if(funcionario === ""){
            //   funcionario = element.val().product;
            // }
            // if(dataproducao === ""){
            //   dataproducao = element.val().fabricationdate;
            // }
            // if(datavencimento === ""){
            //   datavencimento = element.val().deadlinedate;
            // }
            // if(valortotalprocucao === ""){
            //   valortotalprocucao = element.val().product;
            // }
            // if(prazo === ""){
            //   prazo = element.val().validate;
            // }
            
            self.funcUpd(element.key, produto, tipo, lote, pacotes, unidades, quantidade, dataproducao, datavencimento, prazo);
          })
            
        }
          
      });

      // GAMBIARRA
      pfirebaseref.once('value', function(all){
        let abe = all.val()[nomep];
        Object.keys(abe).forEach(function(item) {

          let cab = abe[item].value;

          document.getElementById("valortotalprocucao2").value = cab * vl;
        })
      })
      // GAMBIARRA

      const usfirebaseref = firebase.database().ref("user");

      // GAMBIARRA
      usfirebaseref.once('value',(resultado)=>{
    
        resultado.forEach(element => {

          document.getElementById("funcionario2").placeholder = element.val().firstname + " " + element.val().lastname;
              
        });
      
      })
      // GAMBIARRA
      
    })

  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, produto, tipo, lote, pacotes, unidades, quantidade, dataproducao, datavencimento, prazo){

    const database = firebase.database();
    let active = false;
    database.ref('production/'+chave+'/product').set(produto);
    database.ref('production/'+chave+'/type').set(tipo);
    database.ref('production/'+chave+'/batch').set(lote);
    database.ref('production/'+chave+'/packagequantity').set(pacotes);
    database.ref('production/'+chave+'/packageperunity').set(unidades);
    database.ref('production/'+chave+'/totalquantity').set(quantidade);
    // database.ref('production/'+chave+'/user').set(funcionario);
    database.ref('production/'+chave+'/fabricationdate').set(dataproducao);
    database.ref('production/'+chave+'/deadlinedate').set(datavencimento);
    database.ref('production/'+chave+'/validate').set(prazo);

    let today = new Date();
    let authUser = localStorage.getItem("id");
    let cadastrationDate = today.toLocaleDateString();
    let cadastrationHour = today.toLocaleTimeString();
    let newClientKey = database.ref().child('user').push().key;
    database.ref('historic/'+newClientKey+'/userAction').set(authUser);
    database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
    database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
    database.ref('historic/'+newClientKey+'/action').set("editarProduction");
    
    window.location.reload(active);

  };

  // MODAL DE DELETAR
  funcmodaldelete(dados){
    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("production");

    firebaseref.once('value',(resultado)=>{

    resultado.forEach(element => {

      if(element.key == dados) {

        var btn = document.getElementById("confirm");

        btn.addEventListener("click", function(e){

          valu = element.key;
          database.ref('production/'+valu).remove();

          let today = new Date();
          let authUser = localStorage.getItem("id");
          let cadastrationDate = today.toLocaleDateString();
          let cadastrationHour = today.toLocaleTimeString();
          let newClientKey = database.ref().child('user').push().key;
          database.ref('historic/'+newClientKey+'/userAction').set(authUser);
          database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
          database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
          database.ref('historic/'+newClientKey+'/action').set("deletarProduction");

          window.location.reload(active);
        })
        
      }
    });
  })

 }

}