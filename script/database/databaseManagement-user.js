var dados = ""
var var_lista = document.getElementById("tablebody");
var a = '<button type="button" id="see" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var b = '<button type="button" id="edit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var c = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';
//string
var d = `<div class="modal" id="MyModal">

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

</div>`;

export default class databasemanagementuser {
 

  modaldata(){
   console.log('oi');
  }

    managementuser() {
        const firebaseref = firebase.database().ref("user");
        firebaseref.once('value', function(all){
            all.forEach(
                function(curecord){
                    var usuario = curecord.val();
                    var g = document.createElement('tr');
                    g.classList.add('dot');
                    dados = 
                                "<td>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
                                "<td id='username2' >" + usuario.username + "</td>" + "<td>" + a + b + c + "</td>";
                    g.innerHTML = dados;
                    var_lista.appendChild(g);
                  }
                  )
                  var y = document.querySelectorAll(".dot td");
                  for( var i = 0; i < y.length; i++){
                    y[i].addEventListener("click", function(e){
                      var c = this.parentNode;
                      // this.modaldata();
                      var g = document.createElement('div');
                      g.innerHTML = d;
                      var_lista.appendChild(g);
                    })
                  }
                  })
              }

              
            }
      
