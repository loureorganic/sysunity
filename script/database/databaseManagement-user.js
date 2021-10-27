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
      <h5 class="modal-title">Visualizar Usuário</h5>
      <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>

    <div class="modal-body">

      <form>

        <div class="user-email">
          <label for="">Nome
            <input id="nome" type="text" placeholder="" disabled/>
          </label>
          <label for="">Sobrenome
            <input id="sobrenome" type="text" placeholder="" disabled/>
          </label>
        </div>

        <div class="user-email">
          <label for="">Usuário
            <input id="nomedeusuario" type="text" placeholder="" disabled/>
          </label>
          <label for="">Email
            <input id="email" type="text" placeholder="" disabled/>
          </label>
        </div>

        <div class="office-access">   
          <label for="">Cargo
            <input id="office" disabled></input>
          </label>
          <label for="">Nivel de acesso
            <input id="access" disabled></input>
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
        <h5 class="modal-title2">Editar Usuário</h5>
          <button type="button" class="delete" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="user-email">
            <label for="">Nome
              <input id="nome" type="text" placeholder="">
              <p id="msgErro" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
            <label for="">Sobrenome
              <input id="sobrenome" type="text" placeholder="">
              <p id="msgErro2" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
          </div>
          <div class="user-email">
            <label for="">Usuário
              <input id="nomedeusuario" type="text" placeholder="">
              <p id="msgErro3" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
            <label for="">Email
              <input id="email" type="text" placeholder="">
              <p id="msgErro4" style="display: none;">O Campo precisa ser preenchido</p>
            </label>
          </div>
          <div class="office-access">   
            <label for="">Cargo
              <select id="office">
                <div class="dropdown-menu">
                  <option value="proprietario">Proprietário</option>
                  <option value="vendedor">Vendedor</option>
                </div>
              </select>
            </label>
            <label for="">Nivel de acesso
              <select id="access">
                <option value="administrador">Administrador</option>
                <option value="gerenciador">Gerenciador</option>
                <option value="visualizador">Visualizador</option>
              </select>
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

var modaldelete = `
<div class="modal" id="MyModalDeletar">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title3">Deletar Usuário</h5>
        <button type="button" class="delete" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <form>
        <h3>Tem certeza que deseja deletar o usuário?</h3>
        <div class="alternative">
          <button type="button" id="confirm" class="btn btn-primary">SIM</button>
          <button type="button" id="deny" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;


export default class databasemanagementuser {
  
 consultData(dados){
   let valu = '';
   const database = firebase.database();
  const firebaseref = firebase.database().ref("user");
  firebaseref.once('value',(resultado)=>{
    resultado.forEach(element => {
      if(element.child("username").val() == dados) {
        console.log(element.key)
        valu = element.key;
        console.log('user/'+valu)
        database.ref('user/'+valu).remove();
      }
    });
  })

 }

  modaldata(dados){
    const firebaseref = firebase.database().ref("user");
    firebaseref.once('value',(resultado)=>{

      resultado.forEach(element => {

        if(element.child("username").val() == dados) {

          document.getElementById("nome").value = element.val().firstname;
          document.getElementById("sobrenome").value = element.val().lastname;
          document.getElementById("nomedeusuario").value = element.val().username;
          document.getElementById("email").value = element.val().email;
          document.getElementById("office").value = element.val().job;
          document.getElementById("access").value = element.val().acesslevel;

        }
            
      });

    })

  }
  
  managementuser(){

    var self = this;

    const firebaseref = firebase.database().ref("user");

    firebaseref.once('value', function(all){
      all.forEach(
        function(curecord){
          var usuario = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');
          dados =
          "<td>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
          "<td id='username2' >" + usuario.username + "</td>" + "<td>" + btnsee + btnedit + btndelete + "</td>";

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
              self.consultData(parent.getElementsByTagName('td')[1].innerHTML)
            });
          }
          else if(data.path[0].id === 'btnSee'){
            div.innerHTML = modalsee;
            var_lista.appendChild(div);
          }
          else if(data.path[0].id === 'btnEdit'){
            div.innerHTML = modaledit;
            var_lista.appendChild(div);
          }
          self.modaldata(parent.getElementsByTagName('td')[1].innerHTML);
        
        })
      }
    })
  }            
}