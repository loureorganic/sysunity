var dados = ""
var var_lista = document.getElementById("tablebody");
var btnsee = '<button id="btnMod" class="button button2" onclick= '+ "iniciaModal('modal-see')" +' > Visualizar </button>';
var btnedit = '<button id="btnMod" class="button button2" onclick= '+ "iniciaModal('modal-edit')" +' > Editar </button>';
var btndelete = '<button id="btnMod" class="button button2" onclick= '+ "iniciaModal('modal-delete')" +' > Deletar </button>';

// DECLARACAO DOS MODAIS
var modalsee = ``;

var modaledit = ``;

var modaldelete = ``;


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

  // Funcao de atualizacao dos dados
  funcUpd(chave, nome, sobrenome, nomeusuario, email, job, acesslevel){
    
    const database = firebase.database();
    let active = false;
    database.ref('user/'+chave+'/firstname').set(nome);
    database.ref('user/'+chave+'/lastname').set(sobrenome);
    database.ref('user/'+chave+'/username').set(nomeusuario);
    database.ref('user/'+chave+'/email').set(email);
    database.ref('user/'+chave+'/job').set(job);
    database.ref('user/'+chave+'/acesslevel').set(acesslevel);
    window.location.reload(active);

  };

  // Modal de visualizar
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
  
  // Modal de editar
  funcmodaledit(a){

    var self = this;

    const firebaseref = firebase.database().ref("user");
    firebaseref.once('value',(resultado)=>{
      
      resultado.forEach(element => {

        if(element.child("username").val() == a) {

          document.getElementById("nome").placeholder = element.val().firstname;
          document.getElementById("sobrenome").placeholder = element.val().lastname;
          document.getElementById("nomedeusuario").placeholder = element.val().username;
          document.getElementById("email").placeholder = element.val().email; 
          
          var btn = document.getElementById("btn_salvar");
          btn.addEventListener("click", function(e){
            var inputn = document.getElementById("nome").value;
            var inputsn = document.getElementById("sobrenome").value;
            var inputnu = document.getElementById("nomedeusuario").value;
            var inpute = document.getElementById("email").value;
            var select1 = document.getElementById("access");
            var select2 = document.getElementById("office");
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