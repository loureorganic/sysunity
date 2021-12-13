var dados = ""
var var_lista = document.getElementById("tablebody");

let fname;
let lname;

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
          "<td>" + producao.product + "</td>" + "<td>" + producao.type + 
          "</td>" + "<td>" + producao.batch + "</td>" + "<td "+"id='gridModal'>" + btnsee + btnedit + btndelete + "</td>";
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
            self.iniciaModal("modal-delete",parent.getAttribute('id'));     
            
          }

          else if(data.path[0].id === 'btnSee'){
            self.iniciaModal("modal-see", parent.getElementsByTagName('td')[1].innerHTML);
          }

          else if(data.path[0].id === 'btnEdit'){
            self.iniciaModal("modal-edit",parent.getElementsByTagName('td')[1].innerHTML);
          }
        })
      }
    })
  }

    // CRIACAO DO MODAL
    iniciaModal(modalID, product) {

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
        this.funcmodalsee(product);
      } 
      else if(modalID == "modal-edit") {
        this.funcmodaledit(product);
      } 
      else if(modalID == "modal-delete") {
        this.funcmodaldelete(product)
      }
    }

  // MODAL DE VISUALIZAR
  funcmodalsee(dados){
    const firebaseref = firebase.database().ref("production");
    const usfirebaseref = firebase.database().ref("user");
    let u;   
    
    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {
        
        if(element.child("type").val() == dados) {
          
          u = element.val().user;
          document.getElementById("produto").value = element.val().product;
          document.getElementById("tipo").value = element.val().type;
          document.getElementById("lote").value = element.val().batch;
          document.getElementById("pacotes").value = element.val().packagequantity;
          document.getElementById("unidades").value = element.val().packageperunity;
          document.getElementById("quantidade").value = element.val().totalquantity;
          // document.getElementById("funcionario").value = "Em Andamento";
          document.getElementById("dataproducao").value = element.val().fabricationdate;
          document.getElementById("datavencimento").value = element.val().deadlinedate;
          document.getElementById("valortotalprocucao").value = "Em Andamento";
          document.getElementById("prazo").value = element.val().validate;
          
        }
        
      });
      
      // GAMBIARRA
      usfirebaseref.once('value',(resultado)=>{
  
        resultado.forEach(element => {
  
          if(element.key == u) {
            document.getElementById("funcionario").value = element.val().firstname + " " + element.val().lastname;
            fname = element.val().firstname;
            lname = element.val().lastname;
          }
              
        });
        // GAMBIARRA
      
      })

    })

  }

  // MODAL DE EDITAR
  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("production");

    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("type").val() == a) {

          document.getElementById("produto2").placeholder = element.val().product;
          document.getElementById("tipo2").placeholder = element.val().type;
          document.getElementById("lote2").placeholder = element.val().batch;
          document.getElementById("pacotes2").placeholder = element.val().packagequantity;
          document.getElementById("unidades2").placeholder = element.val().packageperunity;
          document.getElementById("quantidade2").placeholder = element.val().totalquantity;
          document.getElementById("funcionario2").placeholder = "Em Andamento";
          document.getElementById("dataproducao2").placeholder = element.val().fabricationdate;
          document.getElementById("datavencimento2").placeholder = element.val().deadlinedate;
          document.getElementById("valortotalprocucao2").placeholder = "Em Andamento";
          document.getElementById("prazo2").placeholder = element.val().validate;

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
            
            
            
            self.funcUpd(element.key, dataProducao, dataVenciemnto, totalProducao, prazo);
          })
            
        }
          
      });
      
    })

  }

  // FUNCAO P/ ATUALIZAR DADOS
  funcUpd(chave, dataprodução, datavenciemnto, totalProducao, pra){

    const database = firebase.database();
    let active = false;
    database.ref('production/'+chave+'/fabricationdate').set(dataprodução);
    database.ref('production/'+chave+'/deadlinedate').set(datavenciemnto);
    database.ref('production/'+chave+'/totalquantity').set(totalProducao);
    database.ref('production/'+chave+'/validate').set(pra);
    
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
        valu = element.key;
        // database.ref('production/'+valu).remove();

        // window.location.reload(active);
      }
    });
  })

 }

}