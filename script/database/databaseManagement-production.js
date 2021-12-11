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
          "<td>" + producao.product + "</td>" + "<td>" + producao.type + 
          "</td>" + "<td>" + producao.batch + "</td>" + "<td "+"id='gridModal'>" + btnsee + btnedit + btndelete + "</td>";
          tr.innerHTML = dados;
          var_lista.appendChild(tr);
          
        }
      )
      

      // VALIDACAO DO MODAL CLICADO
      var everclass = document.querySelectorAll(".dot td");
      for(var i = 0; i < everclass.length; i++){
        
        everclass[i].addEventListener("click", function(data){

          var parent = this.parentNode;
          var div = document.createElement('div');

          if(data.path[0].id === 'btnDelete'){
            div.innerHTML = modaldelete;
            var_lista.appendChild(div);
            document.getElementById('confirm').addEventListener("click", function(){
              self.funcmodaldelete(parent.getAttribute('id'))       
            });
          }

          else if(data.path[0].id === 'btnSee'){
            div.innerHTML = modalsee;
            var_lista.appendChild(div);
            var parent = this.parentNode;
            self.funcmodalsee(parent.getElementsByTagName('td')[1].innerHTML);
          }

          else if(data.path[0].id === 'btnEdit'){
            div.innerHTML = modaledit;
            var_lista.appendChild(div);  
            var parent = this.parentNode;
            self.funcmodaledit(parent.getElementsByTagName('td')[1].innerHTML);
          }
        })
      }
    })
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
          document.getElementById("item").value = element.val().product + " de " + element.val().type;
          document.getElementById("lote").value = "Em andamento" //element.val().batch;
          document.getElementById("qntEstoque").value = element.val().packagequantity + " pacotes";
          document.getElementById("qntProduzida").value = "Em andamento" //element.val().unity;
          document.getElementById("dataProdução").value = element.val().fabricationdate;
          document.getElementById("dataVenciemnto").value = element?.val()?.deadlinedate;
          document.getElementById("prazo").value = element.val().validate + " dias";
          document.getElementById("totalProducao").value = element.val().totalquantity;
          
        }
        
      });
      
      // GAMBIARRA
      usfirebaseref.once('value',(resultado)=>{
  
        resultado.forEach(element => {
  
          if(element.key == u) {
            document.getElementById("funcionario").value = element.val().firstname + " " + element.val().lastname;
            t = element.val().firstname + " " + element.val().lastname;
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
          
          document.getElementById("item").placeholder = element.val().product + " de " + element.val().type;
          document.getElementById("lote").placeholder = "Em andamento";
          document.getElementById("funcionario").placeholder = "Em andamento";
          document.getElementById("qntEstoque").placeholder = element.val().packagequantity + " pacotes";
          document.getElementById("qntProduzida").placeholder = "Em andamento";
          document.getElementById("dataProdução").placeholder = element.val().fabricationdate;
          document.getElementById("dataVenciemnto").placeholder = element?.val()?.deadlinedate;
          document.getElementById("prazo").placeholder = element.val().validate + " dias";
          document.getElementById("totalProducao").placeholder = element.val().totalquantity;

          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){

            // var item = document.getElementById("item").value;
            // var lote = document.getElementById("lote").value;
            // var funcionario = document.getElementById("funcionario").value;
            // var qntEstoque = document.getElementById("qntEstoque").value;
            // var qntProduzida = document.getElementById("qntProduzida").value;\
            var dataProducao = document.getElementById("dataProdução").value;
            var dataVenciemnto = document.getElementById("dataVenciemnto").value;
            var prazo = document.getElementById("prazo").value;
            var totalProducao = document.getElementById("totalProducao").value;

            // if(item === ""){
            //   item = element.val().name;
            // } 
            // if (lote === ""){
            //   lote = element.val().batch;
            // } 
            // if (funcionario === ""){
            //   funcionario = element.val().;
            // }
            // if (qntEstoque === ""){
            //   qntEstoque = element.val().packagequantity;
            // }
            // if (qntProduzida === ""){
            //   qntProduzida = element.val().value;
            // }
            if (dataProducao === ""){
              dataProducao = element.val().fabricationdate;
            }
            if (dataVenciemnto === ""){
              dataVenciemnto = element.val().deadlinedate;
            }
            if (prazo === ""){
              prazo = element.val().validate;
            }
            if (totalProducao === ""){
              totalProducao = element.val().totalquantity;
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