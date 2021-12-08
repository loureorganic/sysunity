var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button id="btnSee" class="button button2" > Visualizar </button>';
var btnedit = '<button id="btnEdit" class="button button2" > Editar </button>';
var btndelete = '<button id="btnDelete" class="button button2" > Deletar </button>';


export default class databasemanagementuser {
  
  // MODAL DELETAR
  funcmodaldelete(dados){

    let valu = '';
    let active = false;
    const database = firebase.database();
    const firebaseref = firebase.database().ref("user");

    firebaseref.once('value',(resultado)=>{

      resultado.forEach(element => {

        if(element.child("username").val() == dados) {
          
          valu = element.key;
          database.ref('user/'+valu).remove();

          window.location.reload(active);

        }
      });
    })

  }

  // FUNCAO ATUALIZAR OS DADOS
  funcUpd(chave, nome, sobrenome, nomeusuario, email){
    
    const database = firebase.database();
    let active = false;
    database.ref('user/'+chave+'/firstname').set(nome);
    database.ref('user/'+chave+'/lastname').set(sobrenome);
    database.ref('user/'+chave+'/username').set(nomeusuario);
    database.ref('user/'+chave+'/email').set(email);
    // database.ref('user/'+chave+'/job').set(job);
    // database.ref('user/'+chave+'/acesslevel').set(acesslevel);
    window.location.reload(active);

  };

  // MODAL VISUALIZAR
  funcmodalsee(dados){
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
  
  // MODAL EDITAR
  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("user");
    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("username").val() == a) {

          document.getElementById("Nome").placeholder = element.val().firstname;
          document.getElementById("Sobrenome").placeholder = element.val().lastname;
          document.getElementById("Nomedeusuario").placeholder = element.val().username;
          document.getElementById("Email").placeholder = element.val().email;
          document.getElementById("Office").placeholder = element.val().office;
          document.getElementById("Access").placeholder = element.val().access;
          
          var btn = document.getElementById("btn_salvar");

          btn.addEventListener("click", function(e){

            var inputn = document.getElementById("Nome").value;
            var inputsn = document.getElementById("Sobrenome").value;
            var inputnu = document.getElementById("Nomedeusuario").value;
            var inpute = document.getElementById("Email").value;
            var select1 = document.getElementById("Access");
            var select2 = document.getElementById("Office");
            // var text1 = select1.options[select1.selectedIndex].text;
            // var text2 = select2.options[select2.selectedIndex].text;

            if(inputn === ""){
              inputn = element.val().firstname;
            } 
            if (inputsn === ""){
              inputsn = element.val().lastname;
            } 
            if (inputnu === ""){
              inputnu = element.val().username;
            } 
            if(inpute === ""){
              inpute = element.val().email;
            }

            self.funcUpd(element.key, inputn, inputsn, inputnu, inpute);
          })
            
        }
          
      });
      
    })

  }

  managementuser() {

    var self = this;

    const firebaseref = firebase.database().ref("user");

    // CRIACAO DA TABELA
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
      
      // VALIDANDO MODAL CLICADO
      var everclass = document.querySelectorAll(".dot td");
      for( var i = 0; i < everclass.length; i++){
        
        everclass[i].addEventListener("click", function(data){

          var parent = this.parentNode;
          var div = document.createElement('div');

          if(data.path[0].id === 'btnDelete'){
            self.iniciaModal("modal-delete", parent.getElementsByTagName('td')[1].innerHTML)
          }

          else if(data.path[0].id === 'btnSee'){
            self.iniciaModal("modal-see", parent.getElementsByTagName('td')[1].innerHTML);
          }

          else if(data.path[0].id === 'btnEdit'){
            self.iniciaModal("modal-edit", parent.getElementsByTagName('td')[1].innerHTML);
          }
        })
      }
    })
  }

  iniciaModal(modalID, user) {
    const modal = document.getElementById(modalID);
    if(modal){
        modal.classList.add('mostrar');

        modal.addEventListener("click", (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
          modal.classList.remove('mostrar');
        }
      })
    }

    if(modalID == "modal-see") {
      this.funcmodalsee(user);
    } 
    else if(modalID == "modal-edit") {
      this.funcmodaledit(user);
    } 
    else if(modalID == "modal-delete") {
      this.funcmodaldelete(user)
    }
  }

}