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
          <button type="button" class="btn btn-primary">SIM</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div> `;

export default class databasemanagementproduction {

  managementproduction() {

    var self = this;

    const firebaseref = firebase.database().ref("product");

    firebaseref.once('value', function(all){
      all.forEach(
        function(curecord){
          var produto = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          dados =
          "<td>" + produto.name + "</td>" + 
          "<td>" + produto.type + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";

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
    // const firebaseref = firebase.database().ref("product");
    // firebaseref.once('value',(resultado)=>{

    //   resultado.forEach(element => {

    //     if(element.child("value").val() == dados) {

    //       document.getElementById("nome").value = element.val().name;
    //       document.getElementById("tipo").value = element.val().type;
    //       document.getElementById("valor").value = element.val().value;

    //     }
            
    //   });

    // })

  }

  funcmodaledit(a){

    // var self = this;

    // const firebaseref = firebase.database().ref("product");
    // firebaseref.once('value',(resultado)=>{
      
    //   resultado.forEach(element => {

    //     if(element.child("value").val() == a) {

    //       document.getElementById("nome").placeholder = element.val().name;
    //       document.getElementById("tipo").placeholder = element.val().type;
    //       document.getElementById("valor").placeholder = element.val().value; 
          
    //       var btn = document.getElementById("btn_salvar");
    //       btn.addEventListener("click", function(e){
    //         var inputnome = document.getElementById("nome").value;
    //         var inputtipo = document.getElementById("tipo").value;
    //         var inputvalor = document.getElementById("valor").value;

    //         if(inputnome === ""){
    //           inputnome = element.val().name;
    //         } 
    //         if (inputtipo === ""){
    //           inputtipo = element.val().type;
    //         } 
    //         if (inputvalor === ""){
    //           inputvalor = element.val().value;
    //         }

    //         self.funcUpd(element.key, inputnome, inputtipo, inputvalor);
    //       })
            
    //     }
          
    //   });
      
    // })

  }

  funcUpd(chave, nome, tipo, valor){
    // const database = firebase.database();
    // let active = false;
    // database.ref('product/'+chave+'/name').set(nome);
    // database.ref('product/'+chave+'/type').set(tipo);
    // database.ref('product/'+chave+'/value').set(valor);
    
    // window.location.reload(active);
  };

  funcmodaldelete(dados){

  //   let valu = '';
  //   let active = false;
  //   const database = firebase.database();
  //   const firebaseref = firebase.database().ref("product");
  //   firebaseref.once('value',(resultado)=>{
  //   resultado.forEach(element => {
  //     if(element.child("value").val() == dados) {
  //       valu = element.key;
  //       database.ref('product/'+valu).remove();
  //       window.location.reload(active);
  //     }
  //   });
  // })

 }

}