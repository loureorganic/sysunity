var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button type="button" id="btnSee" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" id="btnEdit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var modalsee = `
<div class="modal" id="MyModal">

<div class="modal-dialog modal-dialog-centered">

  <div class="modal-content">

    <div class="modal-header">
      <h5 class="modal-title">Visualizar Produto</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>

    <div class="modal-body">

      <form>

        <div class="user-email">
          <label for="">Nome
            <input id="nome" type="text" placeholder="" disabled/>
          </label>
          <label for="">Tipo
            <input id="sobrenome" type="text" placeholder="" disabled/>
          </label>
          <label for="">Valor
            <input id="nomedeusuario" type="text" placeholder="" disabled/>
          </label>
        </div>

      </form>

    </div>

  </div>

</div>

</div>`;

var modaledit = `
<div class="modal" id="MyModalEditar">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title2">Editar Produto</h5>
          <button type="button" class="delete" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="user-email">
            <label for="">Nome
              <input id="nome" type="text" placeholder="">
              <p id="msgErro" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
            <label for="">Tipo
              <input id="tipo" type="text" placeholder="">
              <p id="msgErro2" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
            <label for="">Valor
              <input id="valor" type="text" placeholder="">
              <p id="msgErro2" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
          </div>
          
          <div class="save">
            <div class="btn-group">
              <button class="btn btn-primary" id="btn_salvar" type="button" >SALVAR</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>`;

var modaldelete = `
<div class="modal" id="MyModalDeletar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title3">Deletar Produto</h5>
        <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <h3>Tem certeza que deseja deletar esse produto?</h3>
        <div class="alternative">
          <button type="button" id="confirm" class="btn btn-primary">SIM</button>
          <button type="button" id="deny" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

export default class databasemanagementproduct {
    managementproduct() {

        var self = this;
    
        const firebaseref = firebase.database().ref("product");
    
        firebaseref.once('value', function(all){
          all.forEach(
            function(curecord){
              var usuario = curecord.val();
              var tr = document.createElement('tr');
              tr.classList.add('dot');
              dados =
              "<td>" +  + " " +  + "</td>" + 
              "<td id='username2' >" +  + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";
    
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
}