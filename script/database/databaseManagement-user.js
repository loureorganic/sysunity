var dados = "";
var var_lista = document.getElementById("tablebody");

var btnsee = '<button id="btnSee" class="button button2" ></button>';
var btnedit = '<button id="btnEdit" class="button button2" ></button>';
var btndelete = '<button id="btnDelete" class="button button2" ></button>';


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

          var btn = document.getElementById("confirm");
          btn.addEventListener("click", function(e){

            let today = new Date();
            const database = firebase.database();
            let authUser = localStorage.getItem("id");
            let cadastrationDate = today.toLocaleDateString();
            let cadastrationHour = today.toLocaleTimeString();
            let newClientKey = database.ref().child('user').push().key;
            database.ref('historic/'+newClientKey+'/userAction').set(authUser);
            database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
            database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
            database.ref('historic/'+newClientKey+'/action').set("deletarUser");

            valu = element.key;
            database.ref('user/'+valu).remove();
  
            window.location.reload(active);
          })
        }
      });
    })

  }

  // FUNCAO ATUALIZAR OS DADOS
  funcUpd(chave, nome, sobrenome, nomeusuario, email, acesslevel, job){
    
    const database = firebase.database();
    let active = false;
    database.ref('user/'+chave+'/firstname').set(nome);
    database.ref('user/'+chave+'/lastname').set(sobrenome);
    database.ref('user/'+chave+'/username').set(nomeusuario);
    database.ref('user/'+chave+'/email').set(email);
    database.ref('user/'+chave+'/job').set(job);
    database.ref('user/'+chave+'/acesslevel').set(acesslevel);

    let today = new Date();
    let authUser = localStorage.getItem("id");
    let cadastrationDate = today.toLocaleDateString();
    let cadastrationHour = today.toLocaleTimeString();
    let newClientKey = database.ref().child('user').push().key;
    database.ref('historic/'+newClientKey+'/userAction').set(authUser);
    database.ref('historic/'+newClientKey+'/date').set(cadastrationDate);
    database.ref('historic/'+newClientKey+'/hour').set(cadastrationHour);
    database.ref('historic/'+newClientKey+'/action').set("editarUser");

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

          document.getElementById("nome2").placeholder = element.val().firstname;
          document.getElementById("sobrenome2").placeholder = element.val().lastname;
          document.getElementById("nomedeusuario2").placeholder = element.val().username;
          document.getElementById("email2").placeholder = element.val().email;
          document.getElementById("office2").placeholder = element.val().office;
          document.getElementById("access2").placeholder = element.val().access;
          
          var btn = document.getElementById("btn_salvar");

          btn.addEventListener("click", function(e){

            var inputn = document.getElementById("nome2").value;
            var inputsn = document.getElementById("sobrenome2").value;
            var inputnu = document.getElementById("nomedeusuario2").value;
            var inpute = document.getElementById("email2").value;
            var select1 = document.getElementById("access2");
            var select2 = document.getElementById("office2");
            var text1 = select1.options[select1.selectedIndex].text;
            var text2 = select2.options[select2.selectedIndex].text;

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

            self.funcUpd(element.key, inputn, inputsn, inputnu, inpute, text1, text2);
          })
            
        }
          
      });
      
    })

  }

  // CRIACAO DA TABELA
  managementuser() {

    var self = this;

    const firebaseref = firebase.database().ref("user");

    // CRIACAO E POPULAR OS DADOS NA TABELA
    firebaseref.once('value', function(all){

      all.forEach(

        function(curecord){
          
          var usuario = curecord.val();
          var tr = document.createElement('tr');
          tr.classList.add('dot');

          dados =
          "<td id='username1'>" + usuario.firstname + " " + usuario.lastname + "</td>" + 
          "<td id='username2' >" + usuario.username + "</td>" + "<td id='gridModal' >" + btnsee + btnedit + btndelete + "</td>";

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
            console.log(parent.getElementsByTagName('td')[1].innerHTML)
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
        if(e.target.id == 'deny') {
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