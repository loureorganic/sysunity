var dados = ""
var var_lista = document.getElementById("tablebody");
var a = '<button type="button" id="see" class="see"></button>';
var b = '<button type="button" id="edit" class="edit"  data-bs-target="#MyModalEditar"></button>';
var c = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var d = `
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
            <input id="nome" type="text" value="This is some text" placeholder="" disabled/>
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
            <select id="office" disabled></select>
          </label>
          <label for="">Nivel de acesso
            <select id="access" disabled></select>
          </label> 
        </div>

      </form>

    </div>

  </div>

</div>

</div> `;

var e = `
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

var f = `
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
          <button type="button" class="btn btn-primary">SIM</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">NÃO</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</td>`;

export default class databasemanagementuser {
 
    managementuser() {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                    var usuario = curecord.val();
                    var g = document.createElement('tr');
                    g.classList.add('dot')
                    console.log(g);
                    dados = 
                                "<td>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
                                "<td>" + usuario.username + "</td>" + "<td>" + a + b + c + "</td>";
                    g.innerHTML = dados;
                    var_lista.appendChild(g);
                    //console.log(var_lista);
                  }
                  )

                  var clicked = false;
                  var y = document.querySelectorAll(".dot td");
                  console.log(y[0]);
                  for( var i = 0; i < y.length; i++){
                    y[i].addEventListener("click", function(e){
                      //console.log('aqui');
                      console.log(this.parentNode);
                      clicked = true;
    
                      //console.log(clicked);
                      
                    })
                    //console.log(clicked);
                  }

                  // var clicked = false;
                  // var y = document.querySelectorAll('#see');
                  // console.log(y[0]);
                  // for( var i = 0; i < y.length; i++){
                  //   y[i].addEventListener('click', function(e){
                  //     console.log('aqui');
                  //     console.log(y[i].innerHTML)
                  //     clicked = true;
                  //     console.log(clicked);
                      
                  //   })
                  //   console.log(clicked);
                  // }
                  })
              }
            }
