var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button type="button" id="btnSee" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" id="btnEdit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var modalsee = ` <div class="modal" id="MyModal">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Visualizar Produção</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="user-email">
          <label for="">Item
            <input id="item" type="text" placeholder="" disabled />
          </label>
          <label for="">Lote
            <input id="lote" type="text" placeholder="" disabled />
          </label>
          <label for="">Funcionário
            <input id="funcionario" type="text" placeholder="" disabled />
          </label>
        </div>
        <div class="user-email">
          <label for="">Quantidade em Estoque
            <input id="qntEstoque" type="text" placeholder="" disabled />
          </label>
          <label for="">Quantidade Produzida
            <input id="qntProduzida" type="text" placeholder="" disabled />
          </label>                          
        </div>
        <div class="user-email">
          <label for="">Data de Produção
            <input id="dataProdução" type="text" placeholder="" disabled />
          </label>
          <label for="">Data de Venciemento
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>                          
        </div>
        <div class="user-email">
          <label for="">Prazo
            <input id="prazo" type="text" placeholder="" disabled />
          </label>                          
          <label for="">Total da Produção
            <input id="totalProducao" type="text" placeholder="" disabled />
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
</div> `;

var modaledit = ` <div class="modal" id="MyModalEditar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title2">Editar Produção</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="user-email">
          <label for="">Item
            <input id="item" type="text" placeholder="" />
          </label>
          <label for="">Lote
            <input id="lote" type="text" placeholder="" />
          </label>
          <label for="">Funcionário
            <input id="funcionario" type="text" placeholder="" />
          </label>
        </div>
        <div class="user-email">
          <label for="">Quantidade em Estoque
            <input id="qntEstoque" type="text" placeholder="" />
          </label>
          <label for="">Quantidade Produzida
            <input id="qntProduzida" type="text" placeholder="" />
          </label>                          
        </div>
        <div class="user-email">
          <label for="">Data de Produção
            <input id="dataProdução" type="text" placeholder="" />
          </label>
          <label for="">Data de Venciemento
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>                          
        </div>
        <div class="user-email">
          <label for="">Prazo
            <input id="prazo" type="text" placeholder="" />
          </label>                          
          <label for="">Total da Produção
            <input id="totalProducao" type="text" placeholder="" />
          </label>
        </div>
        <div class="save">
          <div class="btn-group">
            <button class="btn btn-primary" id="btn_salvar" type="button">SALVAR</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div> `;

var modaldelete = ` <div class="modal" id="MyModalDeletar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title3">Deletar Produção</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <h3>Tem certeza que deseja deletar a produção?</h3>
        <div class="alternative">
          <button type="button" id="confirm" class="btn btn-primary">SIM</button>
          <button type="button" id="deny" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div> `;

export default class databasemanagementproduction {

  managementproduction() {

    var self = this;

    const firebaseref = firebase.database().ref("production");

    firebaseref.once('value', function(all){
      all.forEach(
        function(curecord){
          var produção = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          dados = 
          "<td>" + produção.product + "</td>" + "<td>" + produção.type + 
          "</td>" + "<td>" + produção.batch + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";

          tr.innerHTML = dados;
          var_lista.appendChild(tr);
        }
      )
      
      var everclass = document.querySelectorAll(".dot td");
      for( var i = 0; i < everclass.length; i++){
        
        everclass[i].addEventListener("click", function(data){
          var parent = this.parentNode;
          var div = document.createElement('div');
          if(data.path[0].id === 'btnDelete'){
            div.innerHTML = modaldelete;
            var_lista.appendChild(div);
            document.getElementById('confirm').addEventListener("click", function(){
              self.funcmodaldelete(parent.getElementsByTagName('td')[1].innerHTML)
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

  funcmodalsee(dados){
    const firebaseref = firebase.database().ref("production");
    firebaseref.once('value',(resultado)=>{

      resultado.forEach(element => {

        if(element.child("type").val() == dados) {

          document.getElementById("item").value = element.val().product + " de " + element.val().type;
          document.getElementById("lote").value = element.val().batch;
          document.getElementById("funcionario").value = "Nulo" //element.val().batch;
          document.getElementById("qntEstoque").value = element.val().packagequantity + " pacotes";
          document.getElementById("qntProduzida").value = element.val().unity;
          document.getElementById("dataProdução").value = element.val().fabricationdate;
          document.getElementById("dataVenciemnto").value = element?.val()?.deadlinedate;
          document.getElementById("prazo").value = element.val().days;
          document.getElementById("totalProducao").value = element.val().totalquantity;

        }
            
      });

    })

  }

  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("production");
    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("type").val() == a) {

          document.getElementById("item").placeholder = element.val().name + " de " + element.val().type;
          document.getElementById("lote").placeholder = element.val().batch;
          document.getElementById("funcionario").placeholder = "Nulo" //element.val().batch;
          document.getElementById("qntEstoque").placeholder = element.val().package + " pacotes de " + element.val().unity + " unidades";
          document.getElementById("qntProduzida").placeholder = element.val().unity;
          document.getElementById("dataProdução").placeholder = element.val().fabrication;
          document.getElementById("dataVenciemnto").placeholder = element.val().pay;
          document.getElementById("prazo").placeholder = element.val().days;
          document.getElementById("totalProducao").placeholder = "Nulo" //element.val().pay;

          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){

            var item = document.getElementById("item").value;
            var lote = document.getElementById("lote").value;
            var funcionario = document.getElementById("funcionario").value;
            var qntEstoque = document.getElementById("qntEstoque").value;
            var qntProduzida = document.getElementById("qntProduzida").value;
            var dataProdução = document.getElementById("dataProdução").value;
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
            //   qntEstoque = element.val().value;
            // }
            // if (qntProduzida === ""){
            //   qntProduzida = element.val().value;
            // }
            // if (dataProdução === ""){
            //   dataProdução = element.val().fabrication;
            // }
            // if (dataVenciemnto === ""){
            //   dataVenciemnto = element.val().pay;
            // }
            // if (prazo === ""){
            //   prazo = element.val().days;
            // }
            // if (totalProducao === ""){
            //   totalProducao = element.val().;
            // }
            
            self.funcUpd(element.key, item, lote, dataProdução, dataVenciemnto, prazo);
          })
            
        }
          
      });
      
    })

  }

  funcUpd(chave, item, lote, dataProdução, dataVenciemnto, prazo){
    const database = firebase.database();
    let active = false;
    database.ref('production/'+chave+'/name').set(item);
    database.ref('production/'+chave+'/batch').set(lote);
    database.ref('production/'+chave+'/fabrication').set(dataProdução);
    database.ref('production/'+chave+'/pay').set(dataVenciemnto);
    database.ref('production/'+chave+'/days').set(prazo);
    
    window.location.reload(active);
  };

  funcmodaldelete(dados){
    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("production");
    firebaseref.once('value',(resultado)=>{
    resultado.forEach(element => {

      if(element.child("type").val() == dados) {
        valu = element.key;
        database.ref('production/'+valu).remove();

        window.location.reload(active);
      }
    });
  })

 }

}