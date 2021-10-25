var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button type="button" id="see" class="visibility" data-bs-toggle="modal" data-bs-target="#MyModal"></button>';
var btnedit = '<button type="button" id="edit" class="edit" data-bs-toggle="modal" data-bs-target="#MyModalEditar"></button>';
var btndelete = '<button id="btnDelete" class="delete" type="button" data-bs-toggle="modal" data-bs-target="#MyModalDeletar"></button>';

var modal = `<div class="modal" id="MyModal">

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

export default class databasemanagementuser {
  
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
  
  managementuser() {

    var self = this;

    const firebaseref = firebase.database().ref("user");

    firebaseref.once('value', function(all){
      all.forEach(
        function(resultado){
          var usuario = resultado.val();
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
        everclass[i].addEventListener("click", function(e){

          var parent = this.parentNode;
          self.modaldata(parent.getElementsByTagName('td')[1].innerHTML);
          var div = document.createElement('div');
          div.innerHTML = modal;
                      
          var_lista.appendChild(div);
        })
      }
    })
  }            
}