var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button type="button" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button type="button" class="delete" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var modalsee = ` <div class="modal" id="MyModal">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Visualizar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div id="div-table" class="user-email">
          <table id="table-vendas">
            <thead id="thead-vendas">
              <tr id="thead-tr-vendas">
                <th>Item</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody id="tbody-vendas" class="tbody-vendas">
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" disabled />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" disabled />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" disabled />
                </td>
              </tr>                              
            </tbody>
          </table>
        </div>
        <div>
          <br>
          <h4>Informações de Pagamento</h4>
        </div>                       
        <div class="user-email">
          <label for="">Forma de pagamento
            <input id="prazo" type="text" placeholder="" disabled />
          </label>
          <label for="">Data de pagamento
            <input id="totalProducao" type="text" placeholder="" disabled />
          </label>
          <label for="">Valor pago
            <input id="totalProducao" type="text" placeholder="" disabled />
          </label>
        </div>
        <div class="user-email">
          <label for="">Vendedor
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
          <label for="">Data da Venda
            <input id="dataProdução" type="text" placeholder="" disabled />
          </label>
          <label for="">Data de entrega
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
          <label for="">Total
            <input id="dataVenciemnto" type="text" placeholder="" disabled />
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

var modaledit = `<div class="modal" id="MyModalEditar">
<div class="modal-dialog modal-dialog-centered modal-lg">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title2">Editar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <div id="div-table" class="user-email">
          <table id="table-vendas">
            <thead id="thead-vendas">
              <tr id="thead-tr-vendas">
                <th>Item</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody id="tbody-vendas" class="tbody-vendas">
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>
              <tr>
                <td>
                  <input id="inputItem" type="text" placeholder="Coxinha de frango" />
                </td>
                <td>
                  <input id="inputQtn" type="text" placeholder="20" />
                </td>
                <td>
                  <input id="inputValor" type="text" placeholder="R$ 0,69" />
                </td>
              </tr>                              
            </tbody>
          </table>
        </div>
        <div>
          <br>
          <h4>Informações de Pagamento</h4>
        </div>                       
        <div class="user-email">
          <label for="">Forma de pagamento
            <input id="prazo" type="text" placeholder="" />
          </label>
          <label for="">Data de pagamento
            <input id="totalProducao" type="text" placeholder="" />
          </label>
          <label for="">Valor pago
            <input id="totalProducao" type="text" placeholder="" />
          </label>
        </div>
        <div class="user-email">
          <label for="">Vendedor
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>
          <label for="">Data da Venda
            <input id="dataProdução" type="text" placeholder="" />
          </label>
          <label for="">Data de entrega
            <input id="dataVenciemnto" type="text" placeholder="" />
          </label>
          <label for="">Total
            <input id="dataVenciemnto" type="text" placeholder="" />
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
</div>`;

var modaldelete = `<div class="modal" id="MyModalDeletar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title3">Deletar Vendas</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <h3>Tem certeza que deseja deletar a venda?</h3>
        <div class="alternative">
          <button type="button" class="btn btn-primary">SIM</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;


export default class databasemanagementsale{

  managementsale(){
    var self = this;

    const firebaseref = firebase.database().ref("sale");

    firebaseref.once('value', function(all){
      all.forEach(
        function(curecord){
          var venda = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          dados =
          "<td>" + venda.date + "</td>" + "<td>" + venda.seller + "</td>" + "<td>" + venda.total + "</td>" +
          "<td>" + btnsee + btnedit + btndelete + "</td>";

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
    const firebaseref = firebase.database().ref("sale");
    firebaseref.once('value',(resultado)=>{

      resultado.forEach(element => {

        if(element.child("value").val() == dados) {

          document.getElementById("nome").value = element.val().name;
          document.getElementById("tipo").value = element.val().type;
          document.getElementById("valor").value = element.val().value;

        }   
      });
    })
  }

  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("sale");
    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("value").val() == a) {

          document.getElementById("nome").placeholder = element.val().name;
          document.getElementById("tipo").placeholder = element.val().type;
          document.getElementById("valor").placeholder = element.val().value; 
          
          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){
            var inputnome = document.getElementById("nome").value;
            var inputtipo = document.getElementById("tipo").value;
            var inputvalor = document.getElementById("valor").value;

            if(inputnome === ""){
              inputnome = element.val().name;
            } 
            if (inputtipo === ""){
              inputtipo = element.val().type;
            } 
            if (inputvalor === ""){
              inputvalor = element.val().value;
            }

            self.funcUpd(element.key, inputnome, inputtipo, inputvalor);
          })   
        } 
      });
    })
  }

  funcUpd(chave, nome, tipo, valor){
    const database = firebase.database();
    let active = false;
    database.ref('sale/'+chave+'/name').set(nome);
    database.ref('sale/'+chave+'/type').set(tipo);
    database.ref('sale/'+chave+'/value').set(valor);
    
    window.location.reload(active);
  };

  funcmodaldelete(dados){

    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("sale");
    firebaseref.once('value',(resultado)=>{
    resultado.forEach(element => {
      if(element.child("value").val() == dados) {
        valu = element.key;
        database.ref('sale/'+valu).remove();
        window.location.reload(active);
      }
    });
  })
 }

}